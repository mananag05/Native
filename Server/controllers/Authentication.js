


async function Login(req, res){
    try{
        console.log("New sucess")
        res.status(200).json({msg : "Sucess"})
    } catch(error){
        res.status(500).json({err : "Internal Server Error"})
    }
}

module.exports = {
    Login
}