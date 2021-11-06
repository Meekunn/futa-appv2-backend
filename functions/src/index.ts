import * as functions from "firebase-functions"
import * as express from "express"
import * as cors from "cors"
import {getAllEntries} from "./entryControllers"

const app = express()

app.use(cors())
app.get("/", (req, res) => res.status(200).send("Hey there!"))
app.get("/vendors", getAllEntries)

exports.app = functions.https.onRequest(app)
