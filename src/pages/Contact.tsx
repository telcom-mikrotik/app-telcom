import { Title } from "@components/layout/Title"
import { ContactView } from "@views/ContactView"

export const Contact = () => {
  return (
    <div className="my-7">
        <Title title="Contáctanos" />

        <ContactView />
    </div>
  )
}
