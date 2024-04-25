const { sql } = require("@vercel/postgres");

module.exports = async function handler(request, response) {
  try {
    const result = await sql`DROP TABLE Users;`;
    return response
      .status(200)
      .json({ message: "Users table deleted successfully!" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
