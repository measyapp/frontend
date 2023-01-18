import { Dispatch, SetStateAction } from "react";

export interface AuthContextType {
    authorized : boolean,
    setAuthorized: Dispatch<SetStateAction<boolean>>;
}