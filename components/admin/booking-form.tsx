'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Temporary mock data for bus types
const mockBusTypes = [
  { id: '1', name: 'Open Air Party Bus' },
  { id: '2', name: '28 Passenger Party Bus' },
  { id: '3', name: '55 Passenger Party Bus' },
]

export function CreateBookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: undefined as Date | undefined,
    startTime: '',
    vehicle: '',
    name: '',
    phone: '',
    email: '',
    source: '',
    occasion: '',
    guests: '',
    pickup: '',
    dropoff: '',
    paymentMethod: '',
    depositAmount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    console.log('Submitted booking:', formData)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Create a Booking</DialogTitle>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="text-lg font-medium flex justify-between px-4">
          <span className={step === 1 ? 'font-bold' : 'text-muted-foreground'}>1. Schedule</span>
          <span className={step === 2 ? 'font-bold' : 'text-muted-foreground'}>2. Info</span>
          <span className={step === 3 ? 'font-bold' : 'text-muted-foreground'}>3. Checkout</span>
        </div>

        {/* Step 1: Schedule */}
        {step === 1 && (
          <>
            <div className="flex justify-center mt-4">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={(date) => date && setFormData((prev) => ({ ...prev, date }))}
                numberOfMonths={2}
                className="border rounded-md p-4 bg-white"
              />
            </div>

            {formData.date && (
              <div className="mt-6">
                <p className="font-medium mb-2">Select Pickup Time</p>
                <div className="grid grid-cols-3 gap-2 max-h-[180px] overflow-y-auto pr-1 border rounded-md p-3">
                  {[...Array(30)].map((_, i) => {
                    const hour = 9 + Math.floor(i / 2)
                    const minutes = i % 2 === 0 ? '00' : '30'
                    const suffix = hour >= 12 ? 'PM' : 'AM'
                    const formattedHour = hour % 12 === 0 ? 12 : hour % 12
                    const time = `${formattedHour}:${minutes} ${suffix}`
                    return (
                      <button
                        key={time}
                        onClick={() => setFormData((prev) => ({ ...prev, startTime: time }))}
                        className={`border rounded px-4 py-2 text-sm transition ${
                          formData.startTime === time ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {/* Step 2: Guest Info */}
        {step === 2 && (
          <div className="grid grid-cols-2 gap-4">
            <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <Input name="guests" placeholder="# of Guests" value={formData.guests} onChange={handleChange} />
            <Input name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleChange} />
            <Input name="dropoff" placeholder="Dropoff Location" value={formData.dropoff} onChange={handleChange} />
            
            {/* How did you hear about us */}
            <div className="col-span-2">
              <Label>How did you hear about us?</Label>
              <Select
                value={formData.source}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, source: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="TikTok">TikTok</SelectItem>
                  <SelectItem value="Friend">Friend</SelectItem>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Saw bus pass by">Saw bus pass by</SelectItem>
                  <SelectItem value="Wedding Wire">Wedding Wire</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Occasion */}
            <div className="col-span-2">
              <Label>Occasion</Label>
              <Select
                value={formData.occasion}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, occasion: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bachelorette">Bachelorette</SelectItem>
                  <SelectItem value="Birthday">Birthday</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Night Out">Night Out</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-4">
            <Label>Payment Method</Label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Select a method</option>
              <option value="card">Pay with Credit Card</option>
              <option value="save">Save Credit Card Info</option>
              <option value="cash">Collect Cash</option>
              <option value="no_payment">Book without Payment</option>
            </select>
            <Input
              name="depositAmount"
              placeholder="Deposit or Full Amount"
              value={formData.depositAmount}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex justify-between pt-6">
          {step > 1 && <Button variant="ghost" onClick={handleBack}>Back</Button>}
          {step < 3 ? <Button onClick={handleNext}>Next</Button> : <Button onClick={handleSubmit}>Submit Booking</Button>}
        </div>
      </DialogContent>
    </Dialog>
  )
}