import express from "express"
import {router as apiV1} from "./v1";

const port = Number(process.env.PORT) || 8080;
const app = express();

app.use("*", (req, _, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})
app.use("/api/v1", apiV1)



app.listen(port, () => console.log(`express is listening on port ${port}`))