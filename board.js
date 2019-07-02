import { Square } from './square.js'
import { Player } from './player.js'

  class Board{

    constructor(row,column){
        $('#tableDiv').on('keypress', movePlayer);
        this.rowSize = row;
        this.columnSize = column;
        this.board = this.createModel(); //contains all the squares in an array
        this.createtable();
        this.blockedsquares();
        this.cashSquare();
        this.addPlayer();
    }

    // ------------------------------------------------------------------------
    // Model and View methods
    // ------------------------------------------------------------------------

    //create model with this method
    createModel(){
      let model = [];

      for (let r = 0; r < this.rowSize; r++){
        model.push([]) //start new row
        for (let c = 0; c < this.columnSize; c++){
          let squareId = `${r},${c}`;
          model[r].push( new Square(squareId) ); // create new square and push to the current row;
        }
      }
      return model;
    }

    // Create view with this method
    createtable(){
      let tableBody = '<table>';

      for(let i = 1; i < this.rowSize; i++){
        tableBody += '<tr>';

        for(let j = 1; j < this.columnSize; j++){
          tableBody += `<td id = "${i},${j}">`;
          tableBody += '</td>';
        }
        tableBody += '</tr>';
      }
      tableBody += '</table>'
      $('#tableDiv').html(tableBody);
    }


    // ------------------------------------------------------------------------
    // Squares
    // ------------------------------------------------------------------------

    getSquareWithPlayer(){
      let location = Square.GetPlayerLocation();
      //return player from model array
      return this.board[location.row][location.column]
    }

    getRandomSquare(){
      let row = Math.floor(Math.random()*this.rowSize);
      let column = Math.floor(Math.random()*this.columnSize);
      return this.board[row][column];
    }


    // ------------------------------------------------------------------------
    // add blocked, cash squares and player
    // ------------------------------------------------------------------------

    blockedsquares(){
      let randomsquare = this.getRandomSquare();
      let i = 0;
      // while there is less than five td's that has the class of blocked then run the code
      while (i < 5){
        //Grabs one random table cell and check if it is blocked
        if(randomsquare.blocked == false){
          // if random td is not blocked set it to blocked and increment i by 1.
          randomsquare.blocked = true;
          i++;
        }
      }
    }

    cashSquare(){
      let randomsquare = this.getRandomSquare();
      let cash = [30,70,100,50,50];
      // while the cash array's length is greater than 0 run this code.
      while(cash.length > 0){
        if(randomsquare.blocked == false && randomsquare.cash == 0){
          //Use pop method to remove last element of cash array
          randomsquare.cash = cash.pop();
        }
      }
    }

    addPlayer(){
      let emptyCell = false;
      let p = new Player('Sam');
      let randomsquare = this.getRandomSquare();
      while(emptyCell === false){
        if(randomsquare.blocked == false && randomsquare.cash == 0){
          randomsquare.setPlayer(p);
          let emptyCell = true;
        }
      }
    }

    // ------------------------------------------------------------------------
    // EVENT Handlers
    // ------------------------------------------------------------------------

    movePlayer(event){
      let validMove = false;
      let player = this.getSquareWithPlayer();
      let deltaRow = 0, deltaCol = 0;
      let newRow = rowNumber + deltaRow;
      let newColumn = columnNumber + deltaColumn;
      // use switch only to compute new row and new column
      // after switch call valid move;
      switch (event.key)
      {
        case 37: //Left //currentposition minus id with 1
          deltaColumn--;
          break;

        case 38: //Up
          deltaRow--;
          break;

        case 39: //Right
          deltaColumn++;
          break;

        case 40: //Down
          deltaRow++;
          break;
      }
      validMove = this.checkValidMove(newRow, newColumn);
      if (validMove == true){
        this.move();
        this.transferCash();
      }
    }

    move(deltaRow,deltaCol){
      let playerSquare = this.getPlayerSquare();

      let newRow = location.row + deltaRow;
      let newCol = location.row + deltaCol;

      // REMOVE THE PLAYER AND SET IT INTO NEW ROW CALL THE TWO METHODS THAT I HAVE DEFINED IN SQUARE CLASS
    }


    checkValidMove(newRow, newColumn){
      if (newRow < 1 || newRow > this.rowSize){
        return false;
      }
      else if (newColumn < 1 || newColumn > this.columnSize){
        return false;
      }
      // I need to check if the inteded square that the player wants to move into has a class of blocked is this the correct way to do so? I call the valid move after the switch statement so it assumes that the player has moved into the new square.
      let square = this.getSquare(newRow,newColumn); //getSquare should be in Board!
      if(square.blocked == true){
        return false;
      }
      else{
        return true;
      }

    }

    //Method used to transferCash
    transferCash(){
      let square = this.getSquareWithPlayer();
      let player = square.$('#player');
      if(square.hasClass('cash').text() > 0){
        player.addCash(square.text());
        square.empty();
      }
    }
  }
