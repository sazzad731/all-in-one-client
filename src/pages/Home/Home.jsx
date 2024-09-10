import Carousel from "./Carousel/Carousel.jsx"
import CustomerTestimonials from "./CustomerTestimonials/CustomerTestimonials.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import HomeService from "./HomeService/HomeService.jsx";

const Home = () =>{
  return (
    <div className="px-3 xl:px-0">
      <section>
        <Carousel />
      </section>
      <section>
        <HomeService />
      </section>
      <section>
        <CustomerTestimonials/>
      </section>
      <section>
        <FAQ/>
      </section>
    </div>
  );
};

export default Home;