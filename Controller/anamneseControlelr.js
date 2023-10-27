import { Anamnese } from "../models/Anamnese.js";



export const anamneseIndex = async (req, res) => {
    try {
        const anamnese = await Anamnese.findAll();
        res.status(200).json(anamnese);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const createAnamnese = async (req, res) => {
    // FORMULARIO 
    // Vincular com o cliente e o front

}
