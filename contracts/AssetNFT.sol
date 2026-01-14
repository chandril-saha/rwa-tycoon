// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    struct Asset {
        string assetType;     // Rental Property, Solar Plant, etc.
        uint256 yieldRate;    // Represented in basis points (e.g., 500 = 5%)
        string riskLevel;     // Low, Medium, High
        bool isFrozen;
        bool isExpired;
        uint256 timestamp;
    }

    // Mapping from token ID to Asset details
    mapping(uint256 => Asset) public assets;

    event AssetMinted(uint256 tokenId, address owner, string assetType, uint256 yieldRate, string riskLevel);
    event AssetUpdated(uint256 tokenId, uint256 newYield, string newRisk);
    event AssetFrozen(uint256 tokenId);
    event AssetUnfrozen(uint256 tokenId);
    event AssetExpired(uint256 tokenId);

    constructor() ERC721("RWA Tycoon Asset", "RWA") Ownable(msg.sender) {}

    function mintAsset(address recipient, string memory assetType, uint256 yieldRate, string memory riskLevel, string memory uri)
        public
        // onlyOwner // Removed onlyOwner to allow game engine or user to mint for simulation simplicity
        returns (uint256)
    {
        uint256 newItemId = ++_nextTokenId;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);

        assets[newItemId] = Asset({
            assetType: assetType,
            yieldRate: yieldRate,
            riskLevel: riskLevel,
            isFrozen: false,
            isExpired: false,
            timestamp: block.timestamp
        });

        emit AssetMinted(newItemId, recipient, assetType, yieldRate, riskLevel);

        return newItemId;
    }

    function updateYield(uint256 tokenId, uint256 newYield) public {
        _requireOwned(tokenId);
        assets[tokenId].yieldRate = newYield;
        emit AssetUpdated(tokenId, newYield, assets[tokenId].riskLevel);
    }

    function updateRisk(uint256 tokenId, string memory newRisk) public {
        _requireOwned(tokenId);
        assets[tokenId].riskLevel = newRisk;
        emit AssetUpdated(tokenId, assets[tokenId].yieldRate, newRisk);
    }

    function freezeAsset(uint256 tokenId) public {
        _requireOwned(tokenId);
        assets[tokenId].isFrozen = true;
        emit AssetFrozen(tokenId);
    }

    function unfreezeAsset(uint256 tokenId) public {
        _requireOwned(tokenId);
        assets[tokenId].isFrozen = false;
        emit AssetUnfrozen(tokenId);
    }

    function expireAsset(uint256 tokenId) public {
        _requireOwned(tokenId);
        assets[tokenId].isExpired = true;
        emit AssetExpired(tokenId);
    }

    function getAssetDetails(uint256 tokenId) public view returns (Asset memory) {
        _requireOwned(tokenId);
        return assets[tokenId];
    }

    // Overrides required by Solidity and OpenZeppelin v5

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
