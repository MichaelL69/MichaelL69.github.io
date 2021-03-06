/*
    LOOPS: there are 3 diffrent types of loops, while, for, and for-in loops
*/

//we use for loops to run a specific set of code as many times as we need it to
//the setting of i to 0 is the starting point of the loop
//i < 6 is the stop condition
//finally i++ is increminting i everytime it exicutes the code
//if our final condition is set in which we will never meet our stop condition
//,in this case when i is less than 6; this would create an infinite loop that will
//crash our application
for(let i = 0; i < 6; i++){
    console.log(i);
}

//You can also loop backwards through an array by just starting at the end and ending at the beginning.
const array = [42, 69, 32];
for(let i =array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

/*
    for-in loops are used to loop through objects
    the key variable represents the keys we are looping through from the object
    right after the key word in you would put the object you want to loop through
*/
const obj = {
    name: "Michael",
    age: 18,        
};
for(let key in obj){
    console.log(obj[key]);
}
/*
While loops are like for loops but you change starting point inside the block of code
*/
const arr = ["meme", 69, ["asndy"]];
let i = 0;
    while(i < arr.length){
        console.log(arr[i]);
        i++;
    }