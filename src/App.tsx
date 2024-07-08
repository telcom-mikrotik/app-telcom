import { AppRouter } from "@routes/AppRouter";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <AppRouter />
    </>
  );
};

export default App;
