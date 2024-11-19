/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import logo1 from "../../../assets/assets/images/team/1.jpg";
import logo2 from "../../../assets/assets/images/team/2.jpg";
import logo3 from "../../../assets/assets/images/team/3.jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Team = () => {
  return (
    <div>
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
          Team
        </p>
        <h1 className="text-4xl text-center font-bold">Meet Our Team</h1>
        <p className="text-x py-3 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={logo1} className="rounded-xl bg-base-200" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-xl opacity-[0.5] ">Engine Expert</p>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <a className="text-4xl hover:cursor-pointer">
                {" "}
                <FcGoogle />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaFacebook />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaLinkedin />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={logo2} className="rounded-xl bg-base-200" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-xl opacity-[0.5] ">Engine Expert</p>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <a className="text-4xl hover:cursor-pointer">
                {" "}
                <FcGoogle />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaFacebook />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaLinkedin />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
          
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={logo3} className="rounded-xl bg-base-200" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-xl opacity-[0.5] ">Engine Expert</p>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <a className="text-4xl hover:cursor-pointer">
                {" "}
                <FcGoogle />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaFacebook />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaLinkedin />
              </a>
              <a className="text-4xl hover:cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
