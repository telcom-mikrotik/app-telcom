import { Slider } from "@components/home/Slider";
import { HomeView } from "@views/HomeView";


export const Home = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Slider />

      <HomeView />
    </div>
  );
};
