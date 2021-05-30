const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(rows,columns){
        this.field=[]
        this.rows=rows;
        this.columns=columns;
    }
    print(){
        for (let i = 0; i < this.rows; i++) {
          console.log(...this.field[i])
        }
    }
    generateField(){
        let started = []
        let queue = []
        for (let i = 0; i < this.rows; i++) {
            queue=[]
            for( let j = 0 ; j< this.columns; j++){
               queue[j] = '░';
            }
            started[i]=queue;
        }
        for (let i = 0; i < this.rows; i++) {    
        started[i][Math.floor(Math.random()*(this.columns-1))]=hole
        started[0][0]=pathCharacter;
    }
    started[Math.floor(Math.random()*(this.rows-1))][Math.floor(Math.random()*(this.columns-1))] = hat
    this.field=started;
    }
}


const rows= prompt('How many rows?')
const columns =prompt('How many columns?')
const myField = new Field(rows, columns);
myField.generateField()
  let k=0;
  let x=0;
  let y=0;
while(k!=1){
    myField.print()
    let direction= prompt('Which way?')
    if(direction==='w'){y--}
    if(direction==='d'){x++}
    if(direction==='s'){y++}
    if(direction==='a'){x--}
    if(myField.field[y][x]===fieldCharacter){myField.field[y][x]='*'}
    if(myField.field[y][x]===hole){break}
    if(y==rows || x==columns) {console.log('You get out of field') ; break}
    if(y<0 || x<0) {console.log('You get out of field');break}
    if(myField.field[y][x]===hat){k=1}
}
if(k==0){console.log('You lost')}
if(k==1){console.log('Congratulations')}
