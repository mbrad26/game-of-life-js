class GameOfLife {
  constructor(grid, cell = new Cell) {
    this.grid = grid.map(row => row.map(el => cell));
  };
};

module.exports = GameOfLife;