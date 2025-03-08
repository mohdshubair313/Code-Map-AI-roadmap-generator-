"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "John D.",
    role: "Data Scientist at TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    text: "Thanks to AI Roadmap Chatbot, I landed my dream job as a Data Scientist! The personalized roadmap helped me focus on the right skills.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "UX Designer",
    image: "/placeholder.svg?height=80&width=80",
    text: "The career advice was spot-on! I transitioned from graphic design to UX in just 6 months following the AI's recommendations.",
    stars: 5,
  },
  {
    id: 3,
    name: "Michael T.",
    role: "Software Engineer",
    image: "/placeholder.svg?height=80&width=80",
    text: "I was stuck in my career until I used this tool. The AI analyzed my resume and suggested a path I hadn't considered before.",
    stars: 4,
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
    text: "The chatbot helped me identify gaps in my skill set and provided actionable steps to fill them. Now I'm leading a product team!",
    stars: 5,
  },
  {
    id: 5,
    name: "David K.",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
    text: "The AI's insights were incredibly valuable. It helped me pivot my career during a challenging time in my industry.",
    stars: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-slate-950/50 z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See how our AI Roadmap Chatbot has transformed careers and helped professionals achieve their goals.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div ref={carouselRef} className="overflow-hidden" whileTap={{ cursor: "grabbing" }}>
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-purple-600/10 to-cyan-600/10 rounded-bl-full"></div>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-purple-500">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>

                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-cyan-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-cyan-500" : "bg-slate-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 md:px-0">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:text-cyan-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:text-cyan-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

