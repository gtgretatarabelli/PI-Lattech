"use client"
import { IUserSession } from '@/interfaces/IUserSession';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

const ProfileView = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = JSON.parse(localStorage.getItem("userSession") || "null");

      if (storedUserData) {
        setUserData(storedUserData);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUserData(null);
      }
    }
  }, []);

  return (
    <div className='max-w-lg mx-auto text-base sm:text-lg'>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Tu cuenta</h1>
      <div className='bg-gray-200 rounded-lg shadow-md p-4'>
        <p className='text-black font-semibold'>Hola, {userData?.user?.name}!</p>
        <br />
        <p className='bg-gray-400 border-collapse rounded-md p-2.5 my-2 w-full text-sm sm:text-base'>
          E-mail: {userData?.user.email}
        </p>
        <p className='bg-gray-400 border-collapse rounded-md p-2.5 my-2 w-full text-sm sm:text-base'>
          Teléfono: {userData?.user.phone}
        </p>
        <p className='bg-gray-400 border-collapse rounded-md p-2.5 my-2 w-full text-sm sm:text-base'>
          Nombre de usuario: {userData?.user.name}
        </p>
      </div>
    </div>
  );
}

export default ProfileView;
