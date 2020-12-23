class Cell {
  constructor(state) {
    this.state = state === 'ALIVE' ? 1 : 0;
  };

  newState(neighbours) {
    this.state = 0;
  }
};

module.exports = Cell;