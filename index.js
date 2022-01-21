const person=true;
const p=new Promise((resolve,reject)=>{
    if (person) {
        resolve(" sucess manoj biodata");
    }
    else{
        reject(" failure");
    }
})

p.then((message)=>
{
document.write("then"+message)
    
})
.catch((message)=>
{
    document.write("catch"+message)
})
    

    