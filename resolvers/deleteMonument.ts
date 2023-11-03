import { Request,Response } from "npm:express@4.18.2";
import  MonumentModelType  from "../db/monument.ts";


export const deleteMonument = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const monument = await MonumentModelType.findOneAndDelete({ id }).exec();

        if(!monument){
            res.status(404).send("El monumento no ha sido encontrado");
            return;
        }

        res.status(200).send("El monumento ha sido eliminado");
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
};

export default deleteMonument;