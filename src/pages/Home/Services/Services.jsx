/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  const [cartes, setCart] = useState([]);
  useEffect(() => {
    fetch("https://car-server-2-copy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
console.log(cartes)

  return (
    <div className="mt-10">
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
          Services
        </p>
        <h1 className="text-4xl text-center font-bold">Our Service Area</h1>
        <p className="text-x py-3 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cartes.map((cart) => (
          <div key={cart._id} className="card lg:w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={cart.img}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{cart.title}</h2>
              <div className="flex justify-between">
                <p className="text-[#FF3811] text-xl font-bold"> Price :  ${cart.price}</p>
                <button  className=" text-[#FF3811]"> <Link to={`/booking/${cart._id}`}><FaArrowRight /></Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <button className="btn btn-outline btn-error lg:ml-[45%]">More Services</button>
    </div>
  );
};

export default Services;
