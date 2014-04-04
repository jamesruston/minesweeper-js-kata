describe('Minesweeper Kata', function () {

    it('should know is true', function () {

        var result= true;

        expect(result).toBe(true);
    });

    describe('initialising the game board', function() {

        it('the board should have the correct number of cells across', function() {
            var gameEngine = new GameEngine(10);
            expect(gameEngine.getWidth()).toBe(10);
        });

        it('the board should have the correct number of cells down', function() {
            var gameEngine = new GameEngine(10,20);
            expect(gameEngine.getHeight()).toBe(20);
        });

        it('the board should keep track of the number of mines', function() {
            var gameEngine = new GameEngine(10,20,5);
            expect(gameEngine.mineCount()).toBe(5);
        });

        it('sets each cell to a cell object', function() {
            var gameEngine = new GameEngine(10,20,5);
            expect(gameEngine.board[0][0] instanceof Cell).toBe(true);
        });

        it('positions the correct number of mines', function() {
           var gameEngine = new GameEngine(10,10,5);
            var mineCount = 0;
            for(var x = 0; x < gameEngine.board.length; x++) {
                for(var y = 0; y < gameEngine.board[x].length; y++) {
                    if(gameEngine.board[x][y].isMine()) {
                        mineCount++;
                    }
                }
            }
            expect(mineCount).toBe(5);
        });

        it('calculates the adjacent mines', function() {
            var gameEngine = new GameEngine(5,5,0);
            gameEngine.getCell(2,0).setMine(true);
            gameEngine.getCell(1,1).setMine(true);
            gameEngine.calculateAdjacentMines();
            expect(gameEngine.getCell(2,1).adjacentMineCount()).toBe(2);

        });
    });

});