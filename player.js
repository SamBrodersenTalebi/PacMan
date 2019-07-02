$(document).ready(function(){

  export class Player{
    constructor(name){
      this.name = name;
      this.cash = 0;
    }

    addCash(cash){
      this.cash += cash;
    }
  }
