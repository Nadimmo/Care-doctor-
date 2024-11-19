import logo1 from "../../../assets/assets/images/banner/1.jpg";
import logo2 from "../../../assets/assets/images/banner/2.jpg";
import logo3 from "../../../assets/assets/images/banner/3.jpg";
import logo4 from "../../../assets/assets/images/banner/4.jpg";
import logo5 from "../../../assets/assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[540px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={logo1} className="w-full" />
          <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white w-[300px] ml-10 mt-10">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="py-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex ">
                    <button className="btn mr-5 bg-[#FF3811] text-white border-none hover:border">Discover more</button>
                    <button className="btn btn-default btn-outline text-white">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2 right-5 bottom-0 ">
           
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={logo2} className="w-full" />
          <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white w-[300px] ml-10 mt-10">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="py-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex ">
                    <button className="btn mr-5 bg-[#FF3811] text-white border-none hover:border">Discover more</button>
                    <button className="btn btn-default btn-outline text-white">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={logo3} className="w-full" />
          <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white w-[300px] ml-10 mt-10">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="py-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex ">
                    <button className="btn mr-5 bg-[#FF3811] text-white border-none hover:border">Discover more</button>
                    <button className="btn btn-default btn-outline text-white">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={logo4} className="w-full" />
          <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white lg:w-[300px] lg:ml-10 l:mt-10">
                <h1 className="text-xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="py-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex ">
                    <button className="btn lg:mr-5 bg-[#FF3811] text-white border-none hover:border">Discover more</button>
                    <button className="btn btn-default btn-outline text-white">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={logo5} className="w-full" />
          <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white w-[300px] ml-10 mt-10">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="py-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex ">
                    <button className="btn mr-5 bg-[#FF3811] text-white border-none hover:border">Discover more</button>
                    <button className="btn btn-default btn-outline text-white">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
