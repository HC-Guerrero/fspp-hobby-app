const db = require('../db/dbConfig.js');

const getAllGames = async () => {
  try {
    const allGames = await db.any('SELECT * FROM vidya');
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const game = await db.one('SELECT * FROM vidya WHERE id=$1', id);
    return game;
  } catch (error) {
    return error;
  }
};

const createGame = async (vidya) => {
  try {
    let {
      editing_rights,
      name,
      type,
      price,
      language,
      Store_Link,
      publisher,
      developer,
      platform,
      thumbnail,
      screenshot1,
      screenshot2,
      screenshot3,
      video,
      description,
    } = vidya;
    return await db.one(
      'INSERT INTO vidya (editing_rights, name, type, price, language, Store_Link, publisher, developer, platform, thumbnail, screenshot1, screenshot2, screenshot3, video, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
      [
        editing_rights,
        name,
        type,
        price,
        language,
        Store_Link,
        publisher,
        developer,
        platform,
        thumbnail,
        screenshot1,
        screenshot2,
        screenshot3,
        video,
        description,
      ],
    );
  } catch (error) {
    return error;
  }
};
const deleteGame = async (id) => {
  try {
    return await db.one(`DELETE FROM vidya WHERE id=$1 RETURNING *`, id);
  } catch (error) {
    return error;
  }
};

const updateGame = async (
  id,
  {
    editing_rights,
    name,
    type,
    price,
    language,
    Store_Link,
    publisher,
    developer,
    platform,
    thumbnail,
    screenshot1,
    screenshot2,
    screenshot3,
    video,
    description,
  },
) => {
  try {
    return await db.one(
      `UPDATE vidya SET editing_rights=$1, name=$2, type=$3, price=$4, language=$5, Store_Link=$6, publisher=$7, developer=$8, platform=$9, thumbnail=$10, screenshot1=$11, screenshot2=$12, screenshot3=$13, video=$14, description=$15 WHERE id=$16 RETURNING *`,
      [
        editing_rights,
        name,
        type,
        price,
        language,
        Store_Link,
        publisher,
        developer,
        platform,
        thumbnail,
        screenshot1,
        screenshot2,
        screenshot3,
        video,
        description,
        id,
      ],
    );
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
};
