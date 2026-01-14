import { useAccount, useReadContract, useReadContracts } from 'wagmi'
import { ASSET_NFT_ABI, ASSET_NFT_ADDRESS } from '@/abis'
import { useState, useEffect } from 'react'

export function useUserAssets() {
  const { address } = useAccount()

  // 1. Get balance
  const { data: balance, refetch } = useReadContract({
    address: ASSET_NFT_ADDRESS,
    abi: ASSET_NFT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  })

  // 2. Prepare calls
  const balanceNum = balance ? Number(balance) : 0
  const tokenIndexCalls = Array.from({ length: balanceNum }).map((_, i) => ({
    address: ASSET_NFT_ADDRESS,
    abi: ASSET_NFT_ABI,
    functionName: 'tokenOfOwnerByIndex',
    args: [address!, BigInt(i)]
  }))

  const { data: tokenIds } = useReadContracts({
    contracts: address && balanceNum > 0 ? tokenIndexCalls : [],
  })

  // 3. Prepare calls
  const detailCalls = tokenIds?.map((result) => ({
    address: ASSET_NFT_ADDRESS,
    abi: ASSET_NFT_ABI,
    functionName: 'getAssetDetails',
    args: [result.result as bigint]
  }))

  const { data: assetsDetails, isLoading, refetch: refetchDetails } = useReadContracts({
    contracts: detailCalls || [],
  })

  // Combine
  let assets = assetsDetails?.map((result, i) => {
    if (!result.result || !tokenIds || !tokenIds[i].result) return null
    const id = tokenIds[i].result as bigint
    const detail = result.result as any
    return {
      id: id,
      ...detail
    }
  }).filter(Boolean)

  const refetchAll = async () => {
    await refetch()
    await refetchDetails()
  }

  // Return empty array/loading if no assets found - NO MOCK DATA
  return { assets, isLoading, balance: assets ? assets.length : 0, refetch: refetchAll }
}
