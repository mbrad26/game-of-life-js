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
    const grid = new Array(3).fill(new Array(3).fill(0));
    const game = new GameOfLife(grid, Cell);

    expect(Cell).toHaveBeenCalledTimes(9);
    expect(game.grid).toEqual(
      [
        [new Cell(0), new Cell(0), new Cell(0)], 
        [new Cell(0), new Cell(0), new Cell(0)], 
        [new Cell(0), new Cell(0), new Cell(0)]
      ]
    );
  });

  describe('.getNeighbours', () => {
    let game;
    const grid = [
      [0, 1, 0, 0], 
      [0, 0, 0, 1], 
      [0, 0, 1, 0],
      [0, 1, 0, 1]
    ];
    
    const testCases = [
      {row: 1, col: 1, count: 2},
      {row: 1, col: 0, count: 1},
      {row: 0, col: 1, count: 0},
      {row: 0, col: 2, count: 2},
      {row: 3, col: 1, count: 1},
      {row: 1, col: 3, count: 1},
      {row: 0, col: 0, count: 1},
      {row: 0, col: 3, count: 1},
      {row: 2, col: 3, count: 3},
      {row: 3, col: 0, count: 1},
      {row: 3, col: 3, count: 1},
    ];
    
    beforeEach(() => {
      Cell.mockImplementation(str => ({ state: str }));
      game = new GameOfLife(grid, Cell);
    });
    
    
    testCases.forEach(testCase => 
      it(`returns the number of alive neighbours for cell at row ${testCase.row}, col ${testCase.col}`, () => {
        expect(Cell).toHaveBeenCalledTimes(16);
        expect(game.getNeighbours(testCase.row, testCase.col)).toEqual(testCase.count);
      })
    );
  });

  describe('.newState', () => {
    it('returns the next state for a grid of 1', () => {
      const grid = [[1]];
      Cell.mockImplementation(() => ({ state: 0, nextState: jest.fn(() => 0) }));
      const game = new GameOfLife(grid, Cell);

      game.newState();
  
      expect(game.grid.toString()).toEqual([[new Cell(0)]].toString());
    });

    it('returns the next state for a grid of 2', () => {
      const grid = [[1, 1]];
      Cell.mockImplementation(str => ({ state: str, nextState: jest.fn(() => 0) }));
      const game = new GameOfLife(grid, Cell);

      game.newState();
  
      expect(game.grid.toString()).toEqual([[new Cell(0), new Cell(0)]].toString());
    });

    it('returns the next state for a grid of 4', () => {
      const grid = [[0, 1], [1, 1]];
      Cell.mockImplementation(str => ({ state: str, nextState: jest.fn(() => 1) }));
      const game = new GameOfLife(grid, Cell);

      game.newState();
  
      expect(game.grid.toString()).toEqual([[new Cell(1), new Cell(1)], [new Cell(1), new Cell(1)]].toString());
    });
  });
});