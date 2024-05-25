'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'
import http from 'https'

const Body = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

  useEffect(() => {
    const options = {
      method: 'GET',
      hostname: 'testnets-api.opensea.io',
      port: null,
      path: `/api/v2/chain/sepolia/account/0x1ddc4663d4EA70b96A05372466952755a54A5834/nfts`,
      headers: {
        accept: 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_OPENSEA_API_KEY}`,
      },
    }

    const req = http.request(options, function (res) {
      const chunks = []

      res.on('data', function (chunk) {
        chunks.push(chunk)
      })

      res.on('end', function () {
        const body = Buffer.concat(chunks)
        const rv = JSON.parse(body.toString()).nfts.filter((x) => x.collection == "metacert-certs-2")
        console.log(rv);
      })
    })

    req.end()
  }, [])


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
