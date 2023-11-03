import { Request, Response} from "npm:express@4.18.2";

import  MonumentModelType  from "../db/monument.ts";

export const addMonument = async (req:Request, res:Response) => {
    try{ 
        const {name, descripcion, codigoPostal, codigoISO} = req.body;
        if(!name || !descripcion || !codigoPostal || !codigoISO){
            res.status(400).send("Faltan valor(es) requeridos")
            return;
        }

        const alreadyExist = await MonumentModelType.findOne({name}).exec();
        if(alreadyExist){
            res.status(400).send("El monumento ya existe");
            return;
        }

        const newMonument = new MonumentModelType({ name, descripcion, codigoPostal, codigoISO});
        await newMonument.save();

        res.status(200).send({
            name: newMonument.name,
            descripcion: newMonument.descripcion,
            codigoPostal: newMonument.codigoPostal,
            codigoISO: newMonument.codgioISO
        });

        
    }catch(error){
        res.status(500).send(error.mensage);
        return;
    }
}

export default addMonument;