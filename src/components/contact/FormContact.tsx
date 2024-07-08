import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { BsFillSendFill } from "react-icons/bs";
import "./_contact.scss";
import { toast } from "sonner";

export const FormContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Obtener los valores de los campos del formulario
    const formData = new FormData(form.current);
    const userName = formData.get("user_name") as string;
    const userEmail = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    // Validar que todos los campos obligatorios estén llenos
    if (!userName || !userEmail || !message) {
      toast.error("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      toast.error(
        "Por favor, introduzca una dirección de correo electrónico válida."
      );
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm("service_i0jqneg", "template_jz8pdsg", form.current, {
        publicKey: "EcH25E72iw_YY1Qn-",
      })
      .then(
        (response: EmailJSResponseStatus) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Mensaje enviado correctamente.");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Ocurrió un error al enviar el mensaje.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form className="flex flex-col gap-4" ref={form} onSubmit={handleSubmit}>
      <div className="grid gap-4 form__group">
        <input
          type="text"
          placeholder="Tu nombre"
          name="user_name"
          className="input__contact dark:bg-secondary-600 dark:border-secondary-600 border border-gray-300"
        />
        <input
          type="text"
          name="user_email"
          placeholder="Tu correo electrónico"
          className="input__contact dark:bg-secondary-600 dark:border-secondary-600 border border-gray-300"
        />
      </div>
      <input
        type="text"
        placeholder="Asunto"
        className="input__contact dark:bg-secondary-600 dark:border-secondary-600 border border-gray-300"
      />
      <textarea
        placeholder="Mensaje"
        name="message"
        className="input__contact dark:bg-secondary-600 dark:border-secondary-600 border border-gray-300 min-h-[10rem] max-h-[12rem]"
      ></textarea>

      <button
        type="submit"
        className="w-52 flex items-center justify-center gap-2 mb-5 sm:mb-0 bg-tertiary-100 bg-primary text-white py-3 rounded-full font-medium button__submit transition-all duration-500 ease-in-out outline-none"
        disabled={isSending}
      >
        {isSending ? (
          "Enviando..."
        ) : (
          <>
            <BsFillSendFill /> Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
};
