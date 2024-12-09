import { ILoginProps } from "@/interfaces/ILoginProps";
import { IRegisterProps } from "@/interfaces/IRegisterProps";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(dataUser: IRegisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dataUser)
        })
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error en el registro');
        }
    } catch (error: any) {
        throw new Error(error)
    }

}

export async function login(dataUser: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dataUser)
        })
        const response = await res.json(); //se trae solo la parte necesaria de todo el json 
        return response;
    } catch (error: any) {
        throw new Error(error)
    };
}
