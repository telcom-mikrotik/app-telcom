import { FormContact } from "@components/contact/FormContact";
import { BiPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { RiUserLocationLine } from "react-icons/ri";

export const ContactView = () => {
  return (
    <>
      <div className="p-10 flex flex-col gap-5 lg:gap-16 text-gray-700 overflow-x-hidden my-5">
        <div className="h-full flex-col md:flex-row flex items-center md:items-start gap-12">
          <div className="md:h-3/4 flex flex-wrap md:flex-col gap-8">
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <BiPhoneCall className="text-primary" />
              <p className="flex flex-col text-base font-bold text-secondary-500 dark:text-secondary-100">
                Celular
                <span className="font-normal text-sm text-secondary-600 dark:text-gray-300">(+51) 976 910 930</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <GrMail className="text-primary" />
              <p className="flex flex-col text-base font-bold text-secondary-500 dark:text-secondary-100">
                Correo Electrónico
                <span className="font-normal text-sm text-secondary-600 dark:text-gray-300">iacosta@mikrotikperu.pe</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <RiUserLocationLine className="text-primary" />
              <p className="flex flex-col text-base font-bold text-secondary-500 dark:text-secondary-100">
                Ubicación
                <span className="font-normal text-sm text-secondary-600 dark:text-gray-300">Calle Las Golondrinas 114 - San Isidro</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:px-10">
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};
