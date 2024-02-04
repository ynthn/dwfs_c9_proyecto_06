"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavBarMenu = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  /**
   * TO SCROLL CONTACT
   */
  const scrollToContact = () => {
    scroll.scrollToBottom();
    setIsMenuOpen(false);
  };

  /**
   * CLOSED MENU MOBILE
   */
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <header className="header">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-header"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/logo.png" 
                width={200} 
                height={53} 
                alt="Yonathan Muñoz Bravo"
                priority="true"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" href="/" className="text-white hover:text-emerald-500">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="about" className="text-white hover:text-emerald-500">
              Sobre Mi
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="projects" className="text-white hover:text-emerald-500">
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" passHref={true} onClick={scrollToContact} className="text-white hover:text-emerald-500">
              Contacto
            </Link>
          </NavbarItem>


        </NavbarContent>


        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
        </NavbarContent>


        <NavbarMenu className="z-50 mt-10">
          <NavbarMenuItem>
            <Link
              color="white"
              className="w-full"
              href="/"
              size="lg"
              onClick={handleMenuItemClick}
            >
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="white"
              className="w-full"
              href="/about"
              size="lg"
              onClick={handleMenuItemClick}
            >
              Sobre Mi
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="white"
              className="w-full"
              href="/projects"
              size="lg"
              onClick={handleMenuItemClick}
            >
              Proyectos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="white"
              className="w-full"
              href="#" 
              passHref={true}
              size="lg"
              onClick={scrollToContact}
            >
              Contacto
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header >
  )
}

export default NavBarMenu