import { Player } from './player.js'

  export class Square{
    static GetPlayerLocation(){
        //get the id of the td with the player inside
        let tdId =  $('#player').parent().attr('id');
        //use number method to turn string into number
        let r = Number( tdId[0]);
        let c = Number( tdId[2] );
        //return the row and column
        return { row: r, column: c};
    }

    constructor(id)){
      this.blocked = false;
      this.id = id;
      this.cash = 0;
      this.player = null;
    }


    setBlocked(boolean){
      this.blocked = boolean;
      let td = $('#'+this.id)
      if(this.blocked){
        $(td).addClass('blocked');
      } else{
        $(td).removeClass('blocked');
      }
    }

    setCash(cash){
      this.cash = cash;
      let td = $('#'+this.id)
      if(this.cash > 0){
        $(td).children()[1].text(this.cash);
        $(td).addClass('cash');
      } else{
        $(td).removeClass('cash');
      }
    }



    setPlayer(p){
      this.player = p;

      //View
      $('#'+this.id).append(p.elem);
    }

    removePlayer(){
      let p = this.player;
      this.player = null;

      $('#'+this.id).children()[0].replaceWith('<div>');

      return p;
    }

    removeCash(){
      this.cash = 0;

      //view
      $('#'+this.id).children()[1].replaceWith('<div>');
    }

  }
