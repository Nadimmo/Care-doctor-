/* eslint-disable react/no-unescaped-entities */
import { FaStar } from 'react-icons/fa';
import pearson from '../../../assets/p1.png'
import pearson2 from '../../../assets/p2.png'
const Customer = () => {
  return (
    <div>
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
          Testimonial
        </p>
        <h1 className="text-4xl text-center font-bold">What Customer Says</h1>
        <p className="text-x py-3 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 lg:ml-32'>
        <div className=''>
          <div className="flex ">
            <img src={pearson} alt="" className='w-16 h-16' />
            <div className='ml-5'>
            <h1 className="text-2xl font-bold">Awlad Hossain</h1>
            <p className="text-lg ">Businessman</p>
            </div>
          </div>
          <br />
            <p className="text-sm opacity-[0.5] max-w-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='text-2xl text-yellow-400 flex mt-2'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            
        </div>
        <div className=''>
          <div className="flex ">
            <img src={pearson2} alt="" className='w-16 h-16' />
            <div className='ml-5'>
            <h1 className="text-2xl font-bold">Alex Carry</h1>
            <p className="text-lg ">Businessman</p>
            </div>
          </div>
          <br />
            <p className="text-sm opacity-[0.5] max-w-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='text-2xl text-yellow-400 flex mt-2'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
