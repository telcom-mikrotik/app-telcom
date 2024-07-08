import { PropsItemCount } from "@interfaces/globlal-interfaces";

export const ItemCount = ({Icon, counter, title}: PropsItemCount) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Icon className="p-5 rounded-full border-4 border-x-white text-6xl text-white box-content" />
      <span className="text-6xl text-center font-extrabold">{counter}</span>
      <span className="text-2xl text-center font-bold uppercase">{title}</span>
    </div>
  );
};
