// 数据扁平化
const arr = [[1, 2, 3, [4, 5, [6, 7]]]]
// const res1=arr.flat(3)
// const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');

const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const res4 = flatten(arr)
console.log(res4)
