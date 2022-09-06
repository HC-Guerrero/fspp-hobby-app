const express = require('express');
const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require('../queries/games');
const gameController = express.Router();

gameController.get('/', async (request, response) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    response.status(200).json({
      success: true,
      payload: allGames,
    });
  } else {
    response.status(404).json();
  }
});

gameController.get('/:id', async (request, response) => {
  const { id } = request.params;
  const game = await getGame(id);
  if (game.id) {
    response.status(200).json({
      success: true,
      payload: game,
    });
  } else {
    response.status(404).json({
      success: false,
      id: id,
      payload: `I don't have a game with the give id of ${id}`,
    });
  }
});

gameController.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const gameToDelete = await deleteGame(id);
  if (gameToDelete) {
    if (gameToDelete.id) {
      response.status(200).json({
        success: true,
        payload: gameToDelete,
      });
    } else {
      response.status(404).json({
        success: false,
        payload: 'Unable to delete game of that id',
      });
    }
  } else {
    response.status(500).json({
      success: false,
      payload: 'Unable to delete game of that id' + gameToDelete,
    });
  }
});

gameController.post('/', async (request, response) => {
  try {
    const game = await createGame(request.body);
    response.json({
      success: true,
      payload: 'We have a new game listed!' + game,
    });
  } catch (error) {
    return error;
  }
});

gameController.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const aGame = await updateGame(id, request.body);
    response.json({
      success: true,
      payload: aGame,
    });
  } catch (error) {
    return error;
  }
});
module.exports = gameController;
