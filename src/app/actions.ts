'use server';

import { getHairstyleSuggestions } from "@/ai/flows/ai-style-advisor";

export async function generateSuggestion(photoDataUri: string) {
  return getHairstyleSuggestions({ photoDataUri });
}
