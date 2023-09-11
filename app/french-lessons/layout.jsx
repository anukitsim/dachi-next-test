import Sidebar from "@/components/Sidebar";
import Loading from "@app/STEPS/loading";
import "@styles/globals.css";
import { Suspense } from "react";

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
  <div className="flex-grow md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full h-screen mr-5">
    {children}
  </div>
  </Suspense>
 
</div>
    
      </body>
    </html>
  );
};

export default RootLayout;
