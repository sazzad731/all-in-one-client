import accountant from "../../../assets/image/banner/accountant.jpg"
import doctor from "../../../assets/image/banner/doctor.jpg"
import immigration from "../../../assets/image/banner/Immigration.jpg"
import journalist from "../../../assets/image/banner/journalist.jpg"
import law from "../../../assets/image/banner/law.jpg"
import photographer from "../../../assets/image/banner/photographer.jpg"
import travel from "../../../assets/image/banner/travel.jpg"



const Carousel = () =>{
  return (
    <div className="carousel w-full h-[83vh] rounded-xl mb-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={accountant} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Professional Accounting Services
            </h2>
            <p className="text-lg mb-8">
              Ensure your financial health with our comprehensive accounting
              services. From bookkeeping and payroll to tax preparation and
              financial planning, our certified accountants provide accurate and
              reliable solutions tailored to your business needs. Trust us to
              keep your finances in order and help you achieve your financial
              goals with precision and efficiency.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={doctor} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Expert Medical Care</h2>
            <p className="text-lg mb-8">
              Your health is our priority. Our team of experienced and
              compassionate doctors is dedicated to providing top-notch medical
              care for you and your family. Whether you need a routine check-up,
              specialized treatment, or emergency care, our medical
              professionals are here to offer personalized and effective
              healthcare solutions. Experience the highest standard of medical
              care with us.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={immigration} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Comprehensive Immigration Services
            </h2>
            <p className="text-lg mb-8">
              Navigate the complex world of immigration with confidence. Our
              immigration experts are here to guide you through every step of
              the process, whether you&aps;re seeking visas, residency, or
              citizenship. With extensive knowledge and personalized support, we
              strive to make your immigration journey smooth and stress-free.
              Trust us to help you achieve your immigration goals.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={journalist} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              In-Depth Journalism and Reporting
            </h2>
            <p className="text-lg mb-8">
              Stay informed with our in-depth journalism and reporting. Our team
              of dedicated journalists brings you the latest news, insightful
              analysis, and compelling stories from around the world. Committed
              to accuracy and integrity, we cover a wide range of topics to keep
              you well-informed and engaged. Experience quality journalism that
              makes a difference.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={law} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Expert Legal Services</h2>
            <p className="text-lg mb-8">
              Protect your rights and interests with our expert legal services.
              Our team of experienced lawyers offers comprehensive legal support
              in various areas, including family law, corporate law, criminal
              defense, and more. With a client-focused approach and a deep
              understanding of the law, we provide effective legal solutions
              tailored to your unique needs. Trust us to be your advocate in the
              legal system.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={photographer} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Professional Photography Services
            </h2>
            <p className="text-lg mb-8">
              Capture your precious moments with our professional photography
              services. Whether it&apos;s a wedding, corporate event, or a
              personal portrait session, our skilled photographers use their
              artistic expertise to create stunning images that you&apos;ll
              cherish forever. We offer a wide range of photography services
              tailored to meet your specific needs and preferences. Let us turn
              your moments into lasting memories.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide7" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full">
        <img src={travel} className="w-full object-cover" />
        <div className="absolute flex items-center justify-center rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#3a3a3ac5] to-[#3a3a3ac5]">
          <div className="text-white text-center w-[40rem]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Personalized Travel Services
            </h2>
            <p className="text-lg mb-8">
              Discover the world with our personalized travel services. From
              planning your dream vacation to organizing business trips, our
              travel experts are here to make your travel experience seamless
              and enjoyable. We offer customized travel packages, including
              flights, accommodations, tours, and more, to suit your preferences
              and budget. Let us take care of the details while you enjoy the
              journey.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[90%] lg:top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;