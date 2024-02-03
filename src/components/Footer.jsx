"use client"
import React from 'react'
import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-footer p-12'>
            <div className='text-center text-white mb-8'>
                <a href='https://www.linkedin.com/in/yonathan-mu%C3%B1oz-bravo-a2a1b064/' target='_blank'>
                    <FaLinkedin className='inline-block mr-4' style={{fontSize: '30px'}} />
                </a>
                <a href='https://github.com/ynthn' target='_blank'>
                    <FaGithub className='inline-block' style={{fontSize: '30px'}} />
                </a>
            </div>
            <div className='text-center text-white'>
                <FaCopyright className='inline-block' /> Copyright 2024. Hecha por Yonathan Muñoz Bravo
            </div>
        </div>
    )
}

export default Footer