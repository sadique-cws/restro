import React from 'react'

const OrderItem = (props) => {
  return (
    <div className="bg-white border rounded-xl flex">
            <img src={props.image} className='flex-1 max-w-[100px] rounded-s-xl'/>
            <div className="p-2 flex-[2]">
                <h2 className='font-bold text-lg'>{props.name}</h2>
                <p>₹{props.price}</p>           
                <p>{props.qty}</p>
            </div>
        </div>
  );
}

export default OrderItem