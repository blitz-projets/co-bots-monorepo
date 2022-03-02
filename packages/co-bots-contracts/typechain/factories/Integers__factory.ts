/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Integers, IntegersInterface } from "../Integers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "first",
        type: "bytes1",
      },
      {
        internalType: "bytes1",
        name: "second",
        type: "bytes1",
      },
      {
        internalType: "bytes1",
        name: "third",
        type: "bytes1",
      },
    ],
    name: "load12x2",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "_leadingBytes",
        type: "bytes1",
      },
      {
        internalType: "bytes1",
        name: "_endingBytes",
        type: "bytes1",
      },
    ],
    name: "load16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_base",
        type: "uint8",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_base",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_padding",
        type: "uint8",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6107af61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100715760003560e01c80636900a3ae1161005a5780636900a3ae146100c0578063c1338a69146100d3578063c44e8fec146100e657600080fd5b8063338dc7fd146100765780635dfb512c1461009f575b600080fd5b610089610084366004610450565b610106565b604051610096919061050d565b60405180910390f35b6100b26100ad366004610551565b61011d565b6040516100969291906105a1565b6100896100ce3660046105bb565b610158565b6100896100e13660046105e4565b610163565b6100f96100f436600461062a565b610409565b604051610096919061065d565b606061011483836000610163565b90505b92915050565b60008061013660fc85901c610ff060f488901c16610683565b61014c60f885901c610f0060f088901c16610683565b91509150935093915050565b606061011782600a60005b60606000845b80156101915781610179816106ac565b925061018a905060ff8616826106fb565b9050610169565b856101a457816101a0816106ac565b9250505b606060ff85166101f9578267ffffffffffffffff8111156101c7576101c761070f565b6040519080825280601f01601f1916602001820160405280156101f1576020820181803683370190505b509050610243565b8460ff1667ffffffffffffffff8111156102155761021561070f565b6040519080825280601f01601f19166020018201604052801561023f576020820181803683370190505b5090505b60005b838110156103645761025b60ff881689610725565b9250600a8310156102d257610271836030610739565b60f81b826001838551610284919061074c565b61028e919061074c565b8151811061029e5761029e610763565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610345565b6102dd600a84610725565b6102e8906041610739565b60f81b8260018385516102fb919061074c565b610305919061074c565b8151811061031557610315610763565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b61035260ff8816896106fb565b975061035d816106ac565b9050610246565b50825b8560ff168110156103fc577f30000000000000000000000000000000000000000000000000000000000000008260018385516103a3919061074c565b6103ad919061074c565b815181106103bd576103bd610763565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506103f5816106ac565b9050610367565b50925050505b9392505050565b600061011460f883901c61ff0060f086901c16610683565b805b811461042e57600080fd5b50565b803561011781610421565b60ff8116610423565b80356101178161043c565b6000806040838503121561046657610466600080fd5b60006104728585610431565b925050602061048385828601610445565b9150509250929050565b60005b838110156104a8578181015183820152602001610490565b838111156104b7576000848401525b50505050565b60006104c7825190565b8084526020840193506104de81856020860161048d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920192915050565b6020808252810161011481846104bd565b7fff000000000000000000000000000000000000000000000000000000000000008116610423565b80356101178161051e565b60008060006060848603121561056957610569600080fd5b60006105758686610546565b935050602061058686828701610546565b925050604061059786828701610546565b9150509250925092565b61ffff831681526040810161ffff83166020830152610402565b6000602082840312156105d0576105d0600080fd5b60006105dc8484610431565b949350505050565b6000806000606084860312156105fc576105fc600080fd5b60006106088686610431565b935050602061061986828701610445565b925050604061059786828701610445565b6000806040838503121561064057610640600080fd5b600061064c8585610546565b925050602061048385828601610546565b61ffff8216815260208101610117565b634e487b7160e01b600052601160045260246000fd5b61ffff8116905061ffff8216915060008261ffff038211156106a7576106a761066d565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156106de576106de61066d565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261070a5761070a6106e5565b500490565b634e487b7160e01b600052604160045260246000fd5b600082610734576107346106e5565b500690565b600082198211156106a7576106a761066d565b60008282101561075e5761075e61066d565b500390565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220a87267a89cd300367a9668afdc12feefb5170c9c82429e0ac71c77434d235ff164736f6c634300080c0033";

export class Integers__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Integers> {
    return super.deploy(overrides || {}) as Promise<Integers>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Integers {
    return super.attach(address) as Integers;
  }
  connect(signer: Signer): Integers__factory {
    return super.connect(signer) as Integers__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntegersInterface {
    return new utils.Interface(_abi) as IntegersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Integers {
    return new Contract(address, _abi, signerOrProvider) as Integers;
  }
}
