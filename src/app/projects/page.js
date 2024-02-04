"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Image, Card, CardBody } from '@nextui-org/react';
import { FaLink } from "react-icons/fa6";

const pageProjects = () => {


  const list5 = [
    {
      title: "HTML",
    },
    {
      title: "REACT",
    },
    {
      title: "LOCALSTORAGE",
    },
    {
      title: "NODE.JS",
    },
    {
      title: "EXPRESSJS",
    },
    {
      title: "MONGODB",
    },
    {
      title: "PASARELA PAYPAL",
    },
  ];
  const list4 = [
    {
      title: "HTML",
    },
    {
      title: "REACT",
    },
    {
      title: "VITE",
    },
    {
      title: "FIREBASE DB",
    },
    {
      title: "NODE.JS",
    },
  ];
  const list3 = [
    {
      title: "HTML",
    },
    {
      title: "BOOTSTRAP",
    },
    {
      title: "JAVASCRIPT",
    },
    {
      title: "API DOLAR cmfchile",
    },
    {
      title: "NODE.JS",
    },
  ];
  const list2 = [
    {
      title: "HTML",
    },
    {
      title: "JAVASCRIPT",
    },
    {
      title: "LOCALSTORAGE",
    },
    {
      title: "BOOTSTRAP",
    },
  ];


  return (
    <div className='container mx-auto pb-20'>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        <div className="bg-white pt-20 pb-10 columns-1">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos</p>
              <p className="mt-6 text-lg text-gray-600">Aquí encontrará algunos de mis proyectos desarrollados</p>
            </div>
          </div>
        </div>


      </motion.div>






      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-10 md:columns-2 sm:columns-1">



          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <Image
                src="/proyecto_5.jpg"
                width={600}
                height={300}
                alt="Proyecto 05"
                priority="true"
                isZoomed
              />
            </div>
          </div>

          <div className='break-before-column'></div>

          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <h2 className='text-blue-900 text-xl mb-2'>Aplicación de eCommerce</h2>

              Construir una aplicación de eCommerce con las siguiente funcionalidades:

              <ul className='list-disc mt-2 mb-2'>
                <li>Un catálogo de productos</li>
                <li>Un carrito de compras</li>
                <li>Una pasarela de pago (puntualmente PayPal o MercadoPago, con la versión de pruebas)</li>
                <li>Autenticación (registro de usuario e inicio de sesión, a través de JWT)</li>
                <li> Autorización (zona privada donde el usuario pueda ver su perfil)</li>
              </ul>

              URL DEMO: <a href='https://friendly-rabanadas-ea40df.netlify.app/' target='_blank' className='text-blue-900'><FaLink className='inline-block' /> Ver Demo</a>


              <div className="gap-5 mt-10 grid grid-flow-row-dense grid-cols-3">
                {list5.map((item, index) => (
                  <Card shadow="sm" key={index} >
                    <CardBody className="overflow-visible pt-2 pr-4 pb-2 pl-4 text-center hover:bg-emerald-500">
                      <b>{item.title}</b>
                    </CardBody>
                  </Card>
                ))}
              </div>

            </div>
          </div>



        </div>
      </motion.div>









      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-10 md:columns-2 sm:columns-1">



          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <Image
                src="/proyecto_4.jpg"
                width={600}
                height={300}
                alt="Proyecto 05"
                priority="true"
                isZoomed
              />
            </div>
          </div>


          <div className='break-before-column'></div>


          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <h2 className='text-blue-900 text-xl mb-2'>Aplicación de Restaurante</h2>

              Construir una aplicación web para un restaurante con las siguiente funcionalidades:

              <ul className='list-disc mt-2 mb-2'>
                <li>Sección principal con la información del restaurante</li>
                <li>Formulario de contacto</li>
                <li>Datos de ubicación y contacto</li>
                <li>Componente de reservar una mesa con hora y fecha especifica</li>
                <li>Componente que incluya el menu completo del restaurante</li>
              </ul>

              URL DEMO: <a href='https://heartfelt-queijadas-72bf18.netlify.app/' target='_blank' className='text-blue-900'><FaLink className='inline-block' /> Ver Demo</a>


              <div className="gap-5 mt-10 grid grid-flow-row-dense grid-cols-3">
                {list4.map((item, index) => (
                  <Card shadow="sm" key={index} >
                    <CardBody className="overflow-visible pt-2 pr-4 pb-2 pl-4 text-center hover:bg-emerald-500">
                      <b>{item.title}</b>
                    </CardBody>
                  </Card>
                ))}
              </div>

            </div>
          </div>



        </div>
      </motion.div>









      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-10 md:columns-2 sm:columns-1">



          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <Image
                src="/proyecto_3.jpg"
                width={600}
                height={300}
                alt="Proyecto 05"
                priority="true"
                isZoomed
              />
            </div>
          </div>


          <div className='break-before-column'></div>


          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <h2 className='text-blue-900 text-xl mb-2'>Tablero de datos (Dashboard)</h2>

              Se desarrollo una aplicación que consume una API y realiza las siguiente funcionalidades:

              <ul className='list-disc mt-2 mb-2'>
                <li>Consumir API</li>
                <li>Mostrar gráfico con datos obtenidos</li>
              </ul>

              URL DEMO: <a href='https://kaleidoscopic-basbousa-8480ea.netlify.app/' target='_blank' className='text-blue-900'><FaLink className='inline-block' /> Ver Demo</a>


              <div className="gap-5 mt-10 grid grid-flow-row-dense grid-cols-3">
                {list3.map((item, index) => (
                  <Card shadow="sm" key={index} >
                    <CardBody className="overflow-visible pt-2 pr-4 pb-2 pl-4 text-center hover:bg-emerald-500">
                      <b>{item.title}</b>
                    </CardBody>
                  </Card>
                ))}
              </div>


            </div>
          </div>



        </div>
      </motion.div>







      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-10 md:columns-2 sm:columns-1">



          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <Image
                src="/proyecto_2.jpg"
                width={600}
                height={300}
                alt="Proyecto 05"
                priority="true"
                isZoomed
              />
            </div>
          </div>


          <div className='break-before-column'></div>


          <div className="mx-auto lg:text-left">
            <div className="p-4">
              <h2 className='text-blue-900 text-xl mb-2'>Aplicación CRUD</h2>

              Se desarrollo un sistema CRUD, el cual realizara las siguientes acciones:


              <ul className='list-disc mt-2 mb-2'>
                <li>Crear Tareas</li>
                <li>Editar Tareas</li>
                <li>Eliminar Tareas</li>
                <li>Leer Tareas</li>
              </ul>

              URL DEMO: <a href='https://ynthn.github.io/dwfs_c9_proyecto_02' target='_blank' className='text-blue-900'><FaLink className='inline-block' /> Ver Demo</a>


              <div className="gap-5 mt-10 grid grid-flow-row-dense grid-cols-3">
                {list2.map((item, index) => (
                  <Card shadow="sm" key={index} >
                    <CardBody className="overflow-visible pt-2 pr-4 pb-2 pl-4 text-center hover:bg-emerald-500">
                      <b>{item.title}</b>
                    </CardBody>
                  </Card>
                ))}
              </div>


            </div>
          </div>



        </div>
      </motion.div>










    </div>
  )
}

export default pageProjects