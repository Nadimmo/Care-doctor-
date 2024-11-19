import { useLoaderData } from "react-router-dom";
import { Context } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Booking = () => {
  const {_id, img, price} = useLoaderData();
//   console.log(data);
const {user} = useContext(Context)


  const hanlderSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = user?.email
    const amount = form.amount.value;
    const date = form.date.value;

    const order = {_id, name,email,date,amount, img}
    console.log(order)

    fetch('https://car-server-2-copy.vercel.app/bookings',{
        method:"POST",
        headers: {
            'content-type':"application/json"
        },
        body: JSON.stringify(order)
    })
    .then(result =>{
        console.log(result)
        alert('booking successfully')
    })
    .catch(error =>{
        console.log(error)
    })

  }


  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Please File Up This Form And Booking Complete
      </h1>
      <br />
      <br />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0  bg-base-100">
            <form onSubmit={hanlderSubmit} className="card-body grid lg:grid-cols-2 lg:w-[800px]">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                name="date"
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                name="amount"
                  type="number"
                  className="input input-bordered"
                  required
                  defaultValue={`${price}`}
                />
              </div>
    
              <div className="form-control mt-6">
                <button  className="btn bg-[#FF3811] text-white lg:w-[730px]">Booking Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Booking;
