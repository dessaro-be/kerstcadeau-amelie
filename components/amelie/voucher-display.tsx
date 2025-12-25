"use client";

import { useState } from "react";
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
import { WizardAnswers, VALUE_DISPLAY } from "@/lib/wizard-data";

interface VoucherDisplayProps {
  answers: WizardAnswers;
  onRestart: () => void;
}

const LABELS: Record<keyof WizardAnswers, { label: string; emoji: string }> = {
  vibe: { label: "Vibe", emoji: "✨" },
  location: { label: "Bestemming", emoji: "📍" },
  activity: { label: "Activiteiten", emoji: "🎯" },
  dinner: { label: "Diner", emoji: "🍽️" },
  extras: { label: "Extra's", emoji: "🎁" },
};

function formatValues(values: string[]): string {
  if (values.length === 0) return "-";
  return values.map((v) => VALUE_DISPLAY[v] || v).join(", ");
}

function generateVoucherText(answers: WizardAnswers): string {
  const lines = [
    "🎁 *Amélie's Avontuur* 🎁",
    "",
    "Speciaal voor jou samengesteld:",
    "",
  ];

  if (answers.vibe.length > 0) {
    lines.push(`✨ Vibe: ${formatValues(answers.vibe)}`);
  }
  if (answers.location.length > 0) {
    lines.push(`📍 Bestemming: ${formatValues(answers.location)}`);
  }
  if (answers.activity.length > 0) {
    lines.push(`🎯 Activiteiten: ${formatValues(answers.activity)}`);
  }
  if (answers.dinner.length > 0) {
    lines.push(`🍽️ Diner: ${formatValues(answers.dinner)}`);
  }
  if (answers.extras.length > 0) {
    lines.push(`🎁 Extra's: ${formatValues(answers.extras)}`);
  }

  lines.push("");
  lines.push("_\"Ik voorzie alles om die dag onvergetelijk te maken.\"_");
  lines.push("");
  lines.push("❤️ Amélie");

  return lines.join("\n");
}

export function VoucherDisplay({ answers, onRestart }: VoucherDisplayProps) {
  const [copied, setCopied] = useState(false);

  const voucherText = generateVoucherText(answers);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const encodedText = encodeURIComponent(voucherText);
    window.open(`https://wa.me/?text=${encodedText}`, "_blank");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(voucherText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Amélie's Avontuur - Jouw Cadeau!");
    const body = encodeURIComponent(voucherText);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
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
            {(Object.keys(LABELS) as Array<keyof WizardAnswers>).map((key) => {
              // Only show categories that have selections
              if (answers[key].length === 0) return null;

              return (
                <div key={key} className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground shrink-0">
                    {LABELS[key].emoji} {LABELS[key].label}
                  </span>
                  <span className="font-medium text-right">
                    {formatValues(answers[key])}
                  </span>
                </div>
              );
            })}
          </div>

          <Separator />

          <p className="text-center text-muted-foreground italic">
            &quot;Ik voorzie alles om die dag onvergetelijk te maken.&quot;
          </p>
        </CardContent>

        <CardFooter className="no-print flex flex-col gap-3 pt-2">
          {/* Share buttons */}
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E]">
              WhatsApp
            </Button>
            <Button onClick={handleCopy} variant="outline" className="w-full">
              {copied ? "Gekopieerd!" : "Kopieer tekst"}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full">
            <Button onClick={handleEmail} variant="outline" className="w-full">
              E-mail
            </Button>
            <Button onClick={handlePrint} variant="outline" className="w-full">
              Printen
            </Button>
          </div>

          <Separator className="my-2" />

          <Button variant="ghost" onClick={onRestart} className="w-full text-muted-foreground">
            Opnieuw beginnen
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
