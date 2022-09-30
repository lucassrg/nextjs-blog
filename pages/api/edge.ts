import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  console.log('request: '+req.url);

  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  return new Response(email)
}