function merge(left, right) {
  const results = [];
  while(left.length && right.length){
    if (left[0] && right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function mergeSort(arr){
  if(arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length/2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  
  return merge(mergeSort(left), mergeSort(right));
}

let array1 = [-2,-222,-22222,2,0,-1,100,200,300];
let sorted = mergeSort(array1);

console.log(sorted);

