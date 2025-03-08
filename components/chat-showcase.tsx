"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  typing?: boolean
}

const initialMessages: Message[] = [
  { id: 1, text: "Hi there! I'm your AI Career Navigator. How can I help you today?", sender: "ai" },
]

const exampleQuestions = [
  "What skills should I focus on for AI/ML?",
  "How can I transition from marketing to product management?",
  "What certifications would boost my resume?",
  "How do I prepare for a senior role interview?",
]

export default function ChatShowcase() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateTyping = (text: string) => {
    setIsTyping(true)

    const newMessage: Message = {
      id: messages.length + 2,
      text: "",
      sender: "ai",
      typing: true,
    }

    setMessages((prev) => [...prev, newMessage])

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === newMessage.id ? { ...msg, text: text.substring(0, i + 1) } : msg)),
        )
        i++
      } else {
        clearInterval(typingInterval)
        setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, typing: false } : msg)))
        setIsTyping(false)
      }
    }, 30)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response based on the question
    setTimeout(() => {
      let response = ""

      if (inputValue.toLowerCase().includes("ai") || inputValue.toLowerCase().includes("ml")) {
        response =
          "Based on your resume, mastering Python, TensorFlow, and NLP techniques will be a great next step. I also recommend focusing on data structures and algorithms to build a strong foundation."
      } else if (inputValue.toLowerCase().includes("marketing") && inputValue.toLowerCase().includes("product")) {
        response =
          "To transition from marketing to product management, I'd recommend highlighting your user research skills and taking a product analytics course. Your experience in understanding customer needs is valuable for product roles."
      } else if (inputValue.toLowerCase().includes("certification")) {
        response =
          "Looking at your background, I'd recommend the AWS Solutions Architect certification or the Google Project Management certification. Both would complement your existing skills nicely."
      } else if (inputValue.toLowerCase().includes("interview")) {
        response =
          "For senior role interviews, prepare to discuss your leadership experience and how you've driven measurable results. Based on your resume, I'd focus on highlighting your team management and strategic planning skills."
      } else {
        response =
          "Thanks for your question! Based on your resume, I'd recommend focusing on expanding your technical skills while leveraging your strong communication abilities. Would you like more specific advice on any particular area?"
      }

      simulateTyping(response)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleExampleClick = (question: string) => {
    setInputValue(question)
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-indigo-950/50 z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Chat Showcase</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Experience how our AI provides personalized career guidance based on your resume.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold">Ask About Your Career</h3>
            <p className="text-slate-300">
              Our AI analyzes your resume and provides tailored advice on skills, career paths, and opportunities that
              match your profile.
            </p>

            <div className="space-y-3 mt-8">
              <h4 className="font-medium text-slate-200">Try asking about:</h4>
              <ul className="space-y-3">
                {exampleQuestions.map((question, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <button
                      onClick={() => handleExampleClick(question)}
                      className="text-left w-full p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      {question}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden h-[500px] flex flex-col">
              <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center">
                <div className="h-3 w-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></div>
                <h3 className="font-medium">AI Career Navigator</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-purple-600 text-white rounded-tr-none"
                            : "bg-slate-800 text-slate-200 rounded-tl-none"
                        }`}
                      >
                        <p>{message.text}</p>
                        {message.typing && (
                          <div className="mt-1 flex space-x-1">
                            <div
                              className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-slate-700 bg-slate-800/30">
                <div className="flex items-center space-x-2">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about your career..."
                    className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none h-12 max-h-32"
                    rows={1}
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={inputValue.trim() === "" || isTyping}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 h-12 w-12 rounded-lg flex items-center justify-center"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

