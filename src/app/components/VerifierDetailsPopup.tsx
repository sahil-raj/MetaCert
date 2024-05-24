import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'
import { Address } from 'cluster'

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
  const [orgname, setOrgname] = useState(name)
  const { address, isConnecting, isDisconnected } = useAccount()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      organizationname: orgname,
      address,
    })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-stone-400 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Enter Organization/Verifier Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 pb-2">
            <label htmlFor="orgname">Organization Name:</label>
            <Input
              id="orgname"
              value={orgname}
              onChange={(e) => setOrgname(e.target.value)}
              className="text-black placeholder:text-black"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="address">Wallet Address:</label>
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
