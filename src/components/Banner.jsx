"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 50
            }}
        >

            <div className='pt-48 pb-48' style={{backgroundImage:`url('bg.jpg')`}}>
                <div className='text-center text-4xl text-white mt-2'>¡Bienvenido a mi espacio digital!</div>
                <div className='text-center text-4xl text-white mt-2'>Mi nombre es Yonathan</div>
                <div className='text-center text-4xl text-white mt-2'>Soy Desarrollador Web Full Stack</div>
            </div>


        </motion.div>
    )
}

export default Banner