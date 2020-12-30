class Cell {
  constructor(state) {
    this.state = state;
  };

  newState = neighbours => {
    if(this.state === 1) {
      if(neighbours === 2 || neighbours === 3) return this.state = 1;
    } else {
      if(neighbours === 3) return this.state = 1;
    };

    this.state = 0;
  };
};

module.exports = Cell;