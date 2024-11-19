/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import logo from '../../../assets/assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../../../AuthProvider/AuthProvider';
const SignUp = () => {
    const {signUp} = useContext(Context)


    const handlerSubmit = (e)=>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password  = from.password.value;
        const user = {name,email,password}

        signUp(email,password)
        .then(res => {
            console.log(res)
            alert('create user successfully')
            from.reset()

        })
        .catch(error => {
            console.log(error)
        })

        // console.log(user)
    }



    return (
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={logo} alt="" />
          </div>
          <div onSubmit={handlerSubmit} className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-[160px]">
            <form className="card-body p-10 border-2 rounded-xl">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="name" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white">Sign Up</button>
              </div>
              <p className="tex-xm py-3 text-center">Or Sign Up with</p>
              <div className='grid grid-cols-3 ml-8'>
                <p className='text-4xl'> <FcGoogle /></p>
                <p className='text-4xl'><FaFacebook /></p>
                <p className='text-4xl'><FaLinkedin /></p>
              </div>
              <p className=" text-center font-bold py-2">Already have an account? <span className='text-[#FF3811]'> <Link to={'/signin'}>Sign in</Link></span></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;