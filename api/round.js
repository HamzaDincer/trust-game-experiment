const { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    participant_no,
    round_number,
    initial_amount,
    sent_amount,
    decision_time,
    return_amount,
  } = req.body;

  try {
    const result = await sql`
      INSERT INTO trust_game (participant_no, round_number, initial_amount, sent_amount, decision_time, return_amount)
      VALUES (${participant_no}, ${round_number}, ${initial_amount}, ${sent_amount}, ${decision_time}, ${return_amount})
    `;

    res
      .status(200)
      .json({ message: "Round data submitted successfully!", result });
  } catch (error) {
    console.error("Error submitting round data:", error);
    res
      .status(500)
      .json({ message: "Error submitting data. Please try again later." });
  }
};
