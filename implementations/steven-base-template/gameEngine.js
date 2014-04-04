function GameEngine(width, height, mineCount) {
    var self = this;
    this.board = [];
    this.width = width;
    this.height = height;
    this.mines = mineCount;



    this.getWidth = function () {
        return this.board.length;
    }

    this.getHeight = function () {
        return this.board[0].length;
    }

    this.mineCount = function () {
        return this.mines;
    }

    this.getCell = function(x,y) {
        if(x >= 0 && y >= 0 && x < this.getWidth() && y < this.getHeight()) {
            return this.board[x][y];
        }
        return null;
    }

    function initBoard() {
        for (var x = 0; x < self.width; x++) {
            self.board[x] = [];
            for (var y = 0; y < self.height; y++) {
                self.board[x][y] = new Cell();
            }
        }
    }

    function placeMines() {
        var numSetMines = 0;
        var mineCount = self.mines || 0;
        while (numSetMines != mineCount) {
            var randX = randomIntFromInterval(0, self.width - 1);
            var randY = randomIntFromInterval(0, self.height - 1);

            if (!self.getCell(randX,randY).isMine()) {
                self.getCell(randX,randY).setMine(true);
                numSetMines++;
            }
        }
    }

    this.calculateAdjacentMines = function() {
        for (var x = 0; x < self.width; x++) {
            for (var y = 0; y < self.height; y++) {
                self.board[x][y].setAdjacentMines(calculateAdjacentMinesForCell(x,y));
            }
        }
    }

    function calculateAdjacentMinesForCell(x,y) {
        var adjacentCount = 0;

        for (var dx = -1; dx <= 1; ++dx) {
            for (var dy = -1; dy <= 1; ++dy) {
                if (dx != 0 || dy != 0) {
                    if(self.getCell(x + dx, y +dy) && self.getCell(x + dx, y + dy).isMine()) {
                        adjacentCount++;
                    }
                }
            }
        }
        return adjacentCount;

    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    initBoard();
    placeMines();
    this.calculateAdjacentMines();

}