import { ButtonSwitch } from "@components/sidebar/ButtonSwitch";
import { useConfigurationStore } from "@store/configuration.store";
import classNames from "classnames";
import { RiCloseLine } from "react-icons/ri";

export const SidebarConfig = () => {
  const isOpen = useConfigurationStore((state) => state.isOpen);
  const setOpen = useConfigurationStore((state) => state.setOpen);

  return (
    <div
      className={classNames(
        "w-350 h-screen fixed top-0 bg-white transition-all duration-500 ease-in z-40 py-10 px-8 shadow-lg flex flex-col gap-4 dark-mode-fill",
        {
          "right-0": isOpen,
          "-right-[380px]": !isOpen,
        }
      )}
    >
      <button
        onClick={() => setOpen(!isOpen)}
        className="bg-red-500 w-7 h-7 rounded-md text-white box-content text-lg flex items-center justify-center"
        aria-label="Cerrar sidebar"
      >
        <RiCloseLine />
      </button>
      <h4 className="uppercase text-lg font-bold text-center text-gray-600 dark:text-primary">
        Configurar Tema
      </h4>

      <hr className="border border-primary" />

      <div className="flex items-center justify-center gap-5 uppercase my-5">
        <span className="font-bold text-gray-600 dark:text-secondary-100">
          Tema del sistema:{" "}
        </span>
        <ButtonSwitch />
      </div>
    </div>
  );
};
