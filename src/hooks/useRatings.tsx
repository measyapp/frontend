import { useCallback, useState } from "react"
import { RatingService,getLoggedId } from "../services"
import { IRatingData } from "../types"
import { useAuth } from "./useAuth";

export const HookRatings = () =>{
    const [ratings,setRatings] = useState<IRatingData[]>([]);
    const [rating,setRating] = useState<IRatingData>();
    const getAll =  useCallback(async () =>{
        const {status, data} = await RatingService.getAll();

        if(status != 200) throw new Error();
        setRatings(data);
        
    },[])
    const getById =  useCallback(async (id : any) =>{
        const {status, data} = await RatingService.getById(id);

        if(status != 200) throw new Error();
        setRating(data);
    },[])
    
    const create =  useCallback(async (data : IRatingData) =>{

        const idAutor = getLoggedId();
        if (idAutor > 0){
            const {status}= await RatingService.create({...data, id_autor: idAutor});
            if (status != 200) throw new Error();
        } else{
               throw new Error("Falha incluindo avaliação. Informações do usuário inválidas");
         } 


    },[])
    const update =  useCallback(async (id: number,data : IRatingData) =>{
        const {status}= await RatingService.update(id,data);

        if (status != 200) throw new Error();
    },[])
    const remove = useCallback(async (id : number) =>{
        const {status}= await RatingService.remove(id);
        if (status != 200) throw new Error();
        getAll();
    },[])

    return {
        getAll,
        create,
        update,
        getById,
        remove,
        ratings
    }
}