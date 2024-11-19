/* eslint-disable react/prop-types */

const Table = ({ booking , hanlderRemove, handlerBookingConfirm}) => {
  console.log(booking);
  
  return (
    <tr>
      {/* row 1 */}
      <th>
        <button onClick={()=> hanlderRemove(booking._id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={booking.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{booking.name}</div>
          </div>
        </div>
      </td>
      <td>
        {booking.email}
        <br />
      </td>
      <td>{booking.amount}</td>
      <td>{booking.date}</td>
      <th>
{     booking.status === 'confirm'? <span className="font-bold text-purple-500">confirmed</span>:
     <button onClick={()=> handlerBookingConfirm(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>
}        </th>
    </tr>
  );
};

export default Table;
