/**
 * @param {array} nums
 * @return {string}
 */
// 整数数组找其中一个不同于其他数字的数
function findDifferent(nums){
    let res=0;
    for(var x of nums){
       res^=x
    }
    return res;
}

let n=findDifferent([1,2,3,1,2,3,4])
console.log(n);