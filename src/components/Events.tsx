"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  FileText,
  Code2,
  Bug,
  BrainCircuit,
  Sparkles,
  ArrowRight,
} from "lucide-react"

const technicalEvents = [
  {
    title: "Project Expo",
    desc: "Showcase innovative hardware and software solutions to industry experts.",
    icon: Rocket,
    tags: ["Innovation", "Hardware", "Software"],
    details:
      "A grand stage for innovators. Present IoT systems, AI tools, or next-gen hardware concepts. Projects are evaluated based on technical depth, real-world impact, and scalability.",
  },
  {
    title: "Paperix",
    desc: "Present research papers on emerging technologies and computing trends.",
    icon: FileText,
    tags: ["Research", "Presentation"],
    details:
      "Submit and present original research work across domains such as AI, Cybersecurity, Blockchain, and Quantum Computing. Judges evaluate novelty, clarity, and technical depth.",
  },
  {
    title: "Web Craft",
    desc: "Design and develop responsive web applications under time pressure.",
    icon: Code2,
    tags: ["Frontend", "Backend", "UI/UX"],
    details:
      "Participants build a functional web solution based on a surprise theme. Evaluation includes UI/UX design, code efficiency, performance, and feature completeness.",
  },
  {
    title: "Bug Bounding",
    desc: "Identify vulnerabilities and fix issues in complex software systems.",
    icon: Bug,
    tags: ["Debugging", "Security"],
    details:
      "Analyze real codebases and uncover hidden bugs, security flaws, and performance issues. Speed and accuracy determine the winners.",
  },
  {
    title: "Quiz War",
    desc: "Compete in an intense technical quiz across computing domains.",
    icon: BrainCircuit,
    tags: ["Knowledge", "Speed"],
    details:
      "Test your technical knowledge through multiple rounds including rapid fire, buzzer challenges, and logical problem solving.",
  },
  {
    title: "Prompt Battle",
    desc: "Use Generative AI tools to craft powerful prompts and creative outputs.",
    icon: Sparkles,
    tags: ["GenAI", "Creativity"],
    details:
      "Participants compete by generating the best AI outputs using advanced prompting strategies for text and images.",
  },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const googleFormUrl =
    "https://docs.google.com/forms/d/1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4/viewform"

  return (
    <section id="events" className="py-16 md:py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="border-accent/30 text-accent font-headline mb-4 uppercase tracking-[0.2em] px-4 py-1 text-xs"
          >
            Elite Competitions
          </Badge>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-gradient mb-6 leading-tight">
            TECHNICAL ARENA
          </h2>

          <p className="text-foreground/70 text-base md:text-xl leading-relaxed">
            Push your limits across six specialized domains where knowledge
            meets execution in the ultimate test of skill.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalEvents.map((event) => (
            <div
              key={event.title}
              onClick={() => setSelectedEvent(event)}
              className="glass p-6 md:p-8 rounded-2xl md:rounded-[2rem] group
              hover:border-accent border-transparent transition-all duration-500
              cursor-pointer flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="p-4 rounded-xl bg-white/5 group-hover:bg-accent/10
                    transition-colors border border-white/5 group-hover:border-accent/20"
                  >
                    <event.icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase"
                  >
                    TECHNICAL
                  </Badge>
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-headline mb-3
                  group-hover:text-accent transition-all duration-300
                  group-hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-headline text-accent/80
                      uppercase tracking-widest bg-accent/10 px-2 py-1
                      rounded-md border border-accent/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="pt-6 flex items-center gap-2 text-accent
                  font-headline text-xs tracking-widest opacity-0
                  group-hover:opacity-100 transition-all transform
                  translate-y-2 group-hover:translate-y-0 uppercase"
                >
                  View Rules & Reg
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="glass border-accent/20 md:max-w-2xl bg-background/95 backdrop-blur-2xl p-0 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12 space-y-8 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  {selectedEvent?.icon && (
                    <selectedEvent.icon className="w-10 h-10 text-accent" />
                  )}
                </div>

                <div>
                  <DialogTitle className="text-3xl md:text-4xl font-headline">
                    {selectedEvent?.title}
                  </DialogTitle>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedEvent?.tags?.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/10 text-xs uppercase text-foreground/60"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <DialogDescription className="text-foreground/70 text-lg leading-relaxed">
                {selectedEvent?.details}
              </DialogDescription>
            </DialogHeader>

            {/* Prize + Eligibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="font-headline text-xs text-foreground/40 uppercase tracking-[0.2em]">
                  FIRST PRIZE
                </span>
                <div className="font-headline text-2xl text-accent mt-2">
                  TROPHY
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="font-headline text-xs text-foreground/40 uppercase tracking-[0.2em]">
                  ELIGIBILITY
                </span>
                <div className="font-headline text-lg text-foreground mt-2">
                  UG / PG Students
                </div>
              </div>
            </div>

            {/* Register Button */}
            <Button
              asChild
              className="w-full h-14 bg-accent text-background
              font-black font-headline tracking-widest uppercase
              hover:bg-accent/80 transition-all rounded-xl text-lg"
            >
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                REGISTER NOW
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

