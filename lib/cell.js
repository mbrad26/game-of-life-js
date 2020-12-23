class Cell {
  constructor(state) {
    this.state = state === 'ALIVE' ? 1 : 0;
  };

  newState(neighbours) {
    if(this.state === 1) {
      if(neighbours === 2 || neighbours === 3) return this.state = 1;
      this.state = 0;
    } else {
      this.state = 1;
    }
  };
};

module.exports = Cell;