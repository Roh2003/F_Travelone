const express =  require("express")
const collection = require("./mongo")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())


app.get("/", cors(), (req,res) => {

}
)


app.post("/" , async(req,res) => {
    const{email,password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("nonse")
        }

    }
    catch(e){
        res.json("none")
    }





})

app.post("/SignUp" , async(req,res) => {
    const{email,password} = req.body

    const data = {
        email : email,
        password:password
    }

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("nonse")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("none")
    }





})

app.listen(5173, () => {
    console.log("port conneted");
    
})