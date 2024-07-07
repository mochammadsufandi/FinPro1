const errorHandler = (err,req,res,next) => {
    switch(err.name) {
        case 'Invalid Input' :
            return res.status(400).json({error : 'Invalid Input '});
        default : 
            return res.status(500).json({error : 'Internal Server Error'});
    }
}



module.exports = errorHandler;