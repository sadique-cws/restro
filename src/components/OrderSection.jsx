import React from 'react'
import OrderItem from "./OrderItem";

const OrderSection = ({orderList}) => {
  return (
    <div className='flex flex-col mt-5 gap-2 overflow-y-scroll h-[75vh] px-3'>
       {orderList.map((order, index) => <OrderItem key={index} {...order}/>)}
    </div>
  )
}

export default OrderSection