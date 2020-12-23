const GameOfLife = require('../lib/gameOfLife');
const Cell = require('../lib/cell');

jest.mock('../lib/cell', () => {
  return jest.fn();
});

describe('GameOfLife', () => {
  it('is defined', () => {
    expect(GameOfLife).toBeDefined();
  });

  it('initializes with a nested array representing columns and rows', () => {
    const state = new Array(3).fill(new Array(3).fill(''));
    const game = new GameOfLife(state, Cell);

    expect(Cell).toHaveBeenCalledTimes(9);
    expect(game.grid).toEqual(
      [
        [new Cell(''), new Cell(''), new Cell('')], 
        [new Cell(''), new Cell(''), new Cell('')], 
        [new Cell(''), new Cell(''), new Cell('')]
      ]
    );
  });
});