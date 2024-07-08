import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { ItemService } from "@components/services/ItemService";
import { services } from "@json/services.json";
import { Title } from "@components/layout/Title";
import { CountProjects } from "@components/home/CountProjects";
// import { Subtitle } from "@components/layout/Subtitle";
// import { ItemClient } from "@components/home/ItemClient";
// import { clients } from "@json/clients.json";

export const HomeView = () => {
  return (
    <>
      <Title title="Nuestros servicios" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center md:place-items-stretch">
        {services.slice(0, 3).map((service, index) => (
          <ItemService key={index} title={service.title} image={service.image} />
        ))}
      </div>

      <Link
        to={"/services"}
        className="flex items-center justify-center uppercase text-primary font-medium"
      >
        <span>Ver más servicios</span> <RiArrowRightLine />
      </Link>

      {/* <Subtitle title="Nuestros Principales Clientes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center md:place-items-stretch">
        {clients.map((client, index) => (
          <ItemClient key={index} image={client.image} name={client.name} description={client.description} facebook={client.facebook} instagram={client.instagram} email={client.email}
          />
        ))}
      </div> */}

      {/* <Subtitle title="Nuestros Principales Clientes" /> */}
      <CountProjects/>
    </>
  );
};
