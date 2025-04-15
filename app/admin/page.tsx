'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CreateBookingModal from '@/components/CreateBookingModal'
import React from 'react'

const mockBookings = [
  {
    id: '1',
    name: 'Carlos Perez',
    email: 'carlos@gmail.com',
    date: '2025-11-30',
    startTime: '13:00',
    guests: 20,
    busType: 'Open Air Party Bus',
    status: 'Reserved',
    balance: 950,
  },
]

export default function AdminPage() {
  const [bookings, setBookings] = useState(mockBookings)
  const [isOpen, setIsOpen] = useState(false)

  const handleNewBooking = (newBooking: any) => {
    setBookings((prev) => [...prev, newBooking])
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bookings</h2>
        <Button onClick={() => setIsOpen(true)}>+ New Booking</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Bus Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.name}</TableCell>
                  <TableCell>{b.email}</TableCell>
                  <TableCell>{new Date(b.date).toLocaleDateString()}</TableCell>
                  <TableCell>{b.startTime}</TableCell>
                  <TableCell>{b.guests}</TableCell>
                  <TableCell>{b.busType}</TableCell>
                  <TableCell>
                    <Badge variant={b.status === 'Paid' ? 'default' : 'secondary'}>
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${b.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <CreateBookingModal 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        onSubmit={handleNewBooking}
      />
    </div>
  )
}