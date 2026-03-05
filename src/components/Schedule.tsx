"use client"

const timeline = [
  { time: "09:00 AM", title: "Inauguration", desc: "Welcome address and traditional lighting of the lamp at FX Main Auditorium." },
  { time: "10:30 AM", title: "Technical Arena Round 1", desc: "Coding contests, paper presentations, and initial project demonstrations begin." },
  { time: "01:00 PM", title: "Networking Lunch", desc: "Fuel up and interact with peers, faculty, and industry experts." },
  { time: "02:00 PM", title: "Event Finales", desc: "Final evaluation rounds for all technical competitions." },
  { time: "04:30 PM", title: "Valedictory & Awards", desc: "Grand prize distribution and closing ceremony." }
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl font-black font-headline text-gradient text-center mb-24">EVENT TIMELINE</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary/20 hidden md:block" />
          
          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Connector dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-accent z-10 hidden md:block shadow-[0_0_15px_rgba(0,245,255,0.8)]" />
                
                <div className="w-full md:w-1/2">
                  <div className={`glass p-8 rounded-3xl border-accent/20 transition-all hover:border-accent group ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="text-accent font-headline text-sm tracking-[0.3em] mb-2">{item.time}</div>
                    <h3 className="text-2xl font-headline mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
