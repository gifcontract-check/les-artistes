"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Wand2, Loader2, Image as ImageIcon, AlertCircle } from "lucide-react";
import { generateSuggestion } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

type AdvisorState = "idle" | "loading" | "success" | "error";

export default function StyleAdvisor() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [suggestionUrl, setSuggestionUrl] = useState<string | null>(null);
  const [state, setState] = useState<AdvisorState>("idle");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setState("idle");
      setSuggestionUrl(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!previewUrl) return;

    setState("loading");
    setError(null);
    setSuggestionUrl(null);

    try {
      const result = await generateSuggestion(previewUrl);
      if (result && result.suggestionImage) {
        setSuggestionUrl(result.suggestionImage);
        setState("success");
      } else {
        throw new Error("La réponse de l'IA est invalide.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue est survenue.";
      setError(errorMessage);
      setState("error");
      toast({
        variant: "destructive",
        title: "Erreur de l'IA",
        description: "Impossible de générer une suggestion. Veuillez réessayer.",
      });
    }
  };

  return (
    <section id="ai-advisor" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Conseiller de Style IA
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Vous hésitez sur votre prochaine coupe ? Importez une photo de vous et laissez notre intelligence artificielle vous proposer une coiffure tendance et adaptée à votre visage.
          </p>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-background/50 border-primary/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture" className="text-foreground/80 flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Choisissez votre photo
                </Label>
                <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} className="file:text-foreground" />
              </div>
              {previewUrl && (
                 <Button type="submit" disabled={state === "loading"}>
                  {state === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Obtenir une suggestion
                    </>
                  )}
                </Button>
              )}
            </form>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-headline text-2xl text-foreground">Votre Photo</h3>
                <div className="aspect-square w-full max-w-sm rounded-lg border border-primary/20 bg-background/50 flex items-center justify-center">
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Aperçu" width={400} height={400} className="rounded-lg object-cover w-full h-full" />
                  ) : (
                    <div className="text-center text-foreground/50 p-8">
                      <ImageIcon className="h-12 w-12 mx-auto" />
                      <p>L'aperçu de votre photo apparaîtra ici.</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-headline text-2xl text-primary">Suggestion IA</h3>
                 <div className="aspect-square w-full max-w-sm rounded-lg border border-primary/20 bg-background/50 flex items-center justify-center">
                    {state === 'loading' && <Loader2 className="h-12 w-12 animate-spin text-primary" />}
                    {state === 'error' && (
                       <div className="text-center text-destructive p-8">
                        <AlertCircle className="h-12 w-12 mx-auto" />
                        <p>Erreur: {error}</p>
                      </div>
                    )}
                    {state === 'success' && suggestionUrl && (
                       <Image src={suggestionUrl} alt="Suggestion de coiffure" width={400} height={400} className="rounded-lg object-cover w-full h-full" />
                    )}
                    {state === 'idle' && (
                       <div className="text-center text-primary/70 p-8">
                          <Wand2 className="h-12 w-12 mx-auto" />
                          <p>Votre suggestion de coiffure apparaîtra ici.</p>
                       </div>
                    )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
