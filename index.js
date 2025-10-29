import express from 'express'




const app =  express();

const PORT = 8005;

app.get('/',(req,res) =>{
    res.send("Welcome to my website")
})

app.get("/crash",(req,res) =>{
    res.send("Website is crashing.....")
    process.exit(1)
})

app.listen(PORT, () =>{
    console.log(`Server runing at Port is ${PORT}`)
})