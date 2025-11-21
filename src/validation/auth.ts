import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, 'Nama wajib diisi'),
    email: z
      .string()
      .trim()
      .min(1, 'Email wajib diisi')
      .email('Format email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    confirm: z.string().min(1, 'Konfirmasi password wajib diisi'),
    phone: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{8,15}$/.test(v), 'Nomor handphone tidak valid'),
  })
  .refine((data) => data.password === data.confirm, {
    path: ['confirm'],
    message: 'Password dan konfirmasi tidak cocok',
  });

export type RegisterInput = z.infer<typeof registerSchema>;
