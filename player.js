export class Player{
  constructor(name){
    this.name = name;
    this.cash = 0;
    this.elem = this.createView();
  }

  createView(){
    //Insert plaver into first child of the td
    let elem = $('<div>').attr('id', 'player').text(this.name);
    //Insert cash into the second child of the td
    elem.append('<div>').text(this.cash);
    //THE CASH NEEDS TO BE IN THE SECOND DIV IN THE TD!
    return elem
  }

  addCash(cash){
    this.cash += cash;

    //UPDATE VIEW! TO REPLACE CURRENT TEXT WITH 0;
    this.elem[1].text(0);
  }
};
