
var numberOfislands = function(grid){
let count = 0;
for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      if(grid[x][y] === '1') {
        count++;
        
      }
    }
  }
}
