class GameOfLife {
  constructor(grid, Cell) {
    this.grid = grid.map(row => row.map(el => new Cell(el)));
  };
};

module.exports = GameOfLife;