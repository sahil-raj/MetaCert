'use client'
import React, { useState } from 'react'
import { MintNFTPopup } from '@/app/components/MintNFTPopup'
import Sidebar from '../components/Sidebar'
import ListCertificates from './Listcertificates'
import InsProfile from './Insprofile'

type CryptoAddress = `0x${string}`

interface Details {
  uid: string
  sname: string
  title: string
  desc: string
  date: Date
  studaddress: CryptoAddress
  file: File
}

const Dashboard: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState('')
  const [activeTab, setActiveTab] = useState('issue')

  const handleRegisterClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    setName('')
  }

  const handleSubmitDetails = (details: Details) => {
    console.log('Submitted institution details:', details)
    setShowPopup(false)
    setName('')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'issue':
        return (
          <div className="p-4">
            <h1 className="text-orange-400 text-2xl mb-4">
              Issue Educational Credential to a Student:
            </h1>
            <button
              className="bg-amber-500 rounded-lg py-2 px-4"
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
        )
      case 'list':
        return <ListCertificates />
      case 'profile':
        return <InsProfile />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar onSelectTab={setActiveTab} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  )
}

export default Dashboard
