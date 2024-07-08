import { PropsItemCliente } from "@interfaces/globlal-interfaces";
import { RiFacebookFill, RiInstagramLine, RiMailLine } from "react-icons/ri";

export const ItemClient = ({image, name, description, facebook, instagram, email}: PropsItemCliente) => {
  return (
    <div className="bg-white dark-mode-fill flex flex-col justify-between max-w-sm mx-auto rounded-lg shadow-xl card__image">
      <div className="p-5">
        <img src={image} alt={name} className="w-350 object-cover h-80 rounded-lg" />
      </div>
      <div className="px-6 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100">{name}</h2>
            <p className="text-gray-500 dark:text-gray-300">{description}</p>
        </div>

        {
          (facebook !=="" || instagram !=="" || email !== "") && (
            <div className="flex items-center justify-center gap-5">
              {facebook && (
                <a className="bg-blue-500 text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                  href={facebook} target="_blank" rel="noopener noreferrer">
                  <RiFacebookFill />
                </a>
              )}
              {instagram && (
                <a className="bg-pink-500 text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                  href={instagram} target="_blank" rel="noopener noreferrer">
                  <RiInstagramLine />
                </a>
              )}
              {email && (
                <a className="bg-red-500 text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                  href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                  <RiMailLine />
                </a>
              )}
            </div>
          )
        }
      </div>
    </div>
  );
};
