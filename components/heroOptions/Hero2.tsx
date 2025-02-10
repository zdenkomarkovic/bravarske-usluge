"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BackgroundPaths = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="flex flex-col  container mx-auto px-4 md:px-6 mr-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 text-blue-600 ">
            Bravarske usluge
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Otkrijte vise
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default BackgroundPaths;
