export const Subtitle = ({title}: {title: string}) => {
  return (
    <h2 className="font-black text-3xl subtitle__page text-gray-600 dark:text-secondary-100">
      {title}
    </h2>
  );
};
