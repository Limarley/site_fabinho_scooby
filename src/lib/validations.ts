import { z } from "zod";

export const projectTypes = [
  { value: "booking", label: "Show / booking" },
  { value: "direcao", label: "Direção musical" },
  { value: "producao", label: "Produção / arranjo" },
  { value: "tecladismo", label: "Aula / #TECLADISMO" },
  { value: "parceria", label: "Parceria / endorsement" },
  { value: "imprensa", label: "Imprensa" },
  { value: "outro", label: "Outro" },
] as const;

export type ProjectType = (typeof projectTypes)[number]["value"];

const projectTypeValues = projectTypes.map((p) => p.value) as [ProjectType, ...ProjectType[]];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("E-mail inválido.")
    .max(200),
  projectType: z.enum(projectTypeValues, {
    errorMap: () => ({ message: "Selecione o tipo de projeto." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais (mínimo de 10 caracteres).")
    .max(4000, "Mensagem muito longa (máximo de 4000 caracteres)."),
  /** Honeypot: campo invisível que humanos não preenchem. */
  website: z.string().max(0, "Spam detectado.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function projectTypeLabel(value: ProjectType): string {
  return projectTypes.find((p) => p.value === value)?.label ?? value;
}
