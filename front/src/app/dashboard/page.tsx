"use client"

import { IUserSession } from "@/interfaces/IUserSession";
import ProfileView from "@/views/ProfileView/ProfileView"; // Componente para la vista de perfil
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const router = useRouter()
  const [userData, setUserData] = useState<IUserSession | null>(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userSession") || "null")
    console.log("user:" , user);
    
    if (user) {
      if(user.token){
         setUserData(user)
      }
    } else {
      router.push("/")
    }

  }, [router])

  return (
    <div>

      {
        userData?.token && (
          <ProfileView />
        )
      }

    </div>
  );
};

export default DashboardPage;
