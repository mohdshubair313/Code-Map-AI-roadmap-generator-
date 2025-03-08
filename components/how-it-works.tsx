"use client"
import { motion } from "framer-motion"
import { FileUp, Map, MessageSquareText } from "lucide-react"

const steps = [
  {
    icon: <FileUp className="h-10 w-10" />,
    title: "Upload Resume 📄",
    description: "AI scans your skills, experience, and interests.",
    color: "from-purple-500 to-indigo-600",
    delay: 0.1,
  },
  {
    icon: <Map className="h-10 w-10" />,
    title: "Get Your Roadmap 🛤️",
    description: "A structured career path tailored just for you.",
    color: "from-cyan-500 to-blue-600",
    delay: 0.3,
  },
  {
    icon: <MessageSquareText className="h-10 w-10" />,
    title: "Chat with AI 🤖",
    description: "Ask career-related questions, refine goals, and get actionable advice.",
    color: "from-indigo-500 to-purple-600",
    delay: 0.5,
  },
]

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works - The AI Magic</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our AI-powered system transforms your resume into a personalized career roadmap in just three simple steps.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
              <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 h-20 w-20 bg-gradient-to-r ${step.color} rounded-bl-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                <div
                  className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${step.color} mb-6`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

