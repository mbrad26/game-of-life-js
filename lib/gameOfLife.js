class GameOfLife {
  constructor(grid, Cell) {
    this.grid = grid.map(row => row.map(el => new Cell(el)));
  };

  getNeighbours = (r, c) => {
    let count = 0;

    count += this.grid[r-1][c-1].state; 
    count += this.grid[r-1][c].state;
    count += this.grid[r-1][c+1].state;
    count += this.grid[r][c-1].state;
    count += this.grid[r+1][c-1].state;
    count += this.grid[r+1][c].state;
    count += this.grid[r+1][c+1].state;

    // console.log('CLASS_GRID[0][1]: ', this.grid);
    console.log('COUNT: ', count);

    return count;
  };
};

module.exports = GameOfLife;