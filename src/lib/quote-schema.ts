import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please add a few details (at least 10 characters)")
    .max(2000, "Please keep your message under 2000 characters"),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const serviceOptions = [
  "Pre-Need Funeral Planning",
  "Cremation Planning",
  "Burial & Cemetery Arrangements",
  "Memorial Services",
  "Veterans' Benefits Planning",
  "Prepaid Plan Management",
  "Grief Support Resources",
  "Not sure yet",
];
