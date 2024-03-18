for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log("5 is best number");
    }
    console.log(i);;
    
}

for (let i = 0; i <=10; i++) {
    //console.log(`table of : ${i}`);
   for (let j = 0; j <=10 ; j++) {
    //console.log(i+ "*" + j + "=" + i*j);
   }
    
}

let array = ["Nameer","ahmed","abdullah"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 detected");
       continue
    }
    
    console.log(element);
    
}