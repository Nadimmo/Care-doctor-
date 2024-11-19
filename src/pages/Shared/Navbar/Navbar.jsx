import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { Context } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
    const {user,outSign} = useContext(Context)
    // console.log(user.displayName    )
    const Links = <>
  <li> <NavLink to={'/'}>Home</NavLink></li>
  <li> <NavLink to={'/about'}>About</NavLink></li>
  <li> <NavLink to={'/services'}>Services</NavLink></li>
  {
    user?.email && <>
     <li> <NavLink to={'/myBooking'}>My Booking</NavLink></li>
    </>

  }
 
    </>

  const handlerSignOut = (e)=>{
    e.preventDefault()
    outSign()
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <Link to={'/'}> <img src={logo} alt="" className=" hidden md:block lg:block h-[70px] w-[70px]" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
              {
                user ? <>
                 <p>{user.displayName} <Link className="btn btn-info" onClick={handlerSignOut}>Sign  Out</Link> </p>  
                </>:
                <Link className="btn btn-info mr-4" to={'/signin'}>Sign in</Link>

              }
          </div>
          <a className="btn btn-error btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
