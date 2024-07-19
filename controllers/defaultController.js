import { Router } from "express";

const defaultController = Router();

defaultController.get('/', async (req,res) => {
    try{
        const prueba = 'hola';
        res.status(200).json({message:prueba});
    }catch(e){
        res.status(500).json({message:'Error'});
    }
})

export {defaultController};