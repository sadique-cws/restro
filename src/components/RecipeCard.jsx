import React, { useState } from 'react'

const RecipeCard = (recipe) => {
    const [qty, setQty] = useState(0);

  return (
    <div  className='flex flex-col p-2 border-b-2 border-gray-200'>
                            <img src={recipe.image} className='h-[200px] object-cover rounded-xl'/>
                            <div className='px-3 py-2'>
                            <div className='flex mb-1 items-center'>
                                <flex className="flex flex-col gap-0 mb-1">
                                    <div className='flex-1 font-normal text-xl'>{recipe.name}</div>
                                    <div className='flex-1 font-light  text-xs'>{recipe.category}</div>
                                </flex>
                                <div className='flex-1 text-right text-2xl font-semibold'>₹{recipe.price}</div>
                            </div>
                            <div className='flex-1 flex items-center justify-between'>
                                <div className='flex gap-3 items-center'>
                                    <button onClick={() => {
                                        if(qty > 0){
                                            setQty(qty - 1);
                                        }
                                    }} className="bg-red-700 text-white px-3 py-1 text-2xl rounded">-</button>
                                    <span className=" text-2xl">{qty}</span>
                                    <button  onClick={() => recipe.handleAdd(recipe,qty, setQty)} className="bg-green-700 text-white px-3 py-1 text-2xl rounded">+</button>
                                </div>

                                {recipe.isVeg && <img src="/icon.png" className='w-9 h-9 object-cover object-left'/>}
                                {!recipe.isVeg && <img src="/icon.png" className='w-9 h-9 object-cover object-right'/>}
                            </div>
                            </div>
                        </div>
  )
}

export default RecipeCard