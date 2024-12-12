import express from "express";
const router = express.Router();
router.get ("/users", (req,res)=>{
    try {
        res.send("users")
    } catch (error) {
        console.log(error);

    }
})

export default router;
