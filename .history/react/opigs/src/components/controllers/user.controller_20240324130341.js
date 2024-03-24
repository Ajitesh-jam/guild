const getUser=async (rreq,res) => {
    try{
        const users=await User.find();
        res.json(users);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    });