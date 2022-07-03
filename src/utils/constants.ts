export const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tprc`
  : "http://localhost:3000/api/trpc";
