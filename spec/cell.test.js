const Cell = require('../lib/cell');

describe('Cell', () => {
  it('is defined', () => { 
     expect(Cell).toBeDefined();
  });

  it('can have a dead state', () => {
    const state = 0;
    const cell = new Cell(state);

    expect(cell.state).toEqual(0);
  });

  it('can have an alive state', () => {
    const state = 1;
    const cell = new Cell(state);

    expect(cell.state).toEqual(1);
  });

  describe('nextState', () => {
    let cell;

    beforeEach(() => {
      cell = new Cell(1);
    })

    it('dies with less than two live neighbours', () => {
      const neighbours = 1;

      expect(cell.state).toEqual(1);
      expect(cell.nextState(neighbours)).toEqual(0);
    });

    it('lives on with two live neighbours', () => {
      const neighbours = 2;

      expect(cell.state).toEqual(1);
      expect(cell.nextState(neighbours)).toEqual(1);
    });

    it('lives on with three live neighbours', () => {
      const neighbours = 3;

      expect(cell.state).toEqual(1);
      expect(cell.nextState(neighbours)).toEqual(1);
    });

    it('dies with more than three live neighbours', () => {
      const neighbours = 4;

      expect(cell.state).toEqual(1);
      expect(cell.nextState(neighbours)).toEqual(0);
    });

    describe('a dead cell', () => {
      let cell;

      beforeEach(() => {
        cell = new Cell(0);
      });

      it('becomes alive with exactly three live neighbours', () => {
        let neighbours = 3;

        expect(cell.state).toEqual(0);
        expect(cell.nextState(neighbours)).toEqual(1);
      });

      it('remains dead if there are not exactly three live neighbours', () => {
        let neighbours = 5;

        expect(cell.state).toEqual(0);
        expect(cell.nextState(neighbours)).toEqual(0);

        neighbours = 2;

        expect(cell.nextState(neighbours)).toEqual(0);
      })
    });
  });
});