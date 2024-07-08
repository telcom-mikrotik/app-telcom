import { linkWhatsApp } from "@helpers/helper";
import { RiFacebookFill, RiMailLine, RiMapPin2Line, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-white w-full p-8 dark-mode-fill">
      <div className="xl:w-11xl mx-auto">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center gap-8">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-primary">Telcom</h2>
            <p className="text-gray-600 text-justify dark:text-secondary-100">
              En Telecom, comprendemos la importancia de estar siempre
              conectados y comunicados en un mundo cada vez más digital. Estamos
              aquí para asegurarnos de que tengas una experiencia excepcional en
              cada paso del camino.
            </p>
          </div>

          <div className="">
            <h2 className="font-bold mb-6 uppercase">Contacto</h2>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <RiMapPin2Line />
                Calle Las Golondrinas 114 - San Isidro
              </p>
              <p className="flex items-center gap-2">
                <RiMailLine />
                iacosta@mikrotikperu.pe
              </p>
              <p className="flex items-center gap-2">
                <RiPhoneLine />
                (+51) 976 910 930
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="font-bold mb-6 uppercase">Redes sociales</h2>
            <div className="flex flex-col gap-4">
              <a href="https://www.facebook.com/profile.php?id=61550518995348" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <RiFacebookFill className="p-2 box-content bg-blue-500 text-white rounded-full hover:scale-110 transition-transform duration-500 ease-out" />
                Telcom Mikrotik Perú
              </a>
              <a href={linkWhatsApp("")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <RiWhatsappLine className="p-2 box-content bg-green-500 text-white rounded-full hover:scale-110 transition-transform duration-500 ease-out" />
                (+51) 976 910 930
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="mx-auto flex flex-col xl:flex-row gap-4 items-center justify-between">
          <p className="text-gray-800 text-center md:text-left dark:text-secondary-100">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-900 dark:text-secondary-100 font-bold">Telcom.</span> Todos los
            derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 dark:text-secondary-100 transition-colors"
            >
              Terminos y condiciones
            </a>
            <span className="hidden md:flex">|</span>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 dark:text-secondary-100 transition-colors"
            >
              Política de privacidad
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
};
