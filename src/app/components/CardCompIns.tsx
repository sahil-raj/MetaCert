'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InstitutionDetailsPopUp } from './InstitutionDetailsPopup'

export function CardCompIns() {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState('')

  const handleRegisterClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleSubmitDetails = (details: {
    institutionId: string
    institutionname: string
    addressclg: string
    district: string
    address: string
  }) => {
    console.log('Submitted institution details:', details)
    setShowPopup(false)
  }
  return (
    <Card className="w-[350px] bg-stone-400">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Register</CardTitle>
        <CardDescription className="text-center text-xl text-orange-600 font-semibold">
          as Institution.
        </CardDescription>
        <div className="flex-row items-center justify-center px-24 pt-4">
          <img src="./building.png" className="w-28 h-24" />
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="px-4">
                Name Of Your Institution
              </Label>
              <Input
                id="name"
                className="px-2 w-[280px] mx-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button
          className="bg-orange-500 hover:bg-amber-500"
          onClick={handleRegisterClick}
        >
          Register
        </Button>
        {showPopup && (
          <InstitutionDetailsPopUp
            onSubmit={handleSubmitDetails}
            onClose={handleClosePopup}
            name={name}
          />
        )}
      </CardFooter>
    </Card>
  )
}
