function Cell() {
    var mine = false;
    var flagged = false;
    var adjacentMines = false;

    this.setMine = function(hasMine){
        mine = hasMine;
    }

    this.setFlag = function(hasFlag) {
        flagged = hasFlag;
    }

    this.setAdjacentMines = function(number) {
        adjacentMines = number
    }

    this.isMine = function() {
        return mine;
    }

    this.isFlagged = function() {
        return flagged;
    }

    this.adjacentMineCount = function(){
        return adjacentMines;
    }

}