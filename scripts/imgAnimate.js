var d = 1.4;
Array.from(document.querySelectorAll('.background-images img')).forEach((x, i) => {
    // console.log(x)
    d+=0.1;
    switch(x.getAttribute('id')) {
        case 'first':
            x.setAttribute('style', `animation: mover-bounce ${1.7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-bounce ${1.7}s ease-out;`);
            break;    
        case 'lower':
            x.setAttribute('style', `animation: mover-bounce ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-bounce ${7}s ease-out;`);    
            break;
        case 'lower-top':
            x.setAttribute('style', `animation: mover-bounce ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-bounce ${7}s ease-out;`);    
            break;
        case 'twirl':
            x.setAttribute('style', `animation: mover-bounce ${i}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-bounce ${i}s ease-out;`);    
            break;
        case 'upper':
            x.setAttribute('style', `animation: mover-tilt ${2}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-tilt ${7}s ease-out;`);    
            break;
        case 'hand':
            x.setAttribute('style', `animation: mover-tilt-back-slow ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-tilt-back-slow ${7}s ease-out;`);    
            break;
        case 'phone-hand':
            x.setAttribute('style', `animation: mover-tilt-back ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-tilt-back ${7}s ease-out;`);    
            break;
        case 'rainbow':
            x.setAttribute('style', `animation: mover-tilt-back ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-tilt-back ${7}s ease-out;`);    
            break;
        case 'shape3':
            x.setAttribute('style', `animation: mover-tilt-back ${7}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-tilt-back ${7}s ease-out;`);    
            break;
        default:
            x.setAttribute('style', `animation: mover-bounce ${i}s ease-out;`);
            x.setAttribute('style', `-webkit-animation: mover-bounce ${i}s ease-out;`);
            break;        
    }
});