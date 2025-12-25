"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { WizardAnswers } from "@/lib/wizard-data";

interface VoucherDisplayProps {
  answers: WizardAnswers;
  onRestart: () => void;
}

const LABELS: Record<keyof WizardAnswers, string> = {
  vibe: "Vibe",
  location: "Bestemming",
  activity: "Activiteit",
  dinner: "Diner",
};

const VALUE_DISPLAY: Record<string, string> = {
  // Vibes
  stad: "Stad",
  natuur: "Natuur",
  culinair: "Culinair",
  // Locations
  parijs: "Parijs",
  antwerpen: "Antwerpen",
  kopenhagen: "Kopenhagen",
  maastricht: "Maastricht",
  // Activities
  spa: "Spa",
  museum: "Museum",
  theater: "Theater",
  shoppen: "Shoppen",
  // Dinner
  romantic: "Romantisch",
  casual: "Casual",
  "fine-dining": "Fine Dining",
  "street-food": "Street Food",
};

export function VoucherDisplay({ answers, onRestart }: VoucherDisplayProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-scale-in flex min-h-screen items-center justify-center p-4">
      <Card className="voucher-print w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Amélie&apos;s Avontuur
          </CardTitle>
          <CardDescription className="text-base">
            Speciaal voor jou samengesteld
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            {(Object.keys(LABELS) as Array<keyof WizardAnswers>).map((key) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-muted-foreground">{LABELS[key]}</span>
                <span className="font-medium">
                  {answers[key] ? VALUE_DISPLAY[answers[key]!] || answers[key] : "-"}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          <p className="text-center text-muted-foreground italic">
            &quot;Geniet van jouw perfecte dag!&quot;
          </p>
        </CardContent>

        <CardFooter className="no-print flex flex-col gap-3 pt-2">
          <Button onClick={handlePrint} className="w-full">
            Voucher Printen / Downloaden
          </Button>
          <Button variant="outline" onClick={onRestart} className="w-full">
            Opnieuw beginnen
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
