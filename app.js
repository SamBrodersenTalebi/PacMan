$(document).ready(function(){

  class Board{

    constructor(row,column){
        $('#tableDiv').on('keypress', movePlayer);
        this.rowSize = row;
        this.columnSize = column;
    }

    randomNumber(num){
      let number = Math.floor(Math.random()*num)
      return number;
    }

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

    blockedsquares(){
      let randomCoulumn = randomNumber(this.columnSize);
      let randomRow = randomNumber(this.rowSize);
      let randomId = `${randomRow},${randomCoulumn}`;
      let i = 0;
      // while there is less than five td's that has the class of blocked then run the code
      while (i < 5){
        //Grabs one random table cell
        let randomtd = $('#'+randomId);
        if(!$(randomtd).hasClass('blocked') && !$(randomtd).hasClass('cash')){
          // if the random cell that was just grab does not have a class of cash or blocked
          // then add the class of blocked
          randomtd.addClass('blocked');
          i++;
        }
      }
    }

    cashSquare(){
      let randomCoulumn = randomNumber(this.columnSize);
      let randomRow = randomNumber(this.rowSize);
      let randomId = `${randomRow},${randomCoulumn}`;
      let cash = [30,70,100,50,50];
      // while there is less than five td's that has the class of cash then run the code
      while(cash.length > 0){
        //grab random td cell
        let randomtd = $('#'+randomId);
        if(!$(randomtd).hasClass('blocked') && !$(randomtd).hasClass('cash')){
          //Use pop method to remove last element of cash array
          randomtd.addClass('cash').text(cash.pop());
        }
      }
    }

    movePlayer(event){
      let validMove = false;
      let player = $('#player');
      let position = $('#player').parent().attr('id');
      let rowNumber = position[0];
      let columnNumber = position[2];
      let newRow = rowNumber + deltaRow;
      let newColumn = columnNumber + deltaColumn;
      // use switch only to compute new row and new column
      // after switch call valid move;
      switch (event.keynumber)
      {
        case 37: //Left //currentposition minus id with 1
          deltaRow = 0;
          deltaColumn = -1;
          validMove(newRow, newColumn)
          if(validMove = true){
            player.remove();
            let newTd = $(`#${newRow},${newCoulumn}` );
            newTd.append(player)
          }
          break;

        case 38: //Up
          deltaRow = -1;
          deltaColumn = 0;
          validMove(newRow, newColumn)
          if(validMove = true){
            player.remove();
            let newTd = $(`#${newRow},${newCoulumn}` );
            newTd.append(player)
          }
          break;

        case 39: //Right
          deltaRow = 0;
          deltaColumn = 1;
          validMove(newRow, newColumn)
          if(validMove = true){
            player.remove();
            let newTd = $(`#${newRow},${newCoulumn}` );
            newTd.append(player)
          }
          break;

        case 40: //Down
          deltaRow = 1;
          deltaColumn = 0;
          validMove(newRow, newColumn)
          if(validMove = true){
            player.remove();
            let newTd = $(`#${newRow},${newCoulumn}` );
            newTd.append(player)
          }
          break;
      }
      cashTd()
    }


    validMove(newRow, newColumn){
      if (newRow < 1 || newRow > this.rowSize){
        return false;
      }
      else if (newColumn < 1 || newColumn > this.columnSize){
        return false;
      }
      // I need to check if the inteded square that the player wants to move into has a class of blocked is this the correct way to do so? I call the valid move after the switch statement so it assumes that the player has moved into the new square.
      else if($('#'+ newRow +','+newCoulumn).hasClass('blocked')){
        return false;
      }
      else{
        return true;
      }

    }

    cashTd(){
      let position = $('#player').parent().attr('id');
      let rowNumber = position[0];
      let columnNumber = position[2];
      let currentPosition = $(`#${rowNumber},${columnNumber}`);
      if(currentPosition.hasClass('cash')){
        let cash = currentPosition.text();
        // PUSH to player class
        // lastly remove the cash from the title
        currentPosition.empty();
      }
    }

    addPlayer(){
      let emptyCell = false;
      let randomCoulumn = Math.floor(Math.random()*this.columnSize);
      let randomRow = Math.floor(Math.random()*this.rowSize);
      let randomId = `${randomRow},${randomCoulumn}`;
      while(emptyCell === false){
        let randomtd = $('#'+randomId);
        if(!$(randomtd).hasClass('blocked') && !$(randomtd).hasClass('cash')){
          $(randomtd).append($('<div></div>')).attr('id', 'player').text('Player');
          let emptyCell = true;
        }
      }
    }


  }


});