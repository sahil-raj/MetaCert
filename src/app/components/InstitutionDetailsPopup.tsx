import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'

interface InstitutionDetailsFormProps {
  onSubmit: (details: {
    institutionId: string
    institutionname: string
    addressclg: string
    district: string
    address: string
  }) => void
  onClose: () => void
  name: string
}

export const InstitutionDetailsPopUp: React.FC<InstitutionDetailsFormProps> = ({
  onSubmit,
  onClose,
  name,
}) => {
  const [institutionId, setInstitutionId] = useState('')
  const [addressclg, setAddressclg] = useState('')
  const [district, setDistrict] = useState('')
  const [insname, setInsname] = useState(name)
  const { address, isConnecting, isDisconnected } = useAccount()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      institutionId,
      institutionname: insname,
      addressclg,
      district,
      address,
    })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-stone-400 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Enter Institution Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-6">
            <div className="flex flex-col space-y-2 pb-2">
              <label htmlFor="institutionId">Institution Name:</label>
              <Input
                id="institutionId"
                value={insname}
                onChange={(e) => setInsname(e.target.value)}
                placeholder="Enter institution ID"
                className="text-black placeholder:text-black"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="institutionId">Institution ID:</label>
              <Input
                id="institutionId"
                value={institutionId}
                onChange={(e) => setInstitutionId(e.target.value)}
                placeholder="Enter institution ID"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="address">Address:</label>
              <Input
                id="address"
                value={addressclg}
                onChange={(e) => setAddressclg(e.target.value)}
                placeholder="Enter address"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="address">District:</label>
              <Input
                id="address"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="District"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="address">Wallet Address:</label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setDistrict(e.target.value)}
              disabled
            />
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
