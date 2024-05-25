'use client'
import { useState } from 'react'
import { MintNFTPopup } from '../components/MintNFTPopup'
type CryptoAddress = `0x${string}`

const Body = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState('')

  const handleRegisterClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    setName('')
  }

  const handleSubmitDetails = (details: {
    uid: string
    address: CryptoAddress
    file: File
  }) => {
    console.log('Submitted institution details:', details)
    setShowPopup(false)
    setName('')
  }
  return (
    <main>
      <main className="flex items-center justify-center h-[70vh]">
        <div className="flex-row">
          <h1 className="text-orange-400 text-2xl">
            Issue Educational Credential to a Student:
          </h1>
          <button
            className="bg-amber-500 rounded-lg py-1 px-1 items-center"
            onClick={handleRegisterClick}
          >
            Mint Certificate
          </button>
          {showPopup && (
            <MintNFTPopup
              onSubmit={handleSubmitDetails}
              onClose={handleClosePopup}
            />
          )}
        </div>
      </main>
    </main>
  )
}

export default Body
