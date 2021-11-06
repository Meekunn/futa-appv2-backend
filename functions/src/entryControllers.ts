import {Response} from "express"
import {db} from "./config/firebase"

type EntryType = {
    brandname: string,
    firstname: string,
    lastname: string,
    bio: string,
    location: string,
    services: string,
    phonenumber: string,
    email: string,
}

 type Request = {
    body: EntryType,
    params: { entryId: string }
}

const getAllEntries = async (req: Request, res: Response) => {
    try {
        const allEntries: EntryType[] = []
        const querySnapshot = await db.collection("vendors").get()
        querySnapshot.forEach((doc: any) => allEntries.push(doc.data()))
        return res.status(200).json(allEntries)
    } catch {
        return res.status(500)
    }
}

export {getAllEntries}
