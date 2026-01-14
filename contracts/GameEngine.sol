// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./AssetNFT.sol";

contract GameEngine {
    AssetNFT public assetContract;

    enum EventType {
        MissedPayment,
        RegulationFreeze,
        MaintenanceCost,
        PositiveUpgrade,
        YieldDrop,
        YieldIncrease
    }

    event GameEventTriggered(uint256 indexed tokenId, EventType eventType, string description);

    constructor(address _assetContract) {
        assetContract = AssetNFT(_assetContract);
    }

    // This function simulates an event happening to an asset
    function applyEvent(uint256 tokenId, EventType eventType) public {
        AssetNFT.Asset memory asset = assetContract.getAssetDetails(tokenId);
        
        // Ensure asset is active
        require(!asset.isExpired, "Asset is expired");

        if (eventType == EventType.MissedPayment) {
            // Drop yield, Increase risk
            uint256 newYield = asset.yieldRate > 100 ? asset.yieldRate - 100 : 0;
            assetContract.updateYield(tokenId, newYield);
            assetContract.updateRisk(tokenId, "High");
            emit GameEventTriggered(tokenId, eventType, "Missed Payment: Yield dropped, Risk High");
        } 
        else if (eventType == EventType.RegulationFreeze) {
            // Freeze asset
            assetContract.freezeAsset(tokenId);
            emit GameEventTriggered(tokenId, eventType, "Regulation Freeze: Asset Frozen");
        }
        else if (eventType == EventType.MaintenanceCost) {
            // Just an event log for now, could deduct balance if we had a token
             emit GameEventTriggered(tokenId, eventType, "Maintenance Cost: Fees applied");
        }
        else if (eventType == EventType.PositiveUpgrade) {
            // Increase yield, safe risk
            uint256 newYield = asset.yieldRate + 150;
            assetContract.updateYield(tokenId, newYield);
            assetContract.updateRisk(tokenId, "Low");
             emit GameEventTriggered(tokenId, eventType, "Positive Upgrade: Yield increased, Risk Low");
        }
        else if (eventType == EventType.YieldDrop) {
            uint256 newYield = asset.yieldRate > 50 ? asset.yieldRate - 50 : 0;
            assetContract.updateYield(tokenId, newYield);
             emit GameEventTriggered(tokenId, eventType, "Market Fluctuation: Yield dropped");
        }
        else if (eventType == EventType.YieldIncrease) {
            uint256 newYield = asset.yieldRate + 50;
            assetContract.updateYield(tokenId, newYield);
            emit GameEventTriggered(tokenId, eventType, "Market Fluctuation: Yield increased");
        }
    }
}
