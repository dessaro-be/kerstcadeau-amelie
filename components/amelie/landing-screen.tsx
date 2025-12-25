"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="animate-fade-in flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="flex flex-col items-center gap-6 pt-8 pb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Amélie
            </h1>
            <p className="text-muted-foreground text-lg">
              Jouw perfecte dag begint hier
            </p>
          </div>

          <p className="text-muted-foreground max-w-sm">
            Beantwoord een paar vragen en ontdek je gepersonaliseerde ervaring.
            Klaar voor een onvergetelijk avontuur?
          </p>

          <Button size="lg" onClick={onStart} className="mt-4 px-8">
            Start jouw avontuur
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
