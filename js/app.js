
document.addEventListener('DOMContentLoaded', ()=> {
  console.log('up and running');

  // keeping track of info
  const playerStats = {};
  playerStats.lifecounter = '3';
  playerStats.currency = 0;
  playerStats.currencyTotal = 0;
  playerStats.levelAch = '1';
  playerStats.playerBlueKey = 'false';
  playerStats.playerGreenKey = 'false';
  playerStats.playerYellowKey = 'false';
  playerStats.playerRedKey = 'false';
  playerStats.turnCounter = 0;
  playerStats.playerStart = [2,2];
  console.log(playerStats);

  //counter of steps
  function stepCount(){
    playerStats.turnCounter++;
    const stepBoard = document.getElementById('stepcount');
    stepBoard.innerHTML = playerStats.turnCounter;
  }
  //counter of lives
  function lifeCount(gainOrLoss){
    const lifecount = document.getElementById('lifecounter');

    if (gainOrLoss === 'true'){
      playerStats.lifecounter++;
    }else if(gainOrLoss === 'false'){
      playerStats.lifecounter--;
    }
    if(playerStats.lifecounter < 0){
      lifecount.innerHTML = playerStats.lifecounter;
      resetGame();
    }else{

      lifecount.innerHTML = playerStats.lifecounter;
    }

  }
  lifeCount('false');
  // counter of coin
  function currencyCount(amount){
    playerStats.currency = playerStats.currency + amount;
    console.log(amount);
    console.log(playerStats.currency);
    const currencyCounter = document.getElementById('currencycounter');
    currencyCounter.innerHTML = playerStats.currency;
  }

// level reset
  function resetLevel(){
    playerStats.currencyTotal = playerStats.currencyTotal - playerStats.currency;
    playerStats.currency = 0;
    playerStats.turnCounter = 0;
    const stepBoard = document.getElementById('stepcount');
    stepBoard.innerHTML = playerStats.turnCounter;
    const currencyCounter = document.getElementById('currencycounter');
    currencyCounter.innerHTML = playerStats.currency;
    document.getElementById('player').outerHTML='';
    createPlayer(playerStats.playerStart);
    console.log(playerStats);
  }
  // game reset
  function resetGame(){
    playerStats.currencyTotal = 0;
    playerStats.currency = 0;
    playerStats.turnCounter = 0;
    document.getElementById('player').outerHTML='';
    startSplash();
  }

  //player Entity creator
  function createPlayer(location){

    const playerBox = document.createElement('div');
    playerBox.style.width = '32px';
    playerBox.style.height= '32px';
    //playerBox.style.margin = '0px 8px';
    playerBox.style.backgroundImage = 'url(images/truetiles.png)';
    //playerBox.style.backgroundPosition = '-19px -19px'; //face front basic
    playerBox.setAttribute('id','player');
    playerBox.setAttribute('class','player');
    playerBox.setAttribute('state','player');
    playerBox.setAttribute('xpos',location[0]);
    playerBox.setAttribute('ypos',location[1]);
    playerBox.setAttribute('lastxpos',location[0]);
    playerBox.setAttribute('lastypos',location[1]);
    playerBox.style.position ='relative';
    playerBox.style.top ='0px';
    playerBox.style.left ='0px';
    playerBox.style.zIndex ='2';
    const box = document.getElementById('box_'+location[0]+'_'+location[1]);
    box.appendChild(playerBox);
    //item entity creator
  }
  // item creator
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

    itemBox.setAttribute('type',type);
    switch (type){
      case 'h':{ // heart
        itemBox.style.backgroundImage = 'url(images/itemsprite.png)';
        //itemBox.style.backgroundPosition = '-0px -32px';
        itemBox.setAttribute('id','heart_'+location[0]+'_'+location[1]);
        itemBox.style.position = 'relative';
        itemBox.style.top ='0px';
        itemBox.style.left = '0px';
        itemBox.setAttribute('class','heart');
        itemBox.setAttribute('itemType','heart');
        break;
      }
      case 'g':{
        itemBox.style.backgroundImage = 'url(images/itemsprite.png)';

        itemBox.setAttribute('id','bluegem_'+location[0]+'_'+location[1]);
        itemBox.style.position = 'relative';
        itemBox.style.top ='0px';
        itemBox.style.left = '0px';
        itemBox.setAttribute('class','bluegem');
        itemBox.setAttribute('itemType','bluegem');
        break;
      }
    }

    const boxer = document.getElementById('box_'+location[0]+'_'+location[1]);
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
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,w,g,b],
    [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,w,b,b]
  ];

  // keypress handler
  const main = document.getElementById('container');
  document.addEventListener('keydown',(e) =>{     //change to jquery
    switch(e.keyCode){
      case 37: movePress('left');
        break;
      case 38: movePress('up');
        break;
      case 39: movePress('right');
        break;
      case 40: movePress('down');
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
    // direction checker
    if (Number(movePos[0]) === Number(playPos[0])){
      if (Number(movePos[1])-1 === Number(playPos[1])){
        console.log('face right');
        player.setAttribute('class','player');
      }else if (Number(movePos[1])+1 === Number(playPos[1])){
        console.log('face left');
        player.setAttribute('class','playerleft');

      }
    }else if (movePos[1] === playPos[1]){
      if (Number(movePos[0])+1 === Number(playPos[0])){
        console.log('face up');
        player.setAttribute('class','playerup');

      }else if (Number(movePos[0])-1 === Number(playPos[0])){
        console.log('face down');
        player.setAttribute('class','playerdown');
      }
    }

    box.appendChild(player);
    stepCount();
  }
  // key up skey listener


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
        box.style.backgroundImage = 'url(images/truetiles.png)';

        switch (map[i][j]){
          case 'g': box.style.backgroundPosition = '0px -160px'; // animated redpulse grey power square
            box.setAttribute('state','false');
            box.setAttribute('class','redpulse');
            break;

          case 'b': box.style.backgroundPosition = '0px -128px'; // bluewall standard straight
            box.setAttribute('state','true');
            break;

          case '.': box.style.backgroundPosition = '0px -128px'; // bluewall standard straight
            box.setAttribute('state','true');
            break;

          case 'w': box.style.backgroundPosition = '-32px -64px'; //animated end of red exit down
            box.setAttribute('state','deadlylava');
            box.setAttribute('class','endsec');
        }
        box.style.float ='left';
        main.appendChild(box);

      }

    }
  }
  function gameLoader(level){

    switch (level){
      case '1':
        gameboard();
        createPlayer(playerStats.playerStart);
        createItem('h',[10,10]);
        createItem('g',[11,11]);
        createItem('h',[12,12]);
        createItem('g',[1,11]);
        createItem('g',[11,1]);
        createItem('g',[13,12]);
        createItem('g',[7,9]);

    }

  }

  gameLoader('1');

  //find position of player
  function getPosition(){
    const player = document.getElementById('player');
    const xposition = player.getAttribute('xpos');
    const yposition = player.getAttribute('ypos');
    return [xposition,yposition];

  }

  //basic keyboard controls
  function movePress(direction){
    const playPos = getPosition();
    let xaxis = playPos[0];
    let yaxis = playPos[1];
    switch (direction){
      case 'down':{
        xaxis++;
        break;
      }
      case 'up':{
        xaxis--;
        break;
      }
      case 'left':{
        yaxis--;
        break;
      }
      case 'right':{
        yaxis++;
        break;
      }
    }
    const boxId= 'box_' + xaxis + '_' + yaxis;
    const moveLoc = [String(xaxis),String(yaxis)];
    const  moveToBox = document.getElementById(boxId);
    const stater = moveToBox.getAttribute('state');
    if (xaxis > 18){
      console.log('border');
    }else if(stater === 'true'){
      console.log('blocked move');
    }else if(stater === 'deadlylava'){
      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);
      death();
    }else if (moveToBox.firstElementChild) {
      const itemType = moveToBox.firstElementChild.getAttribute('itemType');
      switch (itemType){
        case 'heart':{
          heartCollect();
          moveToBox.firstElementChild.outerHTML = '';
          move(moveLoc,playPos,boxId);
          break;
        }
        case 'bluegem':{
          blueGemCollect();
          moveToBox.firstElementChild.outerHTML = '';
          move(moveLoc,playPos,boxId);
          break;
        }
      }
    }else{
      const boxId= 'box_' + xaxis + '_' + yaxis;
      const moveLoc = [String(xaxis),String(yaxis)];
      move(moveLoc,playPos,boxId);

    }
  }
  function heartCollect(){
    lifeCount('true');
  }
  function blueGemCollect(){
    currencyCount(666);
  }


  //square splash screen for wins and losses.
  function splash(){
    const splash = document.createElement('div');
    splash.getAttribute('class','splashy');
    splash.getAttribute('id','splash');
    splash.style.position = 'relative';
    splash.style.width = '458px';
    splash.style.height = '458px';
    splash.style.margin = '90px';
    splash.style.border = '2px solid black';
    splash.style.zIndex = '5';
    splash.style.backgroundColor ='grey';

    const contain = document.getElementById('container');
    contain.appendChild(splash);
  }
  function controlPanel(){

  }
  function startSplash(){
    const splash = document.createElement('div');
    splash.getAttribute('class','splashy');
    splash.getAttribute('id','startsplash');
    splash.style.position = 'relative';
    splash.style.width = '458px';
    splash.style.height = '458px';
    splash.style.margin = '90px';
    splash.style.border = '2px solid black';
    splash.style.zIndex = '5';
    splash.style.backgroundColor ='red';
    const contain = document.getElementById('container');
    contain.appendChild(splash);


  }
  function levelSplash(){
    const splash = document.createElement('div');
    splash.getAttribute('class','splashy');      splash.getAttribute('id','levelsplash');
    splash.style.position = 'relative';
    splash.style.width = '458px';
    splash.style.height = '458px';
    splash.style.margin = '90px';
    splash.style.border = '2px solid black';
    splash.style.zIndex = '5';
    splash.style.backgroundColor ='white';
    const contain = document.getElementById('container');
    contain.appendChild(splash);
  }

  function death(){
    resetLevel();
    lifeCount('false');
  }

  function goButton(){
    const gobutt =  document.createElement('div');
    gobutt.style.width = '300px';
    gobutt.style.height = '300px';
    gobutt.style.margin = '90px';
    gobutt.style.border = '2px solid black';
    gobutt.style.zIndex = '6';
    gobutt.style.position = 'absolute';
    gobutt.style.top = '50px';
    const contain = document.getElementById('container');
    contain.appendChild(gobutt);

  }

});
