import Sidebar from "@/components/Sidebar";
import "@styles/globals.css";

export const metadata = {
  title: "Dachi-giorgi",
};

const RootLayout = ({ children }) => {
  
  return (
    <html lang="en">
      <body className="bg-[#080808;]">
        
      <div className="flex min-h-screen md:flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row min-[320px]:flex-col">
        
  <Sidebar  />
  <div className="md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full pt-36  mr-5  ml-[-70px] mt-[-100px] min-[1900px]-mt-[-500px]">
    {children}
  </div>
</div>
    
      </body>
    </html>
  );
};

export default RootLayout;
