import { neon } from '@neondatabase/serverless';
import { z } from 'zod';

const sql = neon(process.env.DATABASE_URL!);

const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    passwordHash: z.string(),
    role: z.enum(['member', 'admin'])
});

export async function getUserByEmail(email: string) {
    const rows = await sql`
    SELECT
        id,
        name,
        email,
        password_hash as "passwordHash",
        role
    FROM users
    WHERE LOWER(email) = LOWER(${email})
    `;

    if (rows.length === 0) return null;

    const parsed = UserSchema.safeParse(rows[0]);
    if (!parsed.success) return null;
    return parsed.data;
}