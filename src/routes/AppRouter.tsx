import ScrollToTop from "@components/layout/ScrollToTop";
import { AppLayout } from "@hooks/AppLayout";
import { About } from "@pages/About";
import { Contact } from "@pages/Contact";
import { Home } from "@pages/Home";
import { Services } from "@pages/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
