// 递归研究
// function count(nums){
//     let res=0;
//     let arr=[]
//     for (let index = 1; index <= nums; index++) {
//         res = res+index;
//     }
//     return res;
// }
// count(100)

// function count(nums){
//     if(nums>1){
//         return nums+count(nums-1)
//     }else {
//         return nums;
//     }
// }
// console.log(count(100))

// 相加

// function count(arr){
//     if(arr.length>1){
//         return arr.shift()+count(arr)
//     }else {
//         return arr[0]
//     }
// }

// let res=count([1,3,4,5,5,2,1,324,1,4315,31,431])
// console.log(res);

//基础版斐波那契数列

// function fabonacci(n) {
//     let num1 = 1,
//         num2 = 1,
//         sum;
//     let arr = [1, 1];
//     for (let i = 3; i <= n; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//         arr.push(sum);
//     }
//     return arr;
// }
// let arr=fabonacci(10)
// console.log(arr);



// function getFibonacci(n) {
//   var fibarr = []
//   var i = 0
//   while (i < n) {
//     if (i <= 1) {
//       fibarr.push(i)
//     } else {
//       fibarr.push(fibarr[i - 1] + fibarr[i - 2])
//     }
//     i++
//   }
//   return fibarr
// }

// let res=getFibonacci(10)
// console.log(res)


// 第n个斐波那契数列的值
// function fac(i){
//     if((i==1) || (i==2)){
//         return 1
//     }
//     if(i>2){
//         return fac(i-1)+fac(i-2)
//     }
//     return 0
// }

// let res=fac(4)
// console.log(res);


// 河内塔问题
// function count(n){
//     if(n==0){
//         return 0
//     }
//     else{
//         return 2*count(n-1)+1
//     }
// }

// let res=count(2)
// console.log(res);


