import React, { useState } from 'react'
import {recipesData} from "./recipes";
import RecipeCard from "./components/RecipeCard"
import OrderSection from './components/OrderSection';

const Main = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const [orderList, setOrderList] = useState([]);


    const handleAdd = (recipe,qty, setQty) => {
        setQty(qty + 1);
        // Update the quantity in the recipe data
        // recipe.qty = qty;
        // Add the recipe to the order list
        setOrderList([...orderList, recipe]);
    }


  return (
    <div className='flex flex-1 h-screen '>
        <div className="w-9/12 flex flex-col gap-5 bg-slate-100 h-screen p-5">
            <div className='flex'>
                <h2 className="text-2xl font-semibold border-l-4 border-l-orange-600 pl-3">All Recipes</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 overflow-y-scroll h-[100vh]'>
                {recipes.map((recipe, index) => ( 
                    <RecipeCard handleAdd={handleAdd} key={index} {...recipe}/>)
                )}
            </div>
        </div>
        <div className="w-3/12 bg-sky-100 p-5">
            <div className='flex flex-1'>
                <h2 className="text-2xl font-semibold border-l-4 border-l-orange-600 pl-3">My Order</h2>
            </div>
            <OrderSection orderList={orderList} />

        </div>
    </div>
  )
}

export default Main