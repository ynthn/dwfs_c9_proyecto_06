"use client"
import React from 'react'
import { FaCopyright, FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='contact' className='bg-footer px-12 py-20'>
            <div className='text-center text-white mb-8'>
                <div>Envíame un correo electrónico a <FaRegEnvelope className='inline-block' /> <a href='mailto:yonathan.munoz.bravo@gmail.com'>yonathan.munoz.bravo@gmail.com</a> y estaré encantado de responder a todas tus preguntas. </div>
            </div>
            <div className='text-center text-white mb-8'>
                <a href='https://www.linkedin.com/in/yonathan-mu%C3%B1oz-bravo-a2a1b064/' target='_blank' className='hover:text-emerald-500'>
                    <FaLinkedin className='inline-block mr-4' style={{ fontSize: '30px' }} />
                </a>
                <a href='https://github.com/ynthn' target='_blank' className='hover:text-emerald-500'>
                    <FaGithub className='inline-block' style={{ fontSize: '30px' }} />
                </a>
            </div>
            <div className='text-center text-white'>
                <FaCopyright className='inline-block' /> Copyright 2024. Hecha por Yonathan Muñoz Bravo
            </div>
        </div>
    )
}

export default Footer