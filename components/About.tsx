import React from 'react';
import { motion } from "framer-motion";
import AboutPic from "../images/aboutPic.jpg";
import Image from 'next/image';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true
        }}
        src="images\aboutPic.jpg"
        alt="Awesome picture of me"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background.
        </h4>
        <p className="text-base">
          Under the sky, while we lie here in the dark
          You told me you dreamt, of a life where it’s you and me
          Into our hearts, where we laid our deepest truths 
          We raised our hands, made a pledge that we’d love for life
          But nothing lasts forever
          That’s the bitter truth
          You led your lies far deeper
          Than you could’ve prove 
          Then you ran away, left me here in pain, and I don’t know what to say
          So I’ll spill the truth, I admit it true, that I can’t get over you
        </p>
      </div>
    </motion.div>
  )
}

export default About