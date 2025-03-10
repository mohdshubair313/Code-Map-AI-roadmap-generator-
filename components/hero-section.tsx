"use client"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import AiAvatar from "./ai-avatar"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your AI Career Navigator – Unlock Your Future!
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Upload your resume and let AI craft your personalized career roadmap while chatting with your virtual
              mentor.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleUploadClick}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "100%" : "-100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <Upload className="mr-2 h-5 w-5" /> Upload Resume & Get Roadmap
                <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" />
              </Button>

              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat with AI Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[400px] md:h-[500px] w-full relative"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <AiAvatar />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

