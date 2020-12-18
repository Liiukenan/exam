
// 归并排序
function bubbleSort(arr) {
    var len = arr.length;
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3 - i; j++) {
            if(arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([1,2,4,3])


//冒泡排序


// function count(arr){
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 0; j < arr.length-1-i; j++) {
//            if(arr[j+1]>arr[j]){
//                let temp=arr[j+1]
//                arr[j+1]=arr[j]
//                arr[j]=temp
//            }
//         }
        
//     }
//     return arr
// }
// let res=count([9,5,2,1,7,8,3])
// console.log(res);



function fibonacci(n, v1 = 1, v2 = 1) {
    if (n == 1) return v1
    if (n == 2) return v2
    return fibonacci(n - 1, v2, v1 + v2)
}


let res=fibonacci(2, 1, 1);
console.log(res);