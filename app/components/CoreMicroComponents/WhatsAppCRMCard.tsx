"use client";
import React from "react";
import { motion } from "framer-motion";

export const WhatsAppCRMCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* Canvas */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

        <div className="relative w-[200px] h-[180px] flex items-center justify-center pt-4">
          <div className="w-full h-[150px] bg-white border border-zinc-200 shadow-sm rounded-md flex flex-col overflow-hidden relative z-20">
            <div className="h-7 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg
                    className="w-2 h-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                </div>
                <div className="h-1.5 w-16 bg-zinc-200 rounded-full"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
              </div>
            </div>

            <div className="flex-1 p-2 flex flex-col justify-end gap-2.5 pb-3">
              <motion.div
                animate={{
                  y: [15, 0, 0, 0, -10, -10],
                  opacity: [0, 1, 1, 1, 0, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.1, 0.7, 0.85, 0.95, 1],
                  ease: "easeOut",
                }}
                className="self-start flex flex-col gap-1.5 max-w-[85%]"
              >
                <div className="bg-[#dcfce7] border border-[#bbf7d0] text-[#166534] px-2 py-1.5 rounded-md rounded-tl-none text-[8px] font-medium shadow-sm">
                  Hi, I need a quote for 10 users.
                </div>
                <motion.div
                  animate={{
                    scale: [0, 0, 1, 1, 1, 1],
                    opacity: [0, 0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.85, 0.95, 1],
                    ease: "backOut",
                  }}
                  className="flex gap-1 origin-top-left"
                >
                  <span className="bg-orange-50 text-orange-600 border border-orange-200 text-[6px] px-1.5 py-0.5 rounded-[3px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                    <svg
                      className="w-1.5 h-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-1.245-1.14-1.85-.16-.605-.12-1.218.06-1.85.18-.632.483-1.282.88-1.921a1 1 0 00-.355-1.121v.001zM7 11a5 5 0 1110 0c0 1.25-.452 2.39-1.201 3.264a2.5 2.5 0 01-3.666-.098A4.953 4.953 0 0110 12.5a4.953 4.953 0 01-1.633 1.666 2.5 2.5 0 01-3.666.098A4.985 4.985 0 017 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    High Intent
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ opacity: [0, 0, 0, 1, 0, 0, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.1, 0.35, 0.4, 0.5, 0.6, 1],
                }}
                className="self-end flex items-center gap-0.5 bg-zinc-100 border border-zinc-200 px-1.5 py-1 rounded-md rounded-tr-none mr-4"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  className="w-1 h-1 bg-zinc-400 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                  className="w-1 h-1 bg-zinc-400 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  className="w-1 h-1 bg-zinc-400 rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, 10, 10, 10, 0, 0, -10],
                  opacity: [0, 0, 0, 0, 1, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.1, 0.4, 0.5, 0.55, 0.85, 0.95],
                }}
                className="self-end flex items-end gap-1.5 max-w-[85%]"
              >
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-2 py-1.5 rounded-md rounded-tr-none text-[8px] font-medium shadow-sm">
                  Absolutely. Here is the pricing deck!
                </div>
                <div className="w-4 h-4 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[6px] font-bold shadow-sm flex-shrink-0">
                  SR
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Title and Description properly placed at the bottom */}
      <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
        WhatsApp chats made manageable
      </h3>
      <p className="font-poppins text-xs max-w-[80%] text-zinc-500 mt-1.5 tracking-wide relative z-20">
        Chat with customers on WhatsApp without switching devices.
      </p>
    </div>
  );
};
