/* eslint-disable react/no-unescaped-entities */
import logo1 from '../../../assets/assets/images/products/1.png'
import logo2 from '../../../assets/assets/images/products/2.png'
import logo3 from '../../../assets/assets/images/products/3.png'
import logo4 from '../../../assets/assets/images/products/4.png'
import logo5 from '../../../assets/assets/images/products/5.png'
import logo6 from '../../../assets/assets/images/products/6.png'
import { FaStar } from 'react-icons/fa'
const Product = () => {
  return (
    <div>
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
        Popular Products
        </p>
        <h1 className="text-4xl text-center font-bold">Browse Our Products</h1>
        <p className="text-x py-3 text-center">
        The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>

      <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className="card w-80 bg-base-100 shadow-xl">
            
          <figure className="px-10 pt-10">
            <img
              src={logo1}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={logo2}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={logo3}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={logo4}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={logo5}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={logo6}
              className="rounded-xl bg-base-200"
            />
          </figure>
          <div className='flex ml-24 mt-2 text-2xl text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
