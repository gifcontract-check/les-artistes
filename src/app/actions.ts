"use server";

import { getHairstyleSuggestions, AIStyleAdvisorOutput } from "@/ai/flows/ai-style-advisor";

export async function generateSuggestion(photoDataUri: string): Promise<AIStyleAdvisorOutput> {
  if (!photoDataUri) {
    throw new Error("Aucune image fournie.");
  }
  try {
    const result = await getHairstyleSuggestions({ photoDataUri });
    return result;
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API d'IA:", error);
    throw new Error("Le service de suggestion de style est actuellement indisponible. Veuillez réessayer plus tard.");
  }
}
