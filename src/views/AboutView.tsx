import { ItemAbout } from "@components/about/ItemAbout";
// import { ItemTeam } from "@components/about/ItemTeam";
// import { Subtitle } from "@components/layout/Subtitle";
import { linkWhatsApp } from "@helpers/helper";
import { RiArrowRightLine } from "react-icons/ri";
// import { team } from "@json/team.json";

export const AboutView = () => {
  return (
    <div className="mb-10 pt-8">
      <div>
        <div className="flex items-estar justify-center gap-10">
          <p className="w-full md:w-2/3 text-justify leading-7">
            Somos Telcom MikroTik Peru, líderes confiables en soluciones de
            telecomunicaciones en Perú. Nuestra pasión es brindarte tecnologías
            de vanguardia para mantenerte conectado y alcanzar tus metas
            digitales. Con nuestra experiencia, ofrecemos soluciones
            personalizadas que se adaptan a tus necesidades específicas. Estamos
            aquí para ayudarte a aprovechar al máximo las oportunidades
            tecnológicas, ya sea mejorando tu conexión a internet, expandiendo
            tu red empresarial o explorando nuevas soluciones de
            telecomunicaciones.
          </p>
          <img
            src="https://www.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png"
            alt="about"
            className="w-1/3 rounded-xl hidden md:block"
          />
        </div>
        <a
          href={linkWhatsApp("")}
          target="_blank"
          className="flex items-center justify-center gap-3 font-medium text-primary text-lg mt-3"
          rel="noopener noreferrer"
        >
          ¡Conéctate con nosotros y descubre todo lo que podemos hacer por ti!
          <RiArrowRightLine />
        </a>
      </div>

      {/* <div className="mt-12 flex flex-col gap-7">
        <Subtitle title="¡Conoce nuestro gran equipo!" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
          {
            team.map((item, index) => (
              <ItemTeam key={index} image={item.image} name={item.name} booth={item.booth} phone={item.phone} email={item.email} facebook={item.facebook} instagram={item.instagram} linkedin={item.linkedin} />
            ))
          }
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <ItemAbout title="Misión" text="Nuestra misión es conectar a las personas a través de soluciones de comunicación avanzadas, brindando un servicio confiable y de calidad excepcional para satisfacer las necesidades de nuestros clientes." />
        <ItemAbout title="Visión" text="Nuestra visión es convertirnos en el proveedor líder de soluciones de comunicación innovadoras y sostenibles, mejorando constantemente la forma en que las personas se conectan." />
      </div>
    </div>
  );
};
