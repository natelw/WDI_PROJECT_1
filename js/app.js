console.log('up and running');

// keypress handler
let pressedLeft = 'false';
let pressedRight = 'false';
let pressedUp = 'false';
let pressedDown = 'false';

document.addEventListener('keydown',(e) =>{
  console.log(e.keyCode);
  switch(e.keyCode){
    case 65: pressedLeft = true;
      break;
    case 87: pressedUp = true;
      break;
    case 68: pressedRight = true;
      break;
    case 83: pressedDown = true;
      break;
  }
}, false);

document.addEventListener('keyup',(e) => {
  switch(e.keyCode){
    case 65: pressedLeft = false;
      break;
    case 87: pressedUp = false;
      break;
    case 68: pressedRight = false;
      break;
    case 83: pressedDown = false;
      break;
  }

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
