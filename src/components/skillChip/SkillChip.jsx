import React from 'react'

const SkillChip = ({icon, txt}) => {
  return (
    <div className=' flex flex-col gap-2 items-center w-1/3 md:w-1/4 lg:w-[15%] mt-12'>
      <img src={icon} alt="" className='w-[4rem] h-[4rem]'/>
      <p className=' text-[1.13rem]'>{txt}</p>
    </div>
  )
}

export default SkillChip