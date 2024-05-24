import { getTransactionReceipt } from '@wagmi/core'
import { config } from './config'

const listenEvent = async () => {
    const t = await getTransactionReceipt(config, {
        hash: '0x92dde09387f008528e94626cedba63b39a6aea8e98bdb701e78e9a0618583e86',
    })

    console.log(await t.logs);
}

export default listenEvent;