// /app/api/create-customer/route.ts

import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email) {
      return new Response('Missing name or email', { status: 400 })
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
      },
    })

    return NextResponse.json(customer)
  } catch (error) {
    console.error('Error creating customer:', error)
    return new Response('Error creating customer', { status: 500 })
  }
}