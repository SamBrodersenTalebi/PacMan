$(document).ready(function(){

  export class Player{
    constructor(){
      this.cash = 0;
    }

    addCash(cash){
      this.cash += cash;
    }
  }
