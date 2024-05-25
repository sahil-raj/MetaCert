'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import { WagmiProvider } from 'wagmi'
import Body from './Body'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true,
})
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

const Page = () => {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: '#ff8f00',
              accentColorForeground: 'black',
              borderRadius: 'large',
              fontStack: 'rounded',
              overlayBlur: 'small',
            })}
            modalSize="compact"
          >
            <Navbar />
            <Body />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default Page
