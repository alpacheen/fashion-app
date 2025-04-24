import React from 'react'
import { FooterSection, LogoContainer, FooterComponent } from '../styles/footer';
import Logo from '../assets/star_white_48dp.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <FooterSection>
        <LogoContainer>
<img src={Logo} alt="Logo" className="w-20 h-auto overflow-visible" />
<h3 className='text-3xl font-["Kaushan_Script"]'>Vibe Studios</h3>
        </LogoContainer>
        <FooterComponent
        initial={{y: "30px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration: 1.3,
             
        }}>
            <ul className='list-none flex justify-between items-center flex-wrap m-8 mt-16
            py-0
            px-4
            border-t-2
            border-[#faebd7]
            border-b-2
            border-[#faebd7]
  [&>li]:p-8
  [&>li]:text-xl
  [&>li]:uppercase
  [&>li]:font-mono
  [&>li]:cursor-pointer
  [&>li]:transition-all
  [&>li]:duration-300
    [&>li]:ease-in-out
  [&>li:hover]:scale-110'>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#shop">shop</a></li>
                <li><a href="#collections">new collection</a></li>
                <li>
                    <a href="http://google.com" target='_blank' rel='noreferrer'>look book</a>
                </li>
                <li>
                    <a href="http://google.com" target='_blank' rel='noreferrer'>reviews</a>
                </li>
                
            </ul>
        </FooterComponent>
        </FooterSection>
  )
}

export default Footer;

