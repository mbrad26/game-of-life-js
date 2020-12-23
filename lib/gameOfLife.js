class GameOfLife {
  constructor(grid, cell) {
    this.grid = grid.map(row => row.map(el => new cell()));
  };
};

module.exports = GameOfLife;