document.addEventListener('DOMContentLoaded', ()=> {
  console.log('up and running');

  function squareGen(squareType){
    const squareObj =   new Object();
    squareObj.squareType = squareType;
    switch (squareType){
      case 'b': squareObj.impass = true;

        break; // stonewall
      case 'g': squareObj.impass = false;
        break; // dirt
      case 'x': squareObj.impass = true;
        squareObj.lastSquare = 'g';
        break; // player
    }
    return squareObj;
  }

  const b = 'b';
  const g = 'g';
  const x = '@';
  const map = [ // level map
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,b,b,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,b,g,g,g,b,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,b,g,g,g,b,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,b,b,g,b,b,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,x,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]
  ];

  const infoMap = [];
  // keypress handler
  let pressedLeft = 'false';
  let pressedRight = 'false';
  let pressedUp = 'false';
  let pressedDown = 'false';
  let pressedSpace = 'false';
  const main = document.getElementById('container');
  document.addEventListener('keydown',(e) =>{     //change to jquery
    console.log(e.keyCode);
    switch(e.keyCode){
      case 37: pressedLeft = true;
        break;
      case 38: pressedUp = true;
        break;
      case 39: pressedRight = true;
        break;
      case 40: pressedDown = true;
        break;
      case 32: pressedSpace = true;
        break;
    }
  }, false);

  document.addEventListener('keyup',(e) => {
    switch(e.keyCode){
      case 37: pressedLeft = false;
        break;
      case 38: pressedUp = false;
        break;
      case 39: pressedRight = false;
        break;
      case 40: pressedDown = false;
        break;
      case 32: pressedSpace = false;
        break;
    }

  });
  // board creator function
  function gameboard(){


    for(let i = 0; i < map.length; i++) {
      const cube = map[i];
      for(let j = 0; j < cube.length; j++) {

        const box = document.createElement('div');
        box.style.width = '32px';
        box.style.height = '32px';
        //box.setAttribute('id','box ' + i +' '+ j);
        box.setAttribute('xPos',i);
        box.setAttribute('yPos',j);
        box.setAttribute('id','box ' + i +' '+ j);

        box.style.backgroundImage = 'url(images/tilea4.png)';
        switch (map[i][j]){
          case 'g': box.style.backgroundPosition = '-264px -264px';
            box.setAttribute('impass','false'); //brick
            break;
          case 'b': box.style.backgroundPosition - '-32px -32px';
            box.setAttribute('impass','true'); //stone
            break;
          case '@':
            box.style.width = '16px';
            box.style.margin = '0px 8px';
            box.style.backgroundImage = 'url(images/humanss.gif)';
            box.style.backgroundPosition = '-19px -19px'; //face front basic
            box.setAttribute('id','player');
            box.setAttribute('impass','player');
            break;

        }
        box.style.float ='left';
        main.appendChild(box);

      }

    }
  }

gameboard();

function getPosition(){
    const player = document.getElementById('#player');
    const xposition = player.xpos;
    const yposition = player.ypos;
    const aboveTile = map[xposition-1][yposition];
    aboveTile
}


  function pressUp(){
    const player = document.getElementById('#player');
    const xposition = player.xpos;
    const yposition = player.ypos;

  }
          //
          // const obj =  squareGen(map[i][j]);
          // obj.xpos = i;
          // obj.ypos = j;
          // obj.id = 'box'+i+'_'+j;
          //
          // let xaxis = 0;
          // i === 0 ? xaxis = 0 : xaxis = i - 1;
          //
          // const checkSquare = map[xaxis][j]
          // console.log(checkSquare)

});
