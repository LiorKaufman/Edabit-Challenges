cubearra = (arr) => {

let   newarr = arr.map (e => Math.pow(e,3))
  return newarr.reduce((acc,num)=>{
    return acc +num
  })
}

console.log(cubearra([5,4,2]));
