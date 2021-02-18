// Promise

// 当所有的promise对象成功后才可执行
Promise.all()

// 所有的promise对象全部执行完才执行，不管成功或失败皆可
Promise.allSettled()

//任意一个promise执行后执行，不管成功或者失败
Promise.any()

//任意子promise成功或失败后，父马上也会用子promise的成功返回值，或失败详情作为参数调用父promise
Promise.race()

//返回状态失败的promise对象
Promise.reject()

//返回一个状态给定value的对象
Promise.resolve()










//手写promise实现

// 等待中
const PENDING='PENDING'
// 返回成功
const RESOLVED='RESOLVED'
// 返回失败
const REJECTED='REJECTED'

class Promise{
    constructor(executor){
        this.status=PENDING; //默认等待中
        this.value=undefined //then方法
        this.reason=undefined
        let resolve=(value)=>{
            if(this.status===PENDING){
                this.value=value;
                this.status=status;
            }
        }
        let reject=(reason)=>{
            if(this.status === PENDING){
                this.reason=reason;
                this.status=REJECTED;
            }
        }

    }
}
