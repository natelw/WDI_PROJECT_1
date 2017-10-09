document.addEventListener('DOMContentLoaded', ()=> {
  console.log('up and running');


  function createPlayer(){

    const playerBox = document.createElement('div');
    playerBox.style.width = '16px';
    playerBox.style.height= '32px';
    playerBox.style.margin = '0px 8px';
    playerBox.style.backgroundImage = 'url(images/humanss.gif)';
    playerBox.style.backgroundPosition = '-19px -19px'; //face front basic
    playerBox.setAttribute('id','player');
    playerBox.setAttribute('impass','player');
    playerBox.setAttribute('xpos','10');
    playerBox.setAttribute('ypos','15');
    playerBox.setAttribute('lastxpos','10');
    playerBox.setAttribute('lastypos','15');
    playerBox.style.position ='relative';
    playerBox.style.top ='0px';
    playerBox.style.left ='0px';
    playerBox.style.zIndex ='2';
    const box = document.getElementById('box_10_15');
    box.appendChild(playerBox);

  }
  function createItem(type,location){
    const itemBox = document.createElement('div');
    itemBox.style.width = '32px';
    itemBox.style.height = '32px';
    itemBox.style.margin = '0px';
    itemBox.setAttribute('xpos',location[0]);
    itemBox.setAttribute('ypos',location[1]);
    itemBox.style.position ='relative';
    itemBox.style.top ='0px';
    itemBox.style.left = '0px';
    itemBox.style.zIndex = '1';
    itemBox.style.backgroundImage = 'url(images/humanss.gif)';
    itemBox.style.backgroundPosition = '-19px -19px';

    // switch (type){
    //   case 'h':{
    //     itemBox.style.backgroundImage = 'url(images/humanss.gif)';
    //     itemBox.style.backgroundPosition = '-19px -19px';
    //     break;
    //   }
    //   case 'p':{
    //     itemBox.style.backgroundImage = 'url(images/humanss.gif)';
    //     itemBox.style.backgroundPosition = '-19px -19px';
    //     break;
    //   }
    // }

    const boxer = document.getElementById('box_5_5');
    boxer.appendChild(itemBox);

  }
  
  const b = 'b';
  const g = 'g';
  const w = 'w';

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
    [w,w,w,w,w,w,w,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]
  ];

  // keypress handler
  const main = document.getElementById('container');
  document.addEventListener('keydown',(e) =>{     //change to jquery
    switch(e.keyCode){
      case 37: pressLeft();
        break;
      case 38: pressUp();
        break;
      case 39: pressRight();
        break;
      case 40: pressDown();
        break;
      case 32: pressedSpace = true;
        break;
    }
  }, false);
  // move player around
  function move(movePos,playPos,boxId){

    const  box = document.getElementById(boxId);
    const player = document.getElementById('player');
    player.setAttribute('xpos',movePos[0]);
    player.setAttribute('ypos',movePos[1]);
    player.setAttribute('lastxpos',playPos[0]);
    player.setAttribute('lastypos',playPos[1]);
    box.appendChild(player);

  }

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
        box.setAttribute('xpos',i);
        box.setAttribute('ypos',j);
        box.setAttribute('id','box_' + i +'_'+ j);
        box.style.backgroundImage = 'url(images/tilea4.png)';

        switch (map[i][j]){
          case 'g': box.style.backgroundPosition = '-264px -264px'; // dirt
            box.setAttribute('impass','false');
            break;
          case 'b': box.style.backgroundPosition - '-32px -32px'; //stone
            box.setAttribute('impass','true');
            break;
          case 'w': box.style.backgroundPosition = '-390px -360px'; //bad lava
            box.setAttribute('impass','true');
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


  function pressDown(){
    const playPos = getPosition();
    let xaxis = playPos[0];
    const yaxis = playPos[1];
    console.log(xaxis+ '   x-Axis');
    console.log(yaxis+'   y-Axis');

    xaxis++;
    const boxId= 'box_' + xaxis + '_' + yaxis;
    const  moveToBox = document.getElementById(boxId);
    const impasser = moveToBox.getAttribute('impass');

    console.log(impasser);
    if (xaxis > 18){
      console.log('border');
    }else if(impasser === 'true'){
      console.log('impassable move');
    }else{
      console.log(xaxis+ '   x-Axis after mod');
      console.log(yaxis+'   y-Axis after mod');
      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);

    }
  }

  function pressUp(){
    const playPos = getPosition();
    let xaxis = playPos[0];
    const yaxis = playPos[1];
    xaxis--;
    const boxId= 'box_' + xaxis + '_' + yaxis;
    const  moveToBox = document.getElementById(boxId);
    const impasser = moveToBox.getAttribute('impass');
    if (xaxis < 1){
      console.log('border');
    }else if(impasser === 'true'){
      console.log('impassable move');
    }else{

      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);
    }
  }
  function pressLeft(){
    const playPos = getPosition();
    const xaxis = playPos[0];
    let yaxis = playPos[1];
    yaxis--;
    const boxId= 'box_' + xaxis + '_' + yaxis;
    const  moveToBox = document.getElementById(boxId);
    const impasser = moveToBox.getAttribute('impass');

    if (yaxis < 1){
      console.log('border');
    }else if(impasser === 'true'){
      console.log('impassable move');
    }else{
      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);
    }
  }

  function pressRight(){
    const playPos = getPosition();
    const xaxis = playPos[0];
    let yaxis = playPos[1];
    yaxis++;
    const boxId= 'box_' + xaxis + '_' + yaxis;
    const  moveToBox = document.getElementById(boxId);
    const impasser = moveToBox.getAttribute('impass');
    if (yaxis > 18){
      console.log('border');
    }else if(impasser === 'true'){
      console.log('impassable move');
    }else{
      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);
    }
  }

  function animation(){

  }


});
