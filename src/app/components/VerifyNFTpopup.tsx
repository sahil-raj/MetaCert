interface VerifyNFTpopupProps {
  NFT: Object
  address: string
  onClose: () => void
}

const VerifyNFTpopup: React.FC<VerifyNFTpopupProps> = ({
  NFT,
  address,
  onClose,
}) => {
  console.log(address)
  const nfts = JSON.parse(NFT.toString()).nft
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-stone-400 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4"></h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 pb-2">
            <label htmlFor="studwallet">
              Student Wallet Address: {address}
            </label>
            <img
              src={nfts.image_url}
              alt="image"
              className="w-[300px] h-[300px]"
            />
          </div>
          <div className="flex flex-col space-y-2 pb-2">{nfts.name}</div>
          <div className="flex flex-col space-y-2 mt-4">{nfts.description}</div>
          <div className="flex justify-end mt-6">
            <button className="ml-2" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyNFTpopup
