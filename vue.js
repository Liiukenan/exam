let data={
    msg:'kenan',
    name:'dog'
};
// 模拟vue实例,定义单个属性
// let vm={}
// Object.defineProperty(vm,'msg',{
//     enuerable:true,
//     configurable:true,
//     get(){
//         return data.msg
//     },
//     set(newValue){
//         console.log(newValue)
//         console.log(data.msg)
//         if(newValue===data.msg){
//             return
//         }
//         data.msg=newValue
//         document.querySelector("#app").textContent=data.msg

//     }
// })
// vm.msg='hello123'
// console.log(vm.msg);



// 多个属性
// let vm={}
// proxyData(data)
// function proxyData(data){
//     Object.keys(data).forEach(key=> {
//         Object.defineProperty(vm,key, {
//             enumerable:true,
//             configurable:true,
//             get(){
//                 console.log(data[key])
//                 return data[key]
//             },
//             set(newValue){
                
//                 if(newValue===data[key]){
//                     return
//                 }
//                 data[key]=newValue
//                 document.querySelector('#app').textContent=data[key]
//             }
//         })
//     });
// }
// vm.msg='大白菜'




let data={
    msg:'hello'
}
let vm=new Proxy(
    data,{
        get(target,key){
            return target[key]
        },
        set(target,key,newValue){
            console.log('set',key,newValue)
            if(target[key]===newValue){
                return
            }
            target[key]=newValue
            document.querySelector('#app').textContent=target[key]
        }
    }
)
vm.msg='大白菜'
console.log(vm.msg)