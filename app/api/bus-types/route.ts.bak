// /api/bus-types/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const busTypes = await prisma.busType.findMany()
  return NextResponse.json(busTypes)
}