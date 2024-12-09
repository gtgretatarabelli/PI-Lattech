"use client";

import { IRegisterErrors, IRegisterProps } from "@/interfaces/IRegisterProps";
import React, { useEffect, useState } from "react";
import 'flowbite/dist/flowbite.min.css';
import { register } from "../../helpers/auth.helpers";
import { useRouter } from "next/navigation";
import { validateRegisterForm } from "../../helpers/validate";

const RegisterView = () => {
  const router = useRouter();
  const initialState = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  };
  const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    address: false,
    phone: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataUser({
      ...dataUser,
      [name]: value,
    });

    setTouched({
      ...touched,
      [name]: true,
    });

  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateRegisterForm(dataUser);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await register(dataUser);
      alert("Registro exitoso");
      router.push('/login');
    }
  };


  useEffect(() => {
    if (Object.values(touched).some(field => field)) {
      const validationErrors = validateRegisterForm(dataUser);
      setErrors(validationErrors);
    }
  }, [dataUser, touched]);

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="floating_email"
          value={dataUser.email}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email address
        </label>
        {touched.email && errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="floating_password"
          value={dataUser.password}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
        </label>
        {touched.password && errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="floating_name"
          value={dataUser.name}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
        {touched.name && errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="address"
          id="floating_address"
          value={dataUser.address}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Address
        </label>
        {touched.address && errors.address && (
          <span className="text-red-500 text-sm">{errors.address}</span>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="phone"
          id="floating_phone"
          value={dataUser.phone}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone
        </label>
        {touched.phone && errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      <button type="submit" disabled={Object.values(errors).some(error => error !== "")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};

export default RegisterView;
