import Image from "next/image";
import React from "react";

export const HeaderLogo = () => {
  return (
    <div className='w-full flex items-center align-middle py-3  border-b-[0.5px] border-gray-900'>
      <div className='w-44 h-10 flex items-center bg-red-900 rounded-full align-middle relative self-center mx-auto'>
        <Image
          src='/pics/logo.png'
          height={10}
          width={10}
          alt='logo'
          className='w-10 h-10 rounded-full ml-4 '
        />
        <span className='font-bold '>Number Six</span>{" "}
      </div>
    </div>
  );
};
