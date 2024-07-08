import { RiSettings3Fill } from "react-icons/ri";
import { useConfigurationStore } from "@store/configuration.store";
import "./_layout.scss";
import classNames from "classnames";

export const ButtonConfiguration = () => {
  const isOpen = useConfigurationStore((state) => state.isOpen);
  const setOpen = useConfigurationStore((state) => state.setOpen);

  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className={classNames(
        "fixed p-3.5 bg-primary text-secondary-100 rounded-l-xl box-content outline-none z-50 transition-all duration-500 ease-in border-2 border-secondary-100 dark:border-secondary-500",
        {
          "right-0": !isOpen,
          "-right-full": isOpen,
        }
      )}
      aria-label="Abrir sidebar"
    >
      <RiSettings3Fill className="animate-spin animate-spin-slow text-2xl" />
    </button>
  );
};
