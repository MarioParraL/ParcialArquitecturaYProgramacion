import mongoose from "npm:mongoose@7.6.3";
import { Monument } from "../types.ts";

const Schema = mongoose.Schema;

const monumentSchema = new Schema(
    {
      id: {type: String, required: true},
      name: {type: String, required: true},
      pais: {type: String, required: true},
      descripcion: {type: String, required: true},
      codigoPostal: {type: Number, required: true},
      codigoISO: {type: String, required: true},
      

}, 
{ timestamps: true}
);

export type MonumentModelType = mongoose.Document & Omit <Monument, "id">;

export default mongoose.model<MonumentModelType>("Monumento", monumentSchema)