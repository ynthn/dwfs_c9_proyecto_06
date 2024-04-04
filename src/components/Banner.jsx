"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >

            <video src='banner.mp4' className='banner-video' autoPlay muted loop></video>

            <div className='pt-56 pb-56'>
                <div className='text-center md:text-4xl sm:text-3xl text-white mt-2'>¡Bienvenido a mi espacio digital!</div>
                <div className='text-center md:text-4xl sm:text-3xl text-white mt-2'>Mi nombre es Yonathan</div>
                <div className='text-center md:text-4xl sm:text-3xl text-white mt-2'>Soy Desarrollador Web Full Stack</div>
            </div>


        </motion.div>
    )
}

export default Banner