/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const SignIn = () => {
    const {signIN,GoogleLogin} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()

    // console.log(authInfo)
    const handlerSubmit = (e)=>{
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password  = from.password.value;
        const loggedInuser = {email,password}
        const user = {email}
        signIN(email,password)

        .then(result =>{
          console.log(result)
          alert('user login successfully')
         if(result.user.email){
              navigate(location?.state ? location?.state : "/" )
            }
          // reset this form
          from.reset()
        })
        .catch(error =>{
          console.error(error)})
        // console.log(loggedInuser)
    }




    
   const LoginwithGoogle = e=>{
      e.preventDefault()
      GoogleLogin()
      .then(result =>{
        console.log(result.user)
        const user =( result.user.email)
        alert('user login successfully')

        if(result.user.email){
          navigate(location?.state ? location?.state : "/" )
        }

      })
      .catch((error)=>{
        console.log(error)
      })
      
    }




    return (
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-[160px]">
            <form  onSubmit={handlerSubmit} className="card-body p-10 border-2 rounded-xl">
            <h1 className="text-4xl font-bold text-center">Sign in</h1>
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
                <button className="btn bg-[#FF3811] text-white">Sign in</button>
              </div>
              <p className="tex-xm py-3 text-center">Or Sign In with</p>
              <div className='grid grid-cols-3 ml-8'>
                <a className='text-4xl hover:cursor-pointer' onClick={LoginwithGoogle}> <FcGoogle /></a>
                <a className='text-4xl'><FaFacebook /></a>
                <a className='text-4xl'><FaLinkedin /></a>
              </div>
              <p className=" text-center font-bold py-2">Don't Have Account? <span className='text-[#FF3811]'> <Link to={'/signup'}>Sign up</Link></span></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;