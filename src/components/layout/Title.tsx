export const Title = ({title}: {title: string}) => {
  return (
    <h1 className="font-black text-3xl title__page text-gray-600 dark:text-secondary-100">
      {title}
    </h1>
  );
};
