import React from 'react'
import { CardCompIns } from './CardCompIns'
import { CardCompStud } from './CardCompStud'
import { CardCompVerify } from './CardCompVerify'

const Body = () => {
  return (
    <main>
      <main className="flex items-center justify-center h-[70vh] pt-20">
        <div className="h-1/3 items-center justify-center">
          <h1 className="text-transparent items-center text-center justify-center bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-5xl font-semibold">
            Your Credentials, Verified and Secured.
          </h1>
          <h3 className="px-96 py-6 text-sm text-orange-100">
            MetaCred streamlines the certificate verification process.
            Institutions can seamlessly issue verifiable credentials as NFTs on
            the blockchain, while employers and other entities can instantly
            confirm the authenticity of these credentials with just a few
            clicks. MetaCred ensures your achievements are secure, accessible,
            and trusted globally.
          </h3>
        </div>
      </main>
      <div className="flex px-36  gap-20">
        <CardCompIns />
        <CardCompStud />
        <CardCompVerify />
      </div>
    </main>
  )
}

export default Body
