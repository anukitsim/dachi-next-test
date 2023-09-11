import Sidebar from "@/components/Sidebar";
import "@styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Dachi-giorgi",
};

const RootLayout = ({ children }) => {
  
  return (
    <html lang="en">
      <body className="bg-[#080808]">
        
      <div className="flex min-h-screen md:flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row min-[320px]:flex-col">
        
  <Sidebar  />
  <Suspense fallback={<Loading />}>
  <div className="md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full pt-36  mr-5 max-[900px]:ml-5">
    {children}
  </div>
  </Suspense>

</div>
    
      </body>
    </html>
  );
};

export default RootLayout;
