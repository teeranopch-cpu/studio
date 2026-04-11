'use server';
/**
 * @fileOverview An AI tool to summarize and simplify complex legal documents and academic texts
 * into easily understandable language for students and parents, in Thai.
 *
 * - simplifyDocument - A function that handles the document simplification process.
 * - SimplifyDocumentInput - The input type for the simplifyDocument function.
 * - SimplifyDocumentOutput - The return type for the simplifyDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimplifyDocumentInputSchema = z.object({
  documentContent: z
    .string()
    .describe('The complex legal document, school announcement, or academic text to be simplified.'),
});
export type SimplifyDocumentInput = z.infer<typeof SimplifyDocumentInputSchema>;

const SimplifyDocumentOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the document in easily understandable Thai.'),
  simplifiedExplanation: z
    .string()
    .describe('A simplified explanation of the document in clear, plain Thai, suitable for students and parents.'),
});
export type SimplifyDocumentOutput = z.infer<typeof SimplifyDocumentOutputSchema>;

export async function simplifyDocument(input: SimplifyDocumentInput): Promise<SimplifyDocumentOutput> {
  return simplifyDocumentFlow(input);
}

const simplifyDocumentPrompt = ai.definePrompt({
  name: 'simplifyDocumentPrompt',
  input: {schema: SimplifyDocumentInputSchema},
  output: {schema: SimplifyDocumentOutputSchema},
  prompt: `You are an AI assistant specialized in simplifying complex documents for students and parents.
Your task is to read the provided document, summarize its main points, and then provide a simplified explanation.
Both the summary and the simplified explanation must be in Thai.

Document:
{{{
documentContent
}}}

Instructions:
1. Provide a concise summary of the document in easily understandable Thai.
2. Provide a simplified explanation of the document in clear, plain Thai, suitable for students and parents.
3. Ensure both outputs are distinct and address different aspects (summary is an overview, explanation clarifies complex parts).
`,
});

const simplifyDocumentFlow = ai.defineFlow(
  {
    name: 'simplifyDocumentFlow',
    inputSchema: SimplifyDocumentInputSchema,
    outputSchema: SimplifyDocumentOutputSchema,
  },
  async input => {
    const {output} = await simplifyDocumentPrompt(input);
    return output!;
  }
);
