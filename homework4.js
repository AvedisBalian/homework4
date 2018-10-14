//////////2//////////
const TriangleStars = function(height)
{
    const width = 2 * height - 1;
    let i = 0;
    while(i < height) {
        console.log(' '.repeat(i) + '*'.repeat(width - 2 * i));
        i= i + 1;
    }
};
TriangleStars(4);

/////////3//////////
const multiToSingle = function(array) {
    let newarray = [];
    let BigIndex = 0;
    while (BigIndex < array.length) {
        const childArray = array[BigIndex];
        BigIndex= BigIndex + 1;
        let ChildIndex = 0;
        while (ChildIndex < childArray.length) {
        
            newarray[newarray.length] = childArray[ChildIndex];
            ChildIndex= ChildIndex + 1;
        }
       
    }
    return newarray+"";
}
console.log(multiToSingle([[1,3,5],[7,9,11,13]]));

//////////4/////////
const FindMinMax = function (array, boolean){
    if (boolean) {
        return Math.max(...array);
    }   
    return Math.min(...array);
};
console.log(FindMinMax([9088, 2, 9999, -1, 0], true));


//////////5//////////
const forEach= function(arr,func){
  console.log(arr);
  let index= 0;
  while(index<arr.length){
    func(arr[index]);
    index= index +1;
  }

};
const FunctinFunct=function(numb){
  console.log(numb/2);
};
forEach([2,4,6],FunctinFunct);

///////////6//////////
const sum= function (arr){
let index= 0;
let SumOfInteger= 0;
while (index<arr.length){
  SumOfInteger= SumOfInteger + arr[index];
  index= index+1;
  }
  return SumOfInteger;
};
console.log(sum([20,30,40,50,60]));

//////////7///////////
const reverse = function (stringArr) {
   let result = " ";
   let i = stringArr.length - 1;
   while (i >= 0 ){
     result = result + stringArr[i];
     i= i - 1;

   }
   return result;
 };
 console.log(reverse("desserts"));

//////////8//////////
const checkerboard = function(size) {
    let i = 0;
    while (i < size) {
        if ( i %2 === 0) {
        console.log("* ".repeat(size));
    } else { 
    console.log(" *".repeat(size));
        }
    i= i + 1;
  }
};
checkerboard(10);