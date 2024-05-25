'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'

const Body = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  return (
    <main className="pt-16">
      <div className="p-2">
        <div className="p-10 text-3xl text-amber-500">Your Profile:</div>
        <div className="flex text-xl px-6">Name:</div>
        <h1 className="text-black text-xl pt-2 px-6">Wallet Address:</h1>
        <Input
          className="bg-amber-200 placeholder:text-black py-2 mx-6 px-6 w-[400px]"
          placeholder={address}
          disabled
        />
      </div>
    </main>
  )
}

export default Body
