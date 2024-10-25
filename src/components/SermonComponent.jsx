import React from "react";
import { motion } from "framer-motion";


export const SermonComponent = () =>{
    return (
        <>
         <div>
        <motion.div className="flex flex-row justify-center pt-8">
          <motion.div className="p-4 bg-white border border-gray-200 rounded-sm max-w-fit">
            <div className="p-4 bg-gray-200 rounded-sm">
              <img src="/sermon.png" alt="sermon" />
            </div>
          </motion.div>
          <motion.div className="p-3 bg-white border border-gray-200 rounded-sm max-w-fit content-center">
            <motion.h2 className="text-black">Subject : Lorem ipsum</motion.h2>
            <div>
            <motion.p className="font-paragraph">
                Books : Lorem v 1 . 3
              </motion.p>
              <motion.p className="font-paragraph">
                Theme : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              </motion.p>
              <motion.div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-2 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                      />
                    </svg>
                    <span>Like</span>
                  </motion.button>
                </motion.div>
            </div>
          </motion.div>
          
        </motion.div>
      
        
      </div>
        </>
    )
}