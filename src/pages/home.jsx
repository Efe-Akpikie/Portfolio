import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader.jsx"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"

import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"
//import Ipod from "../components/ipod.jsx"
import { Typewriter } from "react-simple-typewriter"
import Earth from "../components/Earth.jsx"
import  OrbitingMoon from "../components/OrbitingMoon.jsx"

const Home = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 480});

    //const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const description = `A first year student at the University of Victoria who plans to study Computer Science
     and Mathematics with a minor in data science. I'm interested in most aspects of computer science and mathematics, especially game development and data science.`;
    return (
<section className="min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-16 pt-24 sm:pt-0" id="home">

    <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-screen-xl mx-auto h-screen ">
        {/* LEFT: Animated Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left gap-5 z-10">
          <p className="sm:text-4xl text-2xl font-bold text-white font-generalsans">
            Hi, I’m Efe <span className="waving-hand">👋</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-lg min-h-[90px] font-medium">
            <Typewriter
              words={[description]}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={0}
              delaySpeed={1000}
              loop={1}
            />
          </p>

          <a href="#about" className="mt-6">
            <Button
              name="Let's work together"
              isBeam
              containerClass="w-full sm:w-auto sm:min-w-96"
            />
          </a>
        </div>


        {/* RIGHT: 3D Canvas */}
        <div className="flex-1 w-full h-[500px] sm:h-[600px] relative">
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
                <Earth
                position={[0, -3, 0]}
                rotation={[0.3, 4.2, 0]}
                scale={3}
                />
                <OrbitingMoon earthPosition={[0, -3, 0]}/>
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>
        </div>

        </div>
    </section>
    );
};

export default Home