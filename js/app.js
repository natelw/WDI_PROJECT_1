console.log('up and running');
let x = 0;
// keypress handler
let pressedLeft = 'false';
let pressedRight = 'false';
let pressedUp = 'false';
let pressedDown = 'false';
let pressedSpace = 'false';
document.addEventListener('keydown',(e) =>{
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
  pressedDown === true ? console.log('working'):x=0 ;
  pressedUp === true ? console.log('working'): x= 0;
  pressedLeft === true ? console.log('working'):x = 0 ;
  pressedRight === true ? console.log('working'): x = 0;
  pressedSpace === true ? console.log('working'): x= 0;
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
