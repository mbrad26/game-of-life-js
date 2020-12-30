const GameOfLife = require('../lib/gameOfLife');
const Cell = require('../lib/cell');

// jest.mock('../lib/cell');

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

    // expect(Cell).toHaveBeenCalledTimes(9);
    expect(game.grid).toMatchObject(
      [
        [new Cell(0), new Cell(0), new Cell(0)], 
        [new Cell(0), new Cell(0), new Cell(0)], 
        [new Cell(0), new Cell(0), new Cell(0)]
      ]
    );
  });

  describe('.getNeighbours', () => {
    let spy;
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
      spy = jest.fn(str => ({ state: str}));
      game = new GameOfLife(grid, spy);
    });
    
    
    testCases.forEach(testCase => 
      it(`returns the number of alive neighbours for cell at row ${testCase.row}, col ${testCase.col}`, () => {
        expect(spy).toHaveBeenCalledTimes(16);
        expect(game.getNeighbours(testCase.row, testCase.col)).toEqual(testCase.count);
      })
    );
  });

  describe('.newState', () => {
    const grid = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ];
    const newState = [
      [new Cell(0), new Cell(0), new Cell(0)], 
      [new Cell(1), new Cell(1), new Cell(1)], 
      [new Cell(0), new Cell(0), new Cell(0)]
    ];
    // const spy = jest.fn(str => ({ state: str === 'ALIVE' ? 1 : 0}));
    const game = new GameOfLife(grid, Cell);

    game.newState();

    expect(game.grid).toEqual(newState);
  });
});