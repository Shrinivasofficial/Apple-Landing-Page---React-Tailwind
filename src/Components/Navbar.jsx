import React from 'react';

export const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between mt-8 px-8'>
        
        <h1 className='text-xl leading-none tracking-normal font-bold'>Apple</h1>

        <div className='absolute left-1/2 transform -translate-x-1/2'>
            <div className='flex justify-center items-center space-x-7'>
                <a href='/' className='text-sm font-medium'>Home</a>
                <a href='/' className='text-sm font-medium'>Products</a>
                <a href='/' className='text-sm font-medium'>Iphone</a>
                <a href='/' className='text-sm font-medium'>Airpods</a>
                <a href='/' className='text-sm font-medium'>Macbook</a>
                <a href='/' className='text-sm font-medium'>Eco System</a>
                <a href='/' className='text-sm font-medium'>Service</a>
                <a href='/' className='text-sm font-medium'>Community</a>
            </div>
        </div>

        <div>
            <button className='flex items-center border border-gray-300 px-8 py-2 rounded-lg bg-black text-white text-sm'>
                Get Started
            </button>
        </div>
      
    </div>
  );
}
