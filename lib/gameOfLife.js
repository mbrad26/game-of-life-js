const Cell = require('./cell');

class GameOfLife {
  constructor(grid, Cell) {
    this.grid = grid.map(row => row.map(el => new Cell(el)));
  };

  getNeighbours = (r, c) => {
    let count = 0;

    count += r-1 >= 0 && c-1 >= 0 && this.grid[r-1][c-1].state; 
    count += r-1 >= 0 && this.grid[r-1][c].state;
    count += r-1 >= 0 && this.grid[r-1][c+1] ? this.grid[r-1][c+1].state : 0;
    count += c-1 >= 0 && this.grid[r][c-1].state;
    count += this.grid[r][c+1] ? this.grid[r][c+1].state : 0;
    count += this.grid[r+1] && c-1 >= 0 ? this.grid[r+1][c-1].state : 0;
    count += this.grid[r+1] ? this.grid[r+1][c].state : 0;
    count += this.grid[r+1] && this.grid[r+1][c+1] ? this.grid[r+1][c+1].state : 0;

    return count;
  };

  newState = () => {
    return this.grid.map((row, i) => row.map((col, j) => new Cell(0)));
  };
};

module.exports = GameOfLife;