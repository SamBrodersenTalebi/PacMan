

export class Player{
  constructor(name){
    this.name = name;
    this.cash = 0;
    this.elem = this.createView();
  }

  createView(){
    let elem = $('<div>').attr('id', 'player');
    return elem
  }

  addCash(cash){
    this.cash += cash;
  }
};
