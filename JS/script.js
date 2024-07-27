'use strict';

let l = 0;
while (l <= 10) {
  console.log(l);
  l++;
}


let numbOne = 20;
for (let l = 0; l <= numbOne; l++) {
  if (l % 2 !== 0) {
    continue;
  }
  console.log(l);
}


for(let l = 1; l <= 10; l++) {
  console.log(`${7 * l} = 7 * ${l} `);
}



let k = 1
  while (k <= 5) {
    console.log(k);
    k++;
}


for(let n = 1; n <= 10; n++) {
  if(n === 7) {
    break;
  }
  console.log(n);
}


let f = 10;
for(let g = 1; g < 20; g++) {
  console.log(g);
  if(g >= f) {
    break;
  }
}


let y = 1;
while(y <= 20) {
  if(y % 3 === 0 ) {
    y++
    continue;
  }
  console.log(y);
  y++
}
 