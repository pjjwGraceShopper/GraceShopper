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

module.exports = { getLibrary };
