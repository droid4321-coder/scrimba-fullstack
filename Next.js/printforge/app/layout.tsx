import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Image from "next/image";

/* This variable calls the font loaded, and sets some settings, like the subset to latin, the display to swap (load fallback font first then swap it to main font, good for slower connections), 

We do not need to specifty weights so we will do it in CSS
*/
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
})

//we include the weights prop here because this is not a variable font.
const MontserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang="en"
    >
      {/* By adding the classname to the body and putting className on the variable, we tell Next to put this font everywhere*/}
      <body className={`${AlbertSans.className} ${MontserratAlternates.variable}`}>
      {/* HEADER NAVBAR */}
      <header>
        <nav className="flex flex-row items-center justify-between p-4 bg-white shadow-md">
            {/* Left Side: Logo */}
            <Image
              src="/printforge-logo.svg"
              alt="printforge logo"
              width={300}
              height={63}
              className="w-50 h-auto hidden md:block"
            />

            <Image
              src="/printforge-logo-icon.svg"
              alt="printforge logo"
              width={174}
              height={150}
              className="w-10 h-auto block md:hidden"
            />
          {/* Right Side: Links */}
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">3D Models</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
            </li>
          </ul>
        </nav>
      </header>
        {children}
      </body>
    </html>
  );
}
