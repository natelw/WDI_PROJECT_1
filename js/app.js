document.addEventListener('DOMContentLoaded', ()=> {
  console.log('up and running');



  // keypress handler
  let pressedLeft = 'false';
  let pressedRight = 'false';
  let pressedUp = 'false';
  let pressedDown = 'false';
  let pressedSpace = 'false';
  const main = document.getElementById('container');
  console.log(main);
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

  function gameboard(size){

    for (let i = 0; i < size; i++) {


      const box = document.createElement('div');
      box.style.width = '32px';
      box.style.height = '32px';
      box.style.backgroundImage = 'url(images/tilea4.png)';
      box.style.backgroundPosition = '-96px -64px';
      box.style.float ='left';
      box.setAttribute('id','box' + [i]);
      main.appendChild(box);

    }

  }
  gameboard(20*20);

});



//
// const map = [
//   [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,b],
//   [b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]
// ];
