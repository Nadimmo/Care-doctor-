/* eslint-disable react/no-unescaped-entities */
import person from '../../assets/assets/images/about_us/person.jpg'
import parts from '../../assets/assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <img src={person} alt="" className='w-3/4' />
            <img src={parts} alt="" className='w-1/2 absolute top-1/2 right-5 border-[6px] border-white'/>
        </div>
       
        <div className='lg:w-1/2 lg:ml-[200px]'>
            <p className="text-xl py-4 font-bold text-orange-500">About Us</p>
          <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
