import { Dispatch, SetStateAction } from "react";

export interface AuthContextType {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
}