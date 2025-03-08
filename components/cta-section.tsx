"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function CtaSection() {
  const [isHovered, setIsHovered] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-slate-900/90 to-indigo-900/90 backdrop-blur-lg border border-slate-800/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Your Journey Today
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Upload your resume now and let our AI create a personalized career roadmap that will guide you to success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 text-lg py-6 px-8"
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
              <Upload className="mr-2 h-5 w-5" /> Get Your Roadmap Now
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 text-lg py-6 px-8"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-slate-400 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Join thousands of professionals who have accelerated their careers with our AI-powered guidance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

