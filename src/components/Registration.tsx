
"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Utensils } from "lucide-react"

export default function Registration() {
  const googleFormUrl = "https://www.google.com/url?q=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4%2Fedit%3Fusp%3Dsharing_eil_se_dm%26ts%3D69a6b308&source=gmail&ust=1772772623658000&usg=AOvVaw06xDHGFj-W_xTf_H2fHc2v";

  return (
    <section id="registration" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <div className="glass p-8 sm:p-12 md:p-20 rounded-2xl sm:rounded-[3.5rem] relative overflow-hidden border-accent/20">
          <div className="absolute -top-12 sm:-top-24 -right-12 sm:-right-24 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 blur-[80px] sm:blur-[100px] rounded-full" />
          <div className="absolute -bottom-12 sm:-bottom-24 -left-12 sm:-left-24 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[80px] sm:blur-[100px] rounded-full" />
          
          <div className="relative z-10 mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-gradient mb-4 md:mb-6 uppercase leading-tight">JOIN THE ARENA</h2>
            <p className="text-foreground/60 text-base md:text-xl max-w-2xl mx-auto mb-8">
              Ready to showcase your technical prowess? Register now via our official Google Form to secure your participation.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent font-headline tracking-widest text-xs md:text-sm uppercase mb-10">
              <Utensils className="w-4 h-4" /> LUNCH WILL BE PROVIDED FOR ALL PARTICIPANTS
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <Button 
              asChild
              className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-16 text-lg md:text-2xl font-black font-headline tracking-[0.2em] bg-accent hover:bg-accent/80 text-background rounded-2xl md:rounded-3xl neon-glow-cyan transform hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                REGISTER ON GOOGLE FORMS <ExternalLink className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </Button>
            <p className="text-foreground/40 text-[10px] md:text-xs font-headline tracking-widest uppercase">
              Limited slots available. Register before March 20, 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
