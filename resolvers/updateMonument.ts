import { Request, Response } from "npm:express@4.18.2";
import  MonumentModelType  from "../db/monument.ts";
import monument from "../db/monument.ts";
const updateMonument  = async(req: Request, res: Response) => {

    try{
        const { id } = req.params;

        if(!id){
            res.status(400).send("El id es requerido");
            return;
        }

        const updateMonument = await MonumentModelType.findByIdAndUpdate({id}).exec();

        if(!updateMonument){
            res.status(404).send("No se ha encontrado el monumento indicado");
            return;
        }

        res.status.send({
            id: monument.id,
            name: monument.name,
            pais: monument.pais
        });

    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};

export default updateMonument;