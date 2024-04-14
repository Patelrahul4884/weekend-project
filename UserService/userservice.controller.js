import User from "./userservice.db.js";

export const createUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        newUser = await newUser.save();

        return sendJSONResponse(res,200,newUser,"OK","User created successfully")
    }
    catch (error) {
        return res.status(500).json({ success: 0, message: err.message, data: null });
    }
}

export const signInUser = async(req,res) => {
    try{
        let currUser = await User.findOne({email:req.body.email});
        if(currUser.password === req.body.password)
        {
            
        }
    }
    catch(error)
    {
        return res.status(500).json({ success: 0, message: err.message, data: null });
    }
}