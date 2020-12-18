function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1;i++){
        for (let j = 0; j < arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
bubbleSort([8,3,1,4,3,2,8,7,5])


