import { Request, Response } from "npm:express@4.18.2"
import  MonumentModelType  from "../db/monument.ts"
import monument from "../db/monument.ts";

const getMonument = async (req: Request, res:Response) => {
    try {
        const { id } = req.params;
        const { name, pais } = req.body;
        const person = await MonumentModelType.findOne({ id, name, pais}).exec();
        if(!MonumentModelType){
            res.status(404).send("Person not found");
            return;
        }
        res.status(200).send({
            id: monument.id,
            name: monument.name,
            pais: monument.pais,

        });
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
};

export default getMonument;