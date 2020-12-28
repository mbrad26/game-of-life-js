const GameOfLife = require('../lib/gameOfLife');
const Cell = require('../lib/cell');

jest.mock('../lib/cell');

describe('GameOfLife', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('is defined', () => {
    expect(GameOfLife).toBeDefined();
  });

  it('initializes with a nested array representing columns and rows', () => {
    const grid = new Array(3).fill(new Array(3).fill(''));
    const game = new GameOfLife(grid, Cell);

    expect(Cell).toHaveBeenCalledTimes(9);
    expect(game.grid).toEqual(
      [
        [new Cell(''), new Cell(''), new Cell('')], 
        [new Cell(''), new Cell(''), new Cell('')], 
        [new Cell(''), new Cell(''), new Cell('')]
      ]
    );
  });

  describe('.getNeighbours', () => {
    it('returns the number of alive neighbours', () => {
      const row = 1;
      const col = 1;
      const grid = [
        ['', 'ALIVE', '', ''], 
        ['', '', '', 'ALIVE'], 
        ['', '', 'ALIVE', ''],
        ['', 'ALIVE', '', '']
      ];

      const spy = jest.fn(str => { return { state: str === 'ALIVE' ? 1: 0}});
      const game = new GameOfLife(grid, spy);
      
      expect(spy).toHaveBeenCalledTimes(16);
      expect(game.getNeighbours(row, col)).toEqual(2);
    });

    it('returns the correct number of alive neighbours for cell at row 1, col 0', () => {
      const row = 1;
      const col = 0;
      const grid = [
        ['', 'ALIVE', '', ''], 
        ['', '', '', 'ALIVE'], 
        ['', '', 'ALIVE', ''],
        ['', 'ALIVE', '', '']
      ];

      const spy = jest.fn(str => { return { state: str === 'ALIVE' ? 1: 0}});
      const game = new GameOfLife(grid, spy);

      console.log('COUNT: ', game.grid);

      expect(game.getNeighbours(row, col)).toEqual(1);
    });
  });
});