const client = require("../client");


async function getMovieById(id) {
  try {
    const {
      rows: [movie],
    } = await client.query(
      `
        SELECT * FROM idxlib
        WHERE id = $1;
    `,
      [id]
    );
    return movie;
  } catch (error) {
    console.error("Problem getting movie by id", error);
  }
}

async function getLibrary(limit='all', offset='0') {

  try {
    const { rows } = await client.query(`
        SELECT * 
        FROM idxlib
        LIMIT ${limit}
        OFFSET ${offset}
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

async function updateMovie(id, name, type, year, genre, length, price, img) {
  const fields = { name, type, year, genre, length, price, img };
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [movie],
    } = await client.query(
      `
            UPDATE idxlib
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `,
      Object.values(fields)
    );
    return movie;
  } catch (error) {
    console.error("Problem updating Movie", error);
  }
}

module.exports = { getLibrary, getMovieById, addMovie, updateMovie };
