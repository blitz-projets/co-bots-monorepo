/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerIndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenIndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620019763803806200197683398101604081905262000034916200024b565b81516200004990600190602085019062000068565b5080516200005f90600290602084019062000068565b5050506200030e565b8280546200007690620002dd565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681016001600160401b03811182821017156200014c576200014c6200010e565b6040525050565b60006200015f60405190565b90506200016d828262000124565b919050565b60006001600160401b038211156200018e576200018e6200010e565b601f19601f83011660200192915050565b60005b83811015620001bc578181015183820152602001620001a2565b83811115620001cc576000848401525b50505050565b6000620001e9620001e38462000172565b62000153565b905082815260208101848484011115620002065762000206600080fd5b620002138482856200019f565b509392505050565b600082601f830112620002315762000231600080fd5b815162000243848260208601620001d2565b949350505050565b60008060408385031215620002635762000263600080fd5b82516001600160401b038111156200027e576200027e600080fd5b6200028c858286016200021b565b602085015190935090506001600160401b03811115620002af57620002af600080fd5b620002bd858286016200021b565b9150509250929050565b634e487b7160e01b600052602260045260246000fd5b600281046001821680620002f257607f821691505b60208210811415620003085762000308620002c7565b50919050565b611658806200031e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80634f6ccce711610097578063a22cb46511610066578063a22cb46514610237578063b88d4fde1461024a578063c87b56dd1461025d578063e985e9c51461027057600080fd5b80634f6ccce7146101f65780636352211e1461020957806370a082311461021c57806395d89b411461022f57600080fd5b806318160ddd116100d357806318160ddd1461017857806323b872dd146101bd5780632f745c59146101d057806342842e0e146101e357600080fd5b806301ffc9a71461010557806306fdde031461012e578063081812fc14610143578063095ea7b314610163575b600080fd5b6101186101133660046110b8565b6102ac565b60405161012591906110e3565b60405180910390f35b61013661037d565b604051610125919061114f565b610156610151366004611171565b61040f565b60405161012591906111ac565b6101766101713660046111ce565b61046c565b005b6101b06000546fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116918116919091031690565b6040516101259190611211565b6101766101cb36600461121f565b61052c565b6101b06101de3660046111ce565b610537565b6101766101f136600461121f565b610656565b6101b0610204366004611171565b610671565b610156610217366004611171565b61073e565b6101b061022a36600461126f565b610750565b6101366107b8565b6101766102453660046112a3565b6107c7565b6101766102583660046113d1565b610897565b61013661026b366004611171565b6108ea565b61011861027e366004611450565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061030f57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061034357506001600160e01b031982167f780e9d6300000000000000000000000000000000000000000000000000000000145b8061037757507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b60606001805461038c90611499565b80601f01602080910402602001604051908101604052809291908181526020018280546103b890611499565b80156104055780601f106103da57610100808354040283529160200191610405565b820191906000526020600020905b8154815290600101906020018083116103e857829003601f168201915b5050505050905090565b600061041a82610995565b610450576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506000908152600560205260409020546001600160a01b031690565b60006104778261073e565b9050806001600160a01b0316836001600160a01b031614156104c5576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b038216148015906104e557506104e3813361027e565b155b1561051c576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105278383836109d2565b505050565b610527838383610a46565b600061054283610750565b821061057a576040517f0ddac30e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546fffffffffffffffffffffffffffffffff169080805b8381101561065057600081815260036020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff1615801592820192909252906105fc5750610648565b80516001600160a01b03161561061157805192505b876001600160a01b0316836001600160a01b03161415610646578684141561063f5750935061037792505050565b6001909301925b505b600101610594565b50600080fd5b61052783838360405180602001604052806000815250610897565b600080546fffffffffffffffffffffffffffffffff1681805b8281101561070b57600081815260036020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff1615159181018290529061070257858314156106fb5750949350505050565b6001909201915b5060010161068a565b506040517fa723001c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061074982610cd0565b5192915050565b60006001600160a01b038216610792576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506001600160a01b031660009081526004602052604090205467ffffffffffffffff1690565b60606002805461038c90611499565b6001600160a01b03821633141561080a576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360008181526006602090815260408083206001600160a01b03871680855292529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061088b9085906110e3565b60405180910390a35050565b6108a2848484610a46565b6108ae84848484610e16565b6108e4576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606108f582610995565b61092b576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061094260408051602081019091526000815290565b9050805160001415610963576040518060200160405280600081525061098e565b8061096d84610f61565b60405160200161097e9291906114e8565b6040516020818303038152906040525b9392505050565b600080546fffffffffffffffffffffffffffffffff1682108015610377575050600090815260036020526040902054600160e01b900460ff161590565b60008281526005602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000610a5182610cd0565b80519091506000906001600160a01b0316336001600160a01b03161480610a7f57508151610a7f903361027e565b80610a9a575033610a8f8461040f565b6001600160a01b0316145b905080610ad3576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846001600160a01b031682600001516001600160a01b031614610b22576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416610b62576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7260008484600001516109d2565b6001600160a01b03858116600090815260046020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000080821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600390945282852080546001600160e01b031916909417600160a01b429092169190910217909255908601808352912054909116610c87576000546fffffffffffffffffffffffffffffffff16811015610c87578251600082815260036020908152604090912080549186015167ffffffffffffffff16600160a01b026001600160e01b03199092166001600160a01b03909316929092171790555b5082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b60408051606081018252600080825260208201819052918101829052905482906fffffffffffffffffffffffffffffffff16811015610de457600081815260036020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290610de25780516001600160a01b031615610d78579392505050565b5060001901600081815260036020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215610ddd579392505050565b610d78565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600160a01b0384163b15610f55576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290610e739033908990889088906004016114fe565b6020604051808303816000875af1925050508015610eae575060408051601f3d908101601f19168201909252610eab9181019061154d565b60015b610f22573d808015610edc576040519150601f19603f3d011682016040523d82523d6000602084013e610ee1565b606091505b508051610f1a576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b6001600160e01b0319167f150b7a0200000000000000000000000000000000000000000000000000000000149050610f59565b5060015b949350505050565b606081610fa157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610fcb5780610fb581611584565b9150610fc49050600a836115b5565b9150610fa5565b60008167ffffffffffffffff811115610fe657610fe66112d6565b6040519080825280601f01601f191660200182016040528015611010576020820181803683370190505b5090505b8415610f59576110256001836115c9565b9150611032600a866115e0565b61103d9060306115f4565b60f81b8183815181106110525761105261160c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061108c600a866115b5565b9450611014565b6001600160e01b031981165b81146110aa57600080fd5b50565b803561037781611093565b6000602082840312156110cd576110cd600080fd5b6000610f5984846110ad565b8015155b82525050565b6020810161037782846110d9565b60005b8381101561110c5781810151838201526020016110f4565b838111156108e45750506000910152565b6000611127825190565b80845260208401935061113e8185602086016110f1565b601f01601f19169290920192915050565b6020808252810161098e818461111d565b8061109f565b803561037781611160565b60006020828403121561118657611186600080fd5b6000610f598484611166565b60006001600160a01b038216610377565b6110dd81611192565b6020810161037782846111a3565b61109f81611192565b8035610377816111ba565b600080604083850312156111e4576111e4600080fd5b60006111f085856111c3565b925050602061120185828601611166565b9150509250929050565b806110dd565b60208101610377828461120b565b60008060006060848603121561123757611237600080fd5b600061124386866111c3565b9350506020611254868287016111c3565b925050604061126586828701611166565b9150509250925092565b60006020828403121561128457611284600080fd5b6000610f5984846111c3565b80151561109f565b803561037781611290565b600080604083850312156112b9576112b9600080fd5b60006112c585856111c3565b925050602061120185828601611298565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715611312576113126112d6565b6040525050565b600061132460405190565b905061133082826112ec565b919050565b600067ffffffffffffffff82111561134f5761134f6112d6565b601f19601f83011660200192915050565b82818337506000910152565b600061137f61137a84611335565b611319565b90508281526020810184848401111561139a5761139a600080fd5b6113a5848285611360565b509392505050565b600082601f8301126113c1576113c1600080fd5b8135610f5984826020860161136c565b600080600080608085870312156113ea576113ea600080fd5b60006113f687876111c3565b9450506020611407878288016111c3565b935050604061141887828801611166565b925050606085013567ffffffffffffffff81111561143857611438600080fd5b611444878288016113ad565b91505092959194509250565b6000806040838503121561146657611466600080fd5b600061147285856111c3565b9250506020611201858286016111c3565b634e487b7160e01b600052602260045260246000fd5b6002810460018216806114ad57607f821691505b602082108114156114c0576114c0611483565b50919050565b60006114d0825190565b6114de8185602086016110f1565b9290920192915050565b6114f281846114c6565b905061098e81836114c6565b6080810161150c82876111a3565b61151960208301866111a3565b611526604083018561120b565b8181036060830152611538818461111d565b9695505050505050565b805161037781611093565b60006020828403121561156257611562600080fd5b6000610f598484611542565b634e487b7160e01b600052601160045260246000fd5b60006000198214156115985761159861156e565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826115c4576115c461159f565b500490565b6000828210156115db576115db61156e565b500390565b6000826115ef576115ef61159f565b500690565b600082198211156116075761160761156e565b500190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212206906fe28f9d4070b244c21a3f3b0cda0291640817093065470e1ab5d18cba6f164736f6c634300080c0033";

export class ERC721A__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}
