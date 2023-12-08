const errorHandler = (error,req,res,next)=>{
    console.log(error)
    return res.status(500).json({message:'Oops internal server error'})
}

export default errorHandler