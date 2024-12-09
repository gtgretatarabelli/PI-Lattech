import { ILoginErrors, ILoginProps } from "@/interfaces/ILoginProps";
import { IRegisterErrors, IRegisterProps } from "@/interfaces/IRegisterProps";

export const validateRegisterForm = (value: IRegisterProps): IRegisterErrors => {
    const tempErrors: IRegisterErrors = {};
    if (!value.name) {
        tempErrors.name = "El nombre es requerido.";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
        tempErrors.name = "El nombre solo puede contener letras y espacios.";
    }
    if (!value.email) {
        tempErrors.email = "El email es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
        tempErrors.email = "Correo electrónico no válido.";
    }
    if (!value.password) {
        tempErrors.password = "La contraseña es requerida.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value.password)) {
        tempErrors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.";
    }
    if (!value.phone) {
        tempErrors.phone = "El número de teléfono es requerido.";
    } else if (!/^\d+$/.test(value.phone)) {
        tempErrors.phone = "El número de teléfono solo puede contener números.";
    } else if (value.phone.length < 8 || value.phone.length > 15) {
        tempErrors.phone = "El número de teléfono debe tener entre 8 y 15 dígitos.";
    }
    return tempErrors;
};

export const validateLoginForm = (value: ILoginProps): ILoginErrors => {
    const tempErrors: IRegisterErrors = {};

    if (!value.password) {
        tempErrors.password = "La contraseña es requerida.";
    }
    if (!value.email) {
        tempErrors.email = "El email es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
        tempErrors.email = "Correo electrónico no registrado ";
    }
    return tempErrors;
}
