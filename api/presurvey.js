const { sql } = require("@vercel/postgres");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { participant_no, name, email, age, gender, education } = req.body;

  try {
    const result = await sql`
      INSERT INTO participants (participant_no, name, email, age, gender, education)
      VALUES (${participant_no}, ${name}, ${email}, ${age}, ${gender}, ${education})
    `;

    res
      .status(200)
      .json({ message: "Participant data  submitted successfully!", result });
  } catch (error) {
    console.error("Error submitting participant data:", error);
    res
      .status(500)
      .json({ message: "Error submitting data. Please try again later." });
  }
};
