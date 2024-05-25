// import { readContracts } from '@wagmi/core'
// import { config } from './config'
// import { abi } from './abi'

// const wagmigotchiContract = {
//     address: '0x5dEcd7CA736f6Bb41304597D1D15133617a7c331',
//     abi: abi,
//   } as const

// const test = async () => {
//     const result = await readContracts(config, {
//         contracts: [
//             {
//                 ...wagmigotchiContract,
//                 functionName: 'verifyCert',
//                 args: ["0x1ddc4663d4EA70b96A05372466952755a54A5834", BigInt(0)]
//             }
//         ]
//       });

//       console.log(await result);
// }

// export default test;



import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'

const test = async () => {
    const result = await readContract(config, {
        abi,
        address: '0x9Dc51E8Cfc9F88385376a685Bf7997426467f487',
        functionName: 'verifyCert',
        args: ['0x1ddc4663d4EA70b96A05372466952755a54A5834', BigInt(5)],
      })
      console.log(await result);
}

export default test;