// 去重
const arr=[1,1,1,1,3,1,2,{},{},'5',5]
// let str='1141324'
// const rest1=[...new Set(str)]
// const rest1=Array.from(new Set(arr));
// const rest1=[...new Set(arr)]

const unique=arr=>{
    let len=arr.length
    for(let i = 0; i < len; i++){
        for(let j=0;j<len-1-i;j++){
            console.log(i,j)
            // if(arr[i]===arr[j]){
            //     arr.splice(j, 1)
            //     len--;
            //     j--;
            // }
        }
    }
    return arr;
}

unique(arr)


