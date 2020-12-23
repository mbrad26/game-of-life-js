const GameOfLife = require('../lib/gameOfLife');
const Cell = require('../lib/cell');

jest.mock('../lib/cell');

describe('GameOfLife', () => {
  it('is defined', () => {
    expect(GameOfLife).toBeDefined();
  });

  it('initializes with a nested array representing columns and rows', () => {
    const state = new Array(3).fill(new Array(3).fill(''));
    const cell = new Cell();
    const game = new GameOfLife(state, cell);

    expect(game.grid).toStrictEqual(
      [
        [cell, cell, cell], 
        [cell, cell, cell], 
        [cell, cell, cell]
      ]
    );
  });
});