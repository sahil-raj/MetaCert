import { useWriteContract, useReadContract } from 'wagmi'
import { abi } from './abi'

import test from './test'

import listenEvent from './listenEvent'


 
export function MintNFT() {
  const { data: hash, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0x9Dc51E8Cfc9F88385376a685Bf7997426467f487',
      abi,
      functionName: 'registerIssuer',
      args: ["testName", "testAddress", BigInt(123), BigInt(1)],
    });
    test();
    listenEvent();
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Mint</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  )
}