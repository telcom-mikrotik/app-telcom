import { ItemService } from "@components/services/ItemService";
import { services } from "@json/services.json";

export const ServiceView = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center md:place-items-stretch">
        {services.map((service, index) => (
          <ItemService
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};
