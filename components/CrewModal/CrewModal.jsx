import React from 'react'
import Backdrop from '@/components/Backdrop/Backdrop'

import { motion } from 'framer-motion';
import Image from 'next/image';

const CrewModal = ({data}) => {
  return (
    <Backdrop>
      <motion.div  
            className='text-neutral-200 rounded-lg w-[90%] sm:w-[50%] lg:w-[40%] xl:w-[25%] h-[80%] bg-neutral-100 overflow-hidden '
        >
          <div className="w-full h-full p-3">
            <div className="h-[70%] w-full  relative overflow-hidden">
              <Image 
                src={data.image}
                layout='fill'
                alt={data.name}
                objectFit="cover"
                className='h-full rounded-lg'
              />
            </div>
            <div className="text-neutral-900 font-bold text-2xl pt-4">{data.name}</div>
            <div className="text-neutral-900 font-normal text-lg">{data.title}</div>
            <div className="text-neutral-900 text-lg font-light pt-2">{data.description}</div>
          </div>
        </motion.div>
    </Backdrop>
  )
}

export default CrewModal