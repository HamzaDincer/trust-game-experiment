const { sql } = require("@vercel/postgres");

module.exports = async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE Users ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
