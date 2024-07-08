import { Outlet } from "react-router-dom";
import { ButtonConfiguration } from "@components/layout/ButtonConfiguration";
import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { SidebarConfig } from "@components/layout/SidebarConfig";

export const AppLayout = () => {
  return (
    <div className="flex flex-col gap-5 text-gray-700 dark-mode">
      <Header/>
      <main className="xl:w-11xl mx-auto px-5 xl:px-0 mt-24">
        <ButtonConfiguration />
        <SidebarConfig />
        
        <Outlet />

      </main>
        <Footer />
    </div>
  );
};
