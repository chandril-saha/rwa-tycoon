// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PlayerProfile {
    struct Profile {
        uint256 totalAssetsManaged;
        uint256 reputationScore; // Starts at 100
        uint256 successCount;
        uint256 failureCount;
        bool exists;
    }

    mapping(address => Profile) public profiles;

    event ProfileUpdated(address indexed player, uint256 newReputation);

    function createProfile() public {
        require(!profiles[msg.sender].exists, "Profile already exists");
        profiles[msg.sender] = Profile({
            totalAssetsManaged: 0,
            reputationScore: 100,
            successCount: 0,
            failureCount: 0,
            exists: true
        });
    }

    function updateReputation(address player, int256 delta) public {
        require(profiles[player].exists, "Profile does not exist");
        
        if (delta > 0) {
            profiles[player].reputationScore += uint256(delta);
        } else {
            uint256 absDelta = uint256(-delta);
            if (profiles[player].reputationScore > absDelta) {
                profiles[player].reputationScore -= absDelta;
            } else {
                profiles[player].reputationScore = 0;
            }
        }
        emit ProfileUpdated(player, profiles[player].reputationScore);
    }
    
    function recordAssetMint(address player) public {
         if (!profiles[player].exists) {
            // Auto create if not exists for better UX
             profiles[player] = Profile({
                totalAssetsManaged: 0,
                reputationScore: 100,
                successCount: 0,
                failureCount: 0,
                exists: true
            });
         }
         profiles[player].totalAssetsManaged += 1;
    }

    function getPlayerProfile(address player) public view returns (Profile memory) {
        return profiles[player];
    }
}
