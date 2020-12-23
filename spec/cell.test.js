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
});