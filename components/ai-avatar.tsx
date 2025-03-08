"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AiAvatar() {
  const [animationState, setAnimationState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64">
          {/* Orbiting circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full border-2 border-cyan-500/30"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10 + i * 5,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}

          {/* Pulsing core */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full"
            style={{
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px 0px rgba(34, 211, 238, 0.5)",
                "0 0 30px 10px rgba(34, 211, 238, 0.7)",
                "0 0 20px 0px rgba(34, 211, 238, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* AI Face elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 flex items-center justify-center"
            style={{
              x: "-50%",
              y: "-50%",
            }}
          >
            {/* Eyes */}
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-[35%] left-[30%] w-3 h-6 bg-white rounded-full"
                animate={{
                  height: animationState === 1 ? "12px" : "24px",
                  opacity: animationState === 3 ? 0.5 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute top-[35%] right-[30%] w-3 h-6 bg-white rounded-full"
                animate={{
                  height: animationState === 1 ? "12px" : "24px",
                  opacity: animationState === 3 ? 0.5 : 1,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Mouth */}
              <motion.div
                className="absolute bottom-[30%] left-1/2 bg-white rounded-full"
                style={{
                  x: "-50%",
                }}
                animate={{
                  width: animationState === 2 ? "40px" : "20px",
                  height: animationState === 2 ? "20px" : "3px",
                  borderRadius: animationState === 2 ? "10px" : "2px",
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/20 backdrop-blur-md rounded-xl">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 bg-cyan-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-cyan-300 font-medium">AI Assistant Online</p>
        </div>
      </div>
    </div>
  )
}

