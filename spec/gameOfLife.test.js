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
    let spy;
    let game;
    const grid = [
      ['', 'ALIVE', '', ''], 
      ['', '', '', 'ALIVE'], 
      ['', '', 'ALIVE', ''],
      ['', 'ALIVE', '', '']
    ];
    
    const testCases = [
      {row: 1, col: 1, count: 2},
      {row: 1, col: 0, count: 1},
      {row: 0, col: 1, count: 0},
      {row: 3, col: 1, count: 1},
      {row: 1, col: 3, count: 1},
      {row: 0, col: 0, count: 1},
      {row: 0, col: 3, count: 1},
    ];
    
    beforeEach(() => {
      spy = jest.fn(str => { return { state: str === 'ALIVE' ? 1: 0}});
      game = new GameOfLife(grid, spy);
    });
    
    
    testCases.forEach(testCase => 
      it(`returns the number of alive neighbours for cell at row ${testCase.row}, col ${testCase.col}`, () => {
        expect(spy).toHaveBeenCalledTimes(16);
        expect(game.getNeighbours(testCase.row, testCase.col)).toEqual(testCase.count);
      })
    );
  });
});