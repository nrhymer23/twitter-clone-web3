// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNfts is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for unit256;

    Counters.Counter _tokenIds;

    mapping(uint256 => string) _tokenIds;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts", "PIN") {}

    function _setTokenURI (unit256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(unit256 tokenId) public view virtual override returns (string memory)
}