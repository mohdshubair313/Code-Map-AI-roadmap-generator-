import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('@/components/hero-section'))
const HowItWorks = dynamic(() => import('@/components/how-it-works'))
const ChatShowcase = dynamic(() => import('@/components/chat-showcase'))
const Testimonials = dynamic(() => import('@/components/testimonials'))
const CtaSection = dynamic(() => import('@/components/cta-section'))

export const metadata = {
  title: "AI Roadmap Generator - Learn AI Step-by-Step",
  description:
    "Code Map AI helps developers create AI roadmaps and master AI technologies with structured guidance.",
  openGraph: {
    title: "AI Roadmap Generator - Learn AI Step-by-Step",
    description:
      "Code Map AI helps developers create AI roadmaps and master AI technologies with structured guidance.",
    // images: ["https://yourwebsite.com/images/home-og.png"],
  },
};


export default function Home() {
  return (
    <main className="radial-gradient(circle, rgba(215,215,219,1) 0%, rgba(201,204,213,1) 6%, rgba(201,200,217,1) 12%, rgba(201,206,219,1) 19%, rgba(209,209,235,1) 31%, rgba(187,187,215,1) 39%, rgba(200,199,207,1) 50%, rgba(184,194,222,1) 57%, rgba(202,201,213,1) 61%, rgba(230,230,246,1) 65%, rgba(177,190,222,1) 77%, rgba(202,208,223,1) 86%, rgba(217,217,230,1) 92%, rgba(238,240,242,1) 100%, rgba(0,212,255,0.5046393557422969) 100%);">
      <HeroSection />
      <HowItWorks />
      <ChatShowcase />
      <Testimonials />
      <CtaSection />
    </main>
  )
}


// <div className="relative h-screen w-full bg-gradient-to-r from-blue-900 via-black to-gray-900">
//   <div className="absolute inset-0 bg-stars-pattern bg-cover opacity-50"></div>
//   <h1 className="text-white text-4xl text-center mt-20">Hello, Beautiful Background!</h1>
// </div>
