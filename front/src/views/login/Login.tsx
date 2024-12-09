"use client";

import { ILoginErrors, ILoginProps } from "@/interfaces/ILoginProps";
import React, { useEffect, useState } from "react";
import 'flowbite/dist/flowbite.min.css';
import { login } from "@/helpers/auth.helpers";
import { useRouter } from "next/navigation";
import { validateLoginForm } from "@/helpers/validate";


const LoginView = () => {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
  };
  const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
  const [errors, setErrors] = useState<ILoginErrors>(initialState);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(dataUser);
    console.log(response);

    if (response.statusCode === 400) {
      alert(response.message || 'Error en el registro');
    } else {
      alert("Ingreso correcto");
      const { token, user } = response;
      localStorage.setItem("userSession", JSON.stringify({ token, user }));
      router.push('/');
    }
  };

  useEffect(() => {
    if (Object.values(touched).some(field => field)) {
      const validationErrors = validateLoginForm(dataUser);
      setErrors(validationErrors);
    }
  }, [dataUser, touched]);

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          id="email-adress"
          name="email"
          type="email"
          value={dataUser.email}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email-adress"
          className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
        {touched.email && errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          id="password"
          name="password"
          type="password"
          value={dataUser.password}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {touched.password && errors.password && <span className="text-red-500">{errors.password}</span>}
      </div>

      <button
        type="submit"
        disabled={Object.values(errors).some(error => error !== "")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginView;
