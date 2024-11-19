/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../AuthProvider/AuthProvider";
import Table from "./Table";

const MyBooking = () => {
  const { user } = useContext(Context);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  console.log(user)

  const url = `https://car-server-2-copy.vercel.app/bookings?email=${user?.email}`

  useEffect(() => {
    fetch(url, {credentials: 'include'})
    // useing fecth an use include
      .then((result) => result.json())
      .then((data) => setBookings(data));
  }, [url]);

//   seEffect(() => {
//     // fetch(url, { credentials: 'include' })
//     //     .then(res => res.json())
//     //     .then(data => setBookings(data))

//     axiosSecure.get(url)
//     .then(res => setBookings(res.data))

// }, [url, axiosSecure]);

  


  const hanlderRemove = (id)=>{
    console.log('delete ths id', id)

    fetch(`https://car-server-2-copy.vercel.app/bookings/${id}`,{
      method:"DELETE"
    })
    .then(result =>{
        console.log(result)
        alert('delete order successfully')
        const remaining = bookings.filter(booking => booking._id !== id )
        setBookings(remaining)
    } )
    .catch(error =>{
      console.log(error)
    })
  }

  const handlerBookingConfirm = (id)=>{
    fetch(`https://car-server-2-copy.vercel.app/bookings/${id}`,{
        method:"PATCH",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({status: "confirm"})
    })
    .then(result => result.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0){
            alert('update successfully')
            const remaining = bookings.filter(booking => booking._id !== id )
            const update = bookings.find(booking => booking._id === id )
            update.status = 'confirm'
            const newBookings = [update, ...remaining]
            setBookings(newBookings)

        }
    })
      
        
  }
 


  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        My Booking List{bookings.length}
      </h1>
      <br />
      <br />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gmail</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {bookings.map((booking) => (
                <Table
                hanlderRemove={hanlderRemove}
                key={booking._id} 
                handlerBookingConfirm={handlerBookingConfirm}
                  booking={booking}>

                  </Table>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
