import { http, createConfig } from 'wagmi'
import { mantle, mantleSepoliaTestnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mantle, mantleSepoliaTestnet],
  connectors: [
    injected(),
  ],
  transports: {
    [mantle.id]: http(),
    [mantleSepoliaTestnet.id]: http(),
  },
})
