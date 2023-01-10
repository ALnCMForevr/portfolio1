import React from 'react';
import Image from 'next/image';
import AboutPic from '../images/aboutPic.jpg';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
              initial={{
                  y: -100,
                  opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src="" alt="Logo"
          />

          <div className="px-0 md:px-10">
              <h4 className="text-4xl font-light">CEO of Icaurus</h4>
              <p className="font-bold text-2xl mt-1">Icaurus</p>
              <div className="flex space-x-2 my-2">
                  <img className="h-10 w-10" src="" alt="tech" />
                  <img className="h-10 w-10" src="" alt="tech" />
                  <img className="h-10 w-10" src="" alt="tech"/>
                  <h5>Tech Used</h5>
              </div>
              <p className="uppercase py-5 text-gray-500">Started work ... -Ended...</p>

              <ul className="list-disc space-y-4 ml-5 text-lg">
                  <li>Under the sky, while we lie here in the dark. You told me you dreamnt, of life where it's you and me</li>
                  <li>Under the sky, while we lie here in the dark. You told me you dreamnt, of life where it's you and me</li>
                  <li>Under the sky, while we lie here in the dark. You told me you dreamnt, of life where it's you and me</li>
                  <li>Under the sky, while we lie here in the dark. You told me you dreamnt, of life where it's you and me</li>
                  <li>Under the sky, while we lie here in the dark. You told me you dreamnt, of life where it's you and me</li>
              </ul>
          </div>
    </article>
  )
}

export default ExperienceCard