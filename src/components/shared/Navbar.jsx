import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='p-4 bg-white'>
      <div className='flex gap-5 text-center text-black justify-center'>
        <Link href="/" className='btn btn-sm btn-ghost '>Home</Link>
        <Link href="/posts" className='btn btn-sm btn-ghost'>Post</Link>
      </div>
    </div>
  );
};

export default Navbar;