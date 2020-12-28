class GameOfLife {
  constructor(grid, Cell) {
    this.grid = grid.map(row => row.map(el => new Cell(el)));
  };

  getNeighbours = (r, c) => {
    let count = 0;

    count += r-1 >= 0 && c-1 >= 0 && this.grid[r-1][c-1].state; 
    count += r-1 >= 0 && this.grid[r-1][c].state;
    count += r-1 >= 0 && this.grid[r-1][c+1].state;
    count += c-1 >= 0 && this.grid[r][c-1].state;
    count += this.grid[r][c+1].state;
    count += c-1 >= 0 && this.grid[r+1][c-1].state;
    count += this.grid[r+1][c].state;
    count += this.grid[r+1][c+1].state;

    return count;
  };
};

module.exports = GameOfLife;