const { Worker } = require("bullmq")
const nodemailer = require('nodemailer');

 new Worker("samdb", async (datas) => {  // make sure DB is same
     console.log("working")
     console.log("mail is sending");
     console.log(datas.data);
     console.log(datas.id);
     await new Promise((resolve, reject) => {
          setTimeout(resolve, 6000)

          const mailsender = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                    user: "your email ID",  // 
                    pass: "google mail access pass" // 
               }
          })        

          async function mail() {
               const mailing_system = await mailsender.sendMail({
                    from: "Sender/your email ID" //
                    , to: 'Receiver email ID '
                    , subject: 'Sending Email using Node.js'
                    , text: 'That is a only demonstration purpose'

               })
               console.log(mailing_system.envelope);
          }                  
          mail()
     })
     console.log("workering","restart");

}, {
     connection: {
          host: "localhost",
          port: 6379
     }
})