import React from 'react';

const Header = () => {
     return (
          <nav className='bg-indigo-500 text-white h-20 flex items-center justify-between pl-24 pr-24 rounded-md  font-medium text-lg'>
               <h4>Player Market</h4>
               <div>
                    <a className='ml-10' href="/home">Home</a>
                    <a className='ml-10' href="/review">Review</a>
                    <a className='ml-10' href="/about">About</a>
               </div>
          </nav>
     );
};

export default Header;