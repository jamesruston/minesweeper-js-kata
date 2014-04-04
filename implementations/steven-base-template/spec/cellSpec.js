describe('Cell', function() {

    it('should know if it contains a mine', function() {
        var cell = new Cell();
        cell.setMine(true);
        expect(cell.isMine()).toBe(true);
    });

    it('should be flagged if the user flags it', function() {
        var cell = new Cell();
        cell.setFlag(true);
        expect(cell.isFlagged()).toBe(true);
    });

    it('should store the number of adjacent mines', function() {
       var cell = new Cell();
        cell.setAdjacentMines(1);
        expect(cell.adjacentMineCount()).toBe(1);
    });


});