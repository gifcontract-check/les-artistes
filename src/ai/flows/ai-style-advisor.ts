'use server';

/**
 * @fileOverview AI-powered style advisor for hairstyling suggestions.
 *
 * - getHairstyleSuggestions - A function that provides hairstyle suggestions based on user input image.
 * - AIStyleAdvisorInput - The input type for the getHairstyleSuggestions function.
 * - AIStyleAdvisorOutput - The return type for the getHairstyleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const AIStyleAdvisorInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the client, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AIStyleAdvisorInput = z.infer<typeof AIStyleAdvisorInputSchema>;

const AIStyleAdvisorOutputSchema = z.object({
  suggestionImage: z
    .string()
    .describe(
      'An AI-generated image with a suggested hairstyle, as a data URI that must include a MIME type and use Base64 encoding.'
    ),
});
export type AIStyleAdvisorOutput = z.infer<typeof AIStyleAdvisorOutputSchema>;

export async function getHairstyleSuggestions(
  input: AIStyleAdvisorInput
): Promise<AIStyleAdvisorOutput> {
  return aiStyleAdvisorFlow(input);
}

const aiStyleAdvisorPrompt = ai.definePrompt({
  name: 'aiStyleAdvisorPrompt',
  input: {schema: AIStyleAdvisorInputSchema},
  output: {schema: AIStyleAdvisorOutputSchema},
  prompt: [
    {
      media: {url: '{{photoDataUri}}'},
    },
    {
      text:
        'Generate an image of this person with a modern hairstyle that is currently trending.  Focus on hairstyles that would be flattering to their face shape and features.',
    },
  ],
  model: 'googleai/gemini-2.5-flash-image-preview',
  config: {
    responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
  },
});

const aiStyleAdvisorFlow = ai.defineFlow(
  {
    name: 'aiStyleAdvisorFlow',
    inputSchema: AIStyleAdvisorInputSchema,
    outputSchema: AIStyleAdvisorOutputSchema,
  },
  async input => {
    const {media} = await aiStyleAdvisorPrompt(input);
    return {suggestionImage: media!.url!};
  }
);
