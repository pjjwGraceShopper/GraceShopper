const client = require("../client");

async function getLibrary() {
  try {
    const { rows } = await client.query(`
        SELECT * 
        FROM idxlib
            `);

    return rows;
  } catch (e) {
    throw e;
  }
}

async function addMovie(name, type, year, genre, length, price, img) {
  try {
    const {
      rows: [movie],
    } = await client.query(
      `
      INSERT INTO idxlib (name, type, year, genre, length, price, img)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `,
      [name, type, year, genre, length, price, img]
    );
    return movie;
  } catch (error) {
    console.error("Problem creating movie", error);
  }
}

module.exports = { getLibrary, addMovie };
