$(document).ready(function(){

  export class Square{
    getSquareWithPlayer(){
      let position = $('#player').parent().attr('id');
      let rowNumber = position[0];
      let columnNumber = position[2];
      return rowNumber, columnNumber;
    }

    getSquare(newRow,newColumn){
      let id = `${newRow},${newCoulumn}`;
      let td = $('#' + id);
    }

  }
});
