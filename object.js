let arr  =[1,2,3,3,4]

let obj ={};

for(let i=0; i<arr.length  ; i++){
if(obj[arr[i]]==undefined){
obj[arr[i]]=1
}
else{
obj[arr[i]]++

}
}

for(let key in obj)
{
 console.log(key)
};