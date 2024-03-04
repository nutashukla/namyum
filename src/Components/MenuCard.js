import React from 'react'

const MenuCard = ({imageID, name, ingridient }) => {
  return (
    <div className='flex mt-4 '>
        <img className="w-[50%] h-[550px]"src={imageID} alt="" />
        <div className='mt-20'>
          <h1 className='ml-[300px] font-bold text-4xl'>{name}</h1>
        <h1 className='mt-4 text-center text-3xl'>{ingridient}</h1></div>
    </div>
  )
}

export default MenuCard