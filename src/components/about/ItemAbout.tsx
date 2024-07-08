import { Subtitle } from "@components/layout/Subtitle";

export const ItemAbout = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col gap-5 p-7 bg-white dark-mode-fill rounded-xl shadow-lg">
      <Subtitle title={title} />
      <p className="text-justify leading-7">{text}</p>
    </div>
  );
};
