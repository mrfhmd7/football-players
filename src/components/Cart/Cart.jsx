import React from 'react';
import { deletePlayerCart } from '../../utilities/fakedb';

const Cart = ({ cart }) => {
     
     // console.log(cart);

     const handleDeleteCart = deletePlayerCart;

     let totalPrice = 0;

     for (const player of cart) {
          totalPrice = totalPrice + player.price;
     }
     
     return (
          <div className='bg-orange-300 rounded-md mt-8  ml-10 h-96 relative'>
               <h3 className='text-xl mb-5 font-medium'>Transfer Summary</h3>
               <p className='text-xl mb-4'>Selected Players: {cart.length}</p>
               <h4 className='font-semibold text-lg'>Total cost: ${totalPrice}M</h4>
               <div className='absolute bottom-0 w-full bg-red-500  rounded-md'>
                    <button onClick={() => handleDeleteCart()} className='h-10 w-1/2 text-white font-semibold flex justify-between m-auto items-center'>
                         <span>
                         Remove all player
                         </span>
                         <span>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                         </svg>
                         </span>
                    </button>
               </div>

          </div>
     );
};

export default Cart;