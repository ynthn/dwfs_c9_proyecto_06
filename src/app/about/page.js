"use client"
import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from 'framer-motion'

const Page = () => {



  const list = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "JAVASCRIPT",
    },
    {
      title: "REACT",
    },
    {
      title: "NEXT JS",
    },
    {
      title: "NODE JS",
    },
    {
      title: "EXPRESS JS",
    },
    {
      title: "MONGO DB",
    },
    {
      title: "PHP",
    },
    {
      title: "LARAVEL",
    },
    {
      title: "CODEIGNITER",
    },
    {
      title: "TAILWIND CSS",
    },
    {
      title: "BOOTSTRAP CSS",
    },
    {
      title: "GIT",
    },
    {
      title: "GITHUB",
    },
  ];


  return (



    <div className='container'>
      <div class="bg-white py-24 sm:py-32 md:columns-2 sm:columns-1">


        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >

          <div class="mx-auto max-w-7xl px-6 mb-20 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre mi</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">¡Bienvenido a mi espacio digital! Soy un apasionado Desarrollador Web Full Stack. Mi enfoque abarca tanto el desarrollo del lado del cliente como del servidor, lo que me permite diseñar y construir soluciones web completas y efectivas.</p>
            </div>
          </div>

        </motion.div>

        <div className='break-before-column'></div>



        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >

        <div class="mx-auto max-w-7xl px-6 lg:px-8">

          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis Habilidades</p>
          </div>


          <div className="gap-5 mt-10 grid grid-flow-row-dense grid-cols-3">
            {list.map((item, index) => (
              <Card shadow="sm" key={index} >
                <CardBody className="overflow-visible pt-2 pr-4 pb-2 pl-4 text-center hover:bg-emerald-500">
                  <b>{item.title}</b>
                </CardBody>
              </Card>
            ))}
          </div>

        </div>
      </motion.div>


    </div>
    </div >
  )
}

export default Page