"use client"; // Ensure this is at the top


import SideBar from "./components/sideBar";
import ContainerResumo from "./components/dashResumo/resumoContainer";
import { Suspense, useEffect } from "react";
// import Loading from "./loading";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        location.reload();
      }, 100000);
  
      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <main className="flex flex-row h-screen max-h-screen bg-white items-start justify-between">
      <SideBar />
      {/* <Suspense fallback={<Loading />}> */}
        <ContainerResumo />
      {/* </Suspense> */}
    </main>
  );
}
