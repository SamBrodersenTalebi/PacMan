$(document).ready(function(){

  export class Square{
    constructor(id)){
      this.blocked = false;
      this.id = id;
      this.cash = 0;
      this.player = null;
    }
    getSquareWithPlayer(){
      let position = $('#player').parent().attr('id');
      let rowNumber = position[0];
      let columnNumber = position[2];
      return rowNumber, columnNumber;
    }

    getSquare(newRow,newColumn){
      let id = `${newRow},${newCoulumn}`;
      let td = $('#' + id);
      return td;
    }

    setBlocked(boolean){
      this.blocked = boolean;
      let td = $(‘#’+this.id)
      if(this.blocked){
        $(td).addClass('blocked');
      } else{
        $(td).removeClass('blocked');
      }
    }

    //REMOVE PLAYER METHOD!

    setPlayer(p){
      this.player = p;
    }

  }
});
