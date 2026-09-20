import { JSX } from "react/jsx-runtime";
import Image from "next/image";

//ye ye AI i know lol

export default function Home() : JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      {/* 🚀 flex-col for stacked on mobile, md:flex-row to put them side-by-side on desktop */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Side: Text Content */}
        {/* w-full on mobile, md:w-1/2 occupies exactly half the width on desktop */}
        <section className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover what&apos;s possible with 3D printing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Join our community of creators and explore a vast library of user-submitted models.
          </p>
          <div>
            {/* A beautifully styled flex button */}
            <button className="border-2 border-gray-900 px-6 py-3 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 tracking-wide text-sm">
              BROWSE MODELS
            </button>
          </div>
        </section>

        {/* Right Side: Image Box Placeholder */}
        {/* w-full on mobile, md:w-1/2 matches the text side perfectly */}
        <section className="w-full md:w-1/2 flex justify-center items-center h-80 md:h-112.5">
          {/* <img src="/hero-image.png" alt="home image" /> */}
          <Image
            src="/hero-image.png"
            width={1206}
            height={1201}
            alt="hero image"
          />
        </section>

      </main>
    </div>
  );
}
