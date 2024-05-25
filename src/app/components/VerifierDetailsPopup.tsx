import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'
import { Address } from 'cluster'
import { useReadContract } from 'wagmi'
import { abi } from './abi'
import { readContract } from '@wagmi/core'
import { config } from './config'
type CryptoAddress = `0x${string}`

const test = async (y: number, x: CryptoAddress) => {
    const result = await readContract(config, {
        abi,
        address: '0x9Dc51E8Cfc9F88385376a685Bf7997426467f487',
        functionName: 'verifyCert',
        args: [x, BigInt(y)],
      })
      return result
}

interface VerifierDetailsFormProps {
  onSubmit: (details: { organizationname: string; address: Address }) => void
  onClose: () => void
  name: string
}

export const VerifierDetailsPopUp: React.FC<VerifierDetailsFormProps> = ({
  onSubmit,
  onClose,
  name,
}) => {
  const [certuid, setCertuid] = useState(name)
  const [studwallet, setStudwallet] = useState('')
  const { address, isConnecting, isDisconnected } = useAccount()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const {data:result, isLoading, isLoadingError} = useReadContract({
    //   abi,
    //   address: '0x9Dc51E8Cfc9F88385376a685Bf7997426467f487',
    //   functionName: 'verifyCert',
    //   args: [studwallet, BigInt(certuid)]
    // })

    if (await test(certuid, studwallet)) {
      alert(`verified`);
    } else {
      alert('uh')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-stone-400 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Enter Student Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 pb-2">
            <label htmlFor="studwallet">Student Wallet Address:</label>
            <Input
              id="studwallet"
              value={studwallet}
              onChange={(e) => setStudwallet(e.target.value)}
              className="text-black placeholder:text-black"
            />
          </div>
          <div className="flex flex-col space-y-2 pb-2">
            <label htmlFor="certuid">Certificate Uid :</label>
            <Input
              id="certuid"
              value={certuid}
              onChange={(e) => setCertuid(e.target.value)}
              className="text-black placeholder:text-black"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="address">Your Wallet Address:</label>
            <Input id="address" value={address} disabled />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-amber-500 px-2 pt-1 hover:bg-amber-600 text-white rounded-lg"
            >
              Submit
            </button>
            <button className="ml-2" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
