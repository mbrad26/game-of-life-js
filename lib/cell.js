class Cell {
  constructor(state) {
    this.state = state === 'DEAD' ? 0 : 1;
  };
};

module.exports = Cell;