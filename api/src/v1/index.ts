import {Router} from "express";

export const router = Router()

router.get("/color", (req, res) => {
    res.status(200).json(
        {color: process.env.COLOR || "white"}
    )
})