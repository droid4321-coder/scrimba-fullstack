import type { JSX } from "react/jsx-runtime"

export default function AboutPage(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto p-5"> 
      <main className="flex flex-row justify-between items-center gap-10 pb-16">
        <img src="/hero-image-square.png" alt="hero image in square" className="w-1/2 object-cover" />
        <div className="w-1/2">
          <p className="pb-5 tracking-wider text-sm font-semibold text-gray-500">ABOUT PRINTFORGE</p>
          <h1 className="font-bold text-5xl pb-10">Empowering makers worldwide</h1>
          <p className="text-2xl text-gray-900 pb-5">
            Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
          </p>
          <p className="text-gray-900 text-2xl">
            Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing
          </p>
        </div>
      </main>

      {/* Grid section with centered dividers */}
      <section className="flex flex-row justify-between items-center divide-x divide-solid divide-gray-900 border-t border-b border-gray-200 py-10">
        
        {/* Card 1 */}
        <div className="flex-1 w-full flex flex-col items-center text-center px-6">
          <div className="flex flex-row justify-center items-center gap-4 pb-3">
            <img src="/layers.svg" alt="layers" className="w-8 h-8" />
            <h3 className="text-2xl font-bold">100K+ Models</h3>
          </div>
          <p className="text-gray-600 max-w-xs">Access our vast library of community-made 3D models.</p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 w-full flex flex-col items-center text-center px-6">
          <div className="flex flex-row justify-center items-center gap-4 pb-3">
            <img src="/globe.svg" alt="globe" className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Active Community</h3>
          </div>
          <p className="text-gray-600 max-w-xs">Join thousands of makers who share tips and provide feedback.</p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 w-full flex flex-col items-center text-center px-6">
          <div className="flex flex-row justify-center items-center gap-4 pb-3">
            <img src="/flag.svg" alt="flag" className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Free to Use</h3>
          </div>
          <p className="text-gray-600 max-w-xs">Most models are free to download. Optional premium features available to PRO subscribers.</p>
        </div>

      </section>
    </div>
  )
}
