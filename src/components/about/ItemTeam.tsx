import { PropsItemTheam } from "@interfaces/globlal-interfaces";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const ItemTeam = ({
  image,
  name,
  booth,
  phone,
  email,
  facebook,
  instagram,
  linkedin,
}: PropsItemTheam) => {
  return (
    <article className="relative bg-white dark-mode-fill grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8 overflow-hidden shadow-xl">
      <div className="hola absolute top-0 left-0 w-0 h-0 border-r-[150px] md:border-r-[200px] border-r-transparent border-t-[150px] md:border-t-[200px] border-t-transparent border-l-[150px] md:border-l-[200px] border-l-primary border-b-[150px] md:border-b-[200px] border-b-primary"></div>

      <section className="col-span-1 flex items-center justify-center p-8 z-20">
        <img
          src={image}
          className="mt-8 md:mt-0 w-40 h-40 object-cover rounded-full p-1 bg-primary ring-8 ring-white"
        />
      </section>
      <section className="md:col-span-1 lg:col-span-2 p-8 z-20">
        <div className="absolute right-0 top-0 flex items-center gap-2 p-2 font-medium bg-gradient-to-r from-primary to-primary text-white uppercase text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h5>Telcom Mikrotik Perú</h5>
        </div>

        <div className="relative mt-4 before:absolute before:w-[150px] before:h-[1px] before:bg-primary before:left-0 before:-bottom-2 after:absolute after:w-2 after:h-2 after:bg-primary after:left-[148px] after:-bottom-[11.5px] after:rounded-full">
          <h3 className="text-gray-900 uppercase font-extrabold text-xl dark:text-secondary-100">
            {name}
          </h3>
          <p className="text-gray-500 text-sm dark:text-secondary-100">{booth}</p>
        </div>

        <ul className="ml-2 mt-10 text-gray-500 border-l-2 border-primary">
          <li className="flex items-center gap-2 text-xs mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 p-1 bg-primary text-white rounded-full -ml-[11px]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="dark:text-secondary-100">{phone}</span>
          </li>
          <li className="flex items-center gap-2 text-xs mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 p-1 bg-primary text-white rounded-full -ml-[11px]"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span className="dark:text-secondary-100">{email}</span>
          </li>
        </ul>

        <ul className="mt-4 flex items-center justify-end gap-2">
          {
            facebook && (
              <a className="bg-primary text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                href={`https://facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
                <RiFacebookFill />
              </a>
            )
          }
          
          {
            instagram && (
              <a className="bg-primary text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                <RiInstagramLine />
              </a>
            )
          }
          {
            linkedin && (
              <a className="bg-primary text-white p-2 rounded-full box-content hover:scale-110 transition-transform duration-500 ease-in" 
                href={`https://linkedin.com/${linkedin}`} target="_blank" rel="noopener noreferrer">
                <RiLinkedinFill />
              </a>
            )
          }
        </ul>
      </section>
    </article>
  );
};
