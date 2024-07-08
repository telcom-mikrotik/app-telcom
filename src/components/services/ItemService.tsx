import { linkWhatsApp } from "@helpers/helper";
import { PropsItemService } from "@interfaces/globlal-interfaces";
import { RiArrowRightLine, RiShieldFlashFill } from "react-icons/ri";

export const ItemService = ({ title, image  }: PropsItemService) => {
  return (
    <div className="w-350 bg-white dark-mode-fill p-7 rounded-xl shadow-lg flex flex-col justify-between gap-5 card__image">
      <div className="flex flex-col gap-3">
        <h2 className="text-primary uppercase font-bold text-md flex items-center gap-5">
          <div className="grid place-items-center place-content-center w-5 h-5">
            <RiShieldFlashFill className="text-lg bg-primary rounded-full p-2 text-white box-content" />
          </div>
          <span className="text-[0.9rem]">{title}</span>
        </h2>
        <hr className="border border-primary" />
        <figure>
          <img src={image} alt={title} className="rounded-xl"  />
        </figure>
      </div>

      <a href={linkWhatsApp(`Hola, quisiera más información sobre el servicio ${title}`)}
        target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary uppercase">
        <span className="font-medium">Saber más</span>
        <RiArrowRightLine />
      </a>
    </div>
  );
};
