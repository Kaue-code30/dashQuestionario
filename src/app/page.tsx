"use client";


import SideBar from "./components/sideBar";
import ContainerResumo from "./components/dashResumo/resumoContainer";
import { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginComponent from "./components/screenAuth/Index";
import DashPerormance from "./components/dashPerformance";





export default function Home() {
  const [auth, setAuth] = useState(false);
  const [IndexSidebar, SetIndexSidebar] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        location.reload();
      }, 100000);

      return () => clearTimeout(timer);
    }
  }, []);


  const handleLogin = () => {
    setAuth(false)
  }

  return (
    <QueryClientProvider client={new QueryClient()}>

      {auth ? (
        <main className="flex items-center justify-between w-full h-screen bg-white">
          <LoginComponent auth={handleLogin} />
        </main>
      ) : (

        <main className="flex flex-row h-screen max-h-screen bg-white items-start justify-between">
          <SideBar IndexSidebar={IndexSidebar} SetIndexSidebar={SetIndexSidebar} />
          {
            IndexSidebar === 0 ? (
              <ContainerResumo />
            ) : (
              <p className="w-full font-bold text-2xl h-full p-20" >Foi mal!! Ainda está em desenvolvimento...</p>
            )
          }
          x
        </main>


      )}
    </QueryClientProvider>
  );
}
