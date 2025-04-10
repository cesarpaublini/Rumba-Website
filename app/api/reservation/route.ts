import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
      const reservations = await prisma.reservation.findMany({
        orderBy: { createdAt: 'desc' },
        // comment out include
        // include: {
        //   customer: true,
        //   busType: true,
        // },
      })
  
      return NextResponse.json(reservations)
    } catch (error) {
      console.error('❌ Error fetching reservations:', error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }