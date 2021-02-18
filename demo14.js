// async function myAsyncFunction(url) {
//   let promiseFun = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.onload = () => resolve(xhr.responseText)
//     xhr.onerror = () => reject(xhr.statusText)
//     xhr.send()
//   })
//   return promiseFun
// }

// let result =  myAsyncFunction(
//   'https://www.fastmock.site/mock/348b3d6d2caee5a41791c6b57688ac48/hiyya/test'
// )
// result.then((data)=>{
//   console.log(data)
// })

// async function test() {
//   let data=''
//   data=await myAsyncFunction()
//   console.log(data)
// }
// test();

var p1 = ()=>{
   return new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve('one')
    },1000)
  });
}

  var p2 = ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('two')
    },2000)
  })
}
  var p3 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('three')
        },3000)
  })};
  var p4 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('four')
        },4000)
    })

};
  var p5 = new Promise((resolve, reject) => {
    reject('reject');
  });

// 分开执行，有一个失败的立即返回失败值，否认就并行，等全部成功后返回
  Promise.all([p1, p2, p3, p4]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });

// 分开执行，不管有几个失败的，都完全执行后才执行后面的
Promise.allSettled([p1, p2, p3, p4,p5]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });

// 执行完一个以后立马返回
  Promise.any([p1, p2, p3, p4,p5]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });

// 链式调用
p4().then((data)=>{
  console.log(data)
  return p2()
}).then((data)=>{
  console.log(data)
  return p3()
}).then((data)=>{
  console.log(data)
})







// 浅拷贝
const target={a:1}
const source1={b:2}
const source2={c:3}
let res=Object.assign(target,source1,source2)
console.log(res)


const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

let res=Object.assign(10);
console.log(res)



// 展开运算符
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [...a,...b]; // [1,2,3,4,5,6]
// console.log(c)

// function f(a,b,c){
//   console.log(a,b,c)
// }
// let args = [1,2,3];
// f.apply(null,args);
// f(...args)
// f(1,2,3)


