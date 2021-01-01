class Cell {
  constructor(state) {
    this.state = state;
  };

  newState = neighbours => {
    if(this.state === 1 && (neighbours === 2 || neighbours === 3)) return 1;
    
    if(this.state === 0 && neighbours === 3) return 1;

    return 0;
  };
};

module.exports = Cell;