'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink, Utensils } from 'lucide-react';

export default function Registration() {
  const googleFormUrl =
    'https://docs.google.com/forms/d/1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4/viewform';

  return (
    <section id="registration" className="py-14 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <div className="glass relative overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16 rounded-2xl sm:rounded-[2.5rem] border border-accent/20">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 blur-[80px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[80px] rounded-full" />

          <div className="relative z-10 mb-8 md:mb-10">
            <h2
              className="font-black font-headline text-gradient uppercase leading-tight
            text-[clamp(2rem,5vw,4rem)] mb-4 md:mb-6"
            >
              JOIN THE ARENA
            </h2>

            <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to showcase your technical prowess? Register now via our
              official Google Form to secure your participation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-accent font-headline tracking-widest text-xs sm:text-sm uppercase mb-8">
              <Utensils className="w-4 h-4" />
              Lunch will be provided for all participants
            </div>
          </div>

          {/* Button */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <Button
              asChild
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] md:min-h-[64px]
              px-6 sm:px-10 md:px-12
              text-sm sm:text-lg md:text-xl
              font-black font-headline tracking-[0.12em]
              bg-accent hover:bg-accent/80
              text-background
              rounded-xl md:rounded-2xl
              neon-glow-cyan
              transition-all duration-300
              hover:scale-[1.04]
              flex items-center justify-center gap-3"
            >
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                REGISTER ON GOOGLE FORMS
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>

            <p className="text-foreground/40 text-[11px] sm:text-xs font-headline tracking-widest uppercase">
              Limited slots available. Register before March 20, 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
