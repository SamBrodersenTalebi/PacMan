export class Player{
  constructor(name){
    this.name = name;
    this.cash = 0;
    this.elem = this.createView();
  }

  createView(){
    let elem = $('<div>').attr('id', 'player').text(this.name);
    elem.append('<div>').text(this.cash);
    return elem
  }

  addCash(cash){
    this.cash += cash;

    //UPDATE VIEW! TO REPLACE CURRENT TEXT WITH 0;
    
  }
};
