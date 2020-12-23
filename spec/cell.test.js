const Cell = require('../lib/cell');

describe('Cell', () => {
  it('is defined', () => { 
     expect(Cell).toBeDefined();
  });

  it('can have a dead state', () => {
    const state = 'DEAD';
    const cell = new Cell(state);

    expect(cell.state).toEqual(0);
  });

  it('can have an alive state', () => {
    const state = 'ALIVE';
    const cell = new Cell(state);

    expect(cell.state).toEqual(1);
  });

  describe('newState', () => {
    let cell;

    beforeEach(() => {
      cell = new Cell('ALIVE');
    })

    it('dies with less than two live neighbours', () => {
      const neighbours = 1;

      expect(cell.state).toEqual(1);

      cell.newState(neighbours);

      expect(cell.state).toEqual(0);
    });

    it('lives on with two live neighbours', () => {
      const neighbours = 2;

      expect(cell.state).toEqual(1);

      cell.newState(neighbours);

      expect(cell.state).toEqual(1);
    });
  });
});