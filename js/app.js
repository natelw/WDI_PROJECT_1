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

function createPlayer(location){

    const playerBox = document.createElement('div');
    playerBox.style.width = '16px';
    playerBox.style.height= '32px';
    playerBox.style.margin = '0px 8px';
    playerBox.style.backgroundImage = 'url(images/humanss.gif)';
    playerBox.style.backgroundPosition = '-19px -19px'; //face front basic
    playerBox.setAttribute('id','player');
    playerBox.setAttribute('impass','player');
    playerBox.setAttribute('lastSquare','b');
    playerBox.setAttribute('xpos','10');
    playerBox.setAttribute('ypos','15');
    playerBox.setAttribute('lastxpos','10');
    playerBox.setAttribute('lastypos','15');
    playerBox.style.position ='relative';
    playerBox.style.top ='0px';
    playerBox.style.left ='0px';
    playerBox.style.zIndex ='1';
    const box = document.getElementById('box_10_15');
    box.appendChild(playerBox);

  }


  const b = 'b';
  const g = 'g';


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
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]
  ];

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
      case 38: pressUp();
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
        box.setAttribute('xpos',i);
        box.setAttribute('ypos',j);
        box.setAttribute('id','box_' + i +'_'+ j);


        box.style.backgroundImage = 'url(images/tilea4.png)';
        switch (map[i][j]){
          case 'g': box.style.backgroundPosition = '-264px -264px';
            box.setAttribute('impass','false'); //brick
            break;
          case 'b': box.style.backgroundPosition - '-32px -32px';
            box.setAttribute('impass','true'); //stone
            break;
          // case '@':
          //   box.style.width = '16px';
          //   box.style.margin = '0px 8px';
          //   box.style.backgroundImage = 'url(images/humanss.gif)';
          //   box.style.backgroundPosition = '-35px -19px'; //face front basic
          //   box.setAttribute('id','player');
          //   box.setAttribute('impass','player');
          //   box.setAttribute('lastSquare','b');
          //   break;

        }
        box.style.float ='left';
        main.appendChild(box);

      }

    }
  }

gameboard();
createPlayer();

function getPosition(){
    const player = document.getElementById('player');
    const xposition = player.getAttribute('xpos');
    const yposition = player.getAttribute('ypos');
    console.log(xposition,yposition +' x and y position of player');
    return [xposition,yposition];

}


  function pressUp(){
    const playPos = getPosition();
    let xaxis = playPos[0];
    const yaxis = playPos[1];
    if (xaxis === 0){
      pushUp();
    }else{
      xaxis--;

      const boxId= 'box_' + xaxis + '_' + yaxis;

      const moveLoc = [String(xaxis),String(yaxis)]


      moveUp(moveLoc,playPos,boxId);
      console.log(moveLoc,playPos,boxId);

    }

    function moveUp(movePos,playPos,boxId){

      const  box = document.getElementById(boxId);
      const player = document.getElementById('player');
      box.setAttribute('xpos',movePos[0]);
      box.setAttribute('ypos',movePos[1]);
      box.appendChild(player);

    }
    function pushUp(){

    }
    if (pressedUp === true){
      console.log('hiya');
    }


  }      //
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
