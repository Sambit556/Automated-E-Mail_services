const {Queue}=require("bullmq")

const store=new Queue("samdb",{  // make sure DB is same
     connection:{
          host:"localhost",
          port:6379
     }
})
async function fun(){
const apiw=await store.add("mess",{
     name:"sam",
     age:20
})
console.log(apiw.data);
console.log(apiw.id);
}
fun()

