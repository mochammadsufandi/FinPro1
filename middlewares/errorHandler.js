const errorHandler = (err,req,res,next) => {
    switch(err.name) {
        case 'No Product' :
            return res.status(404).json({error : 'Page is Not Found'});
        case 'No Category' :
            return res.status(404).json({error : 'Page is Not Found'});
        case 'Invalid Input' :
            return res.status(400).json({error : 'Invalid Credentials'});
        case 'User is Already Exist' :
            return res.status(400).json({error : 'User is Already Exist'});
        case 'Invalid Email' :
            return res.status(400).json({error : 'Invalid Credentials'});
        case 'Invalid Password' :
            return res.status(400).json({error : 'Invalid Credentials'});
        default : 
            return res.status(500).json({error : 'Internal Server Error'});
    }
}



module.exports = errorHandler;