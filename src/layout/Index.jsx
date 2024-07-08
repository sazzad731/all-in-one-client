import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <div className="xl:w-4/5 mx-auto">
        <Header />
      </div>
      <div className="xl:w-4/5 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Index;