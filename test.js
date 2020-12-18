let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6]
]
// 如果数组个数大于1
while (arr1.length > 1) {
  //  从二维数组的第一个开始取，取走数组的第一个
  let arrayItem1 = arr1.shift()
  // 取走数组的第二个
  let arrayItem2 = arr1.shift()
  console.log(arrayItem1,'arrayItem1')
  console.log(arrayItem2,'arrayItem2')

  
}
