import { Inter } from "next/font/google";
import "./globals.css";
import NavBarMenu from "@/components/NavBarMenu";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Yonathan Muñoz Bravo",
  description: "Habilidades y conocimientos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>


        <Providers>
          <NavBarMenu></NavBarMenu>
          {children}
          <Footer></Footer>
        </Providers>


      </body>
    </html>
  );
}
