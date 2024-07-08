import { RiGroupLine, RiRocket2Line, RiTrophyLine } from "react-icons/ri"
import { ItemCount } from "./ItemCount"

export const CountProjects = () => {
  return (
    <div className="w-full bg-primary p-10 rounded-2xl text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14 md:gap-5">
        <ItemCount Icon={RiGroupLine} counter="+20" title="Clientes satisfechos" />
        <ItemCount Icon={RiRocket2Line} counter="+130" title="Proyectos entregados" />
        <ItemCount Icon={RiTrophyLine} counter="+20" title="Certificados" />
    </div>
  )
}
