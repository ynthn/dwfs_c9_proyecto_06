"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Inicio",
    "Sobre Mi",
    "Proyectos",
    "Contacto"
  ];



  return (
    <header className="header">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-header">
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image src="/logo.png" width={200} height={50} alt="Yonathan Muñoz Bravo"></Image>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" href="/" className="text-white hover:text-cyan-300">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground"  href="about" className="text-white hover:text-cyan-300">
              Sobre Mi
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="projects" className="text-white hover:text-cyan-300">
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="contact" className="text-white hover:text-cyan-300">
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
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  )
}

export default NavBar