import { useCallback, useState } from "react"
import { RatingService } from "../services"
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
        const {status}= await RatingService.create(data);

        if (status != 200) throw new Error();
        else console.log("Sucesso");

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