import express from "express"

const app  = express ();
const PORT = 5002;

app.get("/helloworld", (req,res) => {
    try {
        res.status(200).json({ meg : "HEllo wolrd"})
    } catch (error) {

    }
});

