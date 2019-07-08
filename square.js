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

  // ------------------------------------------------------------------------
  // GETTER AND SETTER
  // ------------------------------------------------------------------------
    get blockedsquare(){
      return this._blocked;
    }

    //Setter takes the argument from the getter function
    set blockedsquare(boolean){
      //Update model
      this.blocked = boolean;
      //Update view
      let td = $('#'+this.id);
      if(boolean){
        $(td).addClass('blocked');
      } else{
        $(td).removeClass('blocked');
      }
    }

/*
    setBlocked(boolean){
      this.blocked = boolean;
      let td = $('#'+this.id)
      if(this.blocked){
        $(td).addClass('blocked');
      } else{
        $(td).removeClass('blocked');
      }
    }
*/

    get cashsq(){
      return this._cash;
    }

    //Setter takes the argument from the getter function and runs the functions
    //this will updated the instance properties of the object and the DOM.
    set cashsq(number){
        //model
        this.cash = number
        //view
        let td = $('#'+this.id);
        if(number){
          $(td).addClass('cash').children()[1].html(number);
        } else{
          $(td).removeClass('cash').children()[1].html('');
        }
    }

/*
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
*/


    setPlayer(p){
      this.player = p;

      //View
      $('#'+this.id).children()[0].append(p.elem);
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
