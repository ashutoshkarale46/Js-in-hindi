for (let index = 0; index <= 10; index++) {
    const element = index
    if(element == 5) {
        console.log("5 is best Number");
    }
    console.log(element);
}

// console.log(element); // ReferenceError: element is not defined

for (let i = 1; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++) {
        console.log(`Inner loop value ${j} and innner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

// break and continue

for (let index = 0; index <=20; index++) {
    if(index == 5) {
        console.log('Detected 5');
        break;
    }
    console.log(`Value of i is ${index}`);
}

for(let i = 1 ; i<=20;i++) {
    if(i == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i is ${i}`);
}

