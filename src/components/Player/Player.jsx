import React from 'react';

const Player = ({player}) => {
     const { image, position,age, name, price } = player;
     // console.log(player);
     return (

          <>
               <div className='mt-8 border-2 border-green-800 rounded-md h-96 relative'>
                    <img className='m-auto pt-3 rounded-md h-52 w-11/12' src={image} alt="" />
                    <div className='my-3'>
                         <h3 className='text-lg font-semibold'>Name: {name}</h3>
                         <p>Position: {position}</p>
                         <p>Age: {age} Years</p>
                         <p className='font-semibold'>Market value: ${price}m </p>
                    </div>
                    <div className='absolute bottom-0 w-full h-10 bg-lime-500 hover:bg-lime-800 rounded-sm'>
                         <button className='text-white font-medium py-2'>Take the player</button>
                    </div>
               </div>
          </>
     );
};

export default Player;