/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vote, VoteInterface } from "../Vote";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum VoteResult",
        name: "_officialResult",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_publicity",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "certifier",
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
        internalType: "bool",
        name: "_publicity",
        type: "bool",
      },
    ],
    name: "changePublicity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOfficialResult",
    outputs: [
      {
        internalType: "enum VoteResult",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issue",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "publicity",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "result",
    outputs: [
      {
        internalType: "enum VoteResult",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200106238038062001062833981810160405281019062000037919062000450565b620000576200004b6200011460201b60201c565b6200011c60201b60201c565b82600260146101000a81548160ff02191690836003811115620000a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550620000b982620001e060201b60201c565b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200010b81620002cc60201b60201c565b50505062000646565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260166101000a81548160ff021916908315150217905550600260169054906101000a900460ff16156200027657600260149054906101000a900460ff16600260156101000a81548160ff021916908360038111156200026b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550620002c9565b6000600260156101000a81548160ff02191690836003811115620002c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b50565b620002dc6200011460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000302620003e260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200035b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003529062000516565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620003ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003c590620004f4565b60405180910390fd5b620003df816200011c60201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000815190506200041c8162000601565b92915050565b60008151905062000433816200061b565b92915050565b6000815190506200044a8162000635565b92915050565b6000806000606084860312156200046657600080fd5b6000620004768682870162000439565b9350506020620004898682870162000422565b92505060406200049c868287016200040b565b9150509250925092565b6000620004b560268362000538565b9150620004c28262000589565b604082019050919050565b6000620004dc60208362000538565b9150620004e982620005d8565b602082019050919050565b600060208201905081810360008301526200050f81620004a6565b9050919050565b600060208201905081810360008301526200053181620004cd565b9050919050565b600082825260208201905092915050565b6000620005568262000569565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6200060c8162000549565b81146200061857600080fd5b50565b62000626816200055d565b81146200063257600080fd5b50565b600481106200064357600080fd5b50565b610a0c80620006566000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063828e923511610066578063828e9235146100fa5780638da5cb5b14610118578063c731b96914610136578063d383f64614610154578063f2fde38b1461017257610093565b8063120c7efd146100985780635202a91f146100b657806365372147146100d2578063715018a6146100f0575b600080fd5b6100a061018e565b6040516100ad919061079f565b60405180910390f35b6100d060048036038101906100cb91906106e0565b6101b4565b005b6100da61023c565b6040516100e791906107d5565b60405180910390f35b6100f861024f565b005b6101026102d7565b60405161010f91906107d5565b60405180910390f35b61012061037f565b60405161012d919061079f565b60405180910390f35b61013e6103a8565b60405161014b91906107ba565b60405180910390f35b61015c6103bb565b604051610169919061079f565b60405180910390f35b61018c600480360381019061018791906106b7565b6103e1565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101bc6104d9565b73ffffffffffffffffffffffffffffffffffffffff166101da61037f565b73ffffffffffffffffffffffffffffffffffffffff1614610230576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022790610810565b60405180910390fd5b610239816104e1565b50565b600260159054906101000a900460ff1681565b6102576104d9565b73ffffffffffffffffffffffffffffffffffffffff1661027561037f565b73ffffffffffffffffffffffffffffffffffffffff16146102cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c290610810565b60405180910390fd5b6102d560006105c9565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561036a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036190610830565b60405180910390fd5b600260149054906101000a900460ff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260169054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103e96104d9565b73ffffffffffffffffffffffffffffffffffffffff1661040761037f565b73ffffffffffffffffffffffffffffffffffffffff161461045d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045490610810565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c4906107f0565b60405180910390fd5b6104d6816105c9565b50565b600033905090565b80600260166101000a81548160ff021916908315150217905550600260169054906101000a900460ff161561057457600260149054906101000a900460ff16600260156101000a81548160ff0219169083600381111561056a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506105c6565b6000600260156101000a81548160ff021916908360038111156105c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008135905061069c816109a8565b92915050565b6000813590506106b1816109bf565b92915050565b6000602082840312156106c957600080fd5b60006106d78482850161068d565b91505092915050565b6000602082840312156106f257600080fd5b6000610700848285016106a2565b91505092915050565b61071281610861565b82525050565b61072181610873565b82525050565b610730816108b2565b82525050565b6000610743602683610850565b915061074e826108f3565b604082019050919050565b6000610766602083610850565b915061077182610942565b602082019050919050565b6000610789601c83610850565b91506107948261096b565b602082019050919050565b60006020820190506107b46000830184610709565b92915050565b60006020820190506107cf6000830184610718565b92915050565b60006020820190506107ea6000830184610727565b92915050565b6000602082019050818103600083015261080981610736565b9050919050565b6000602082019050818103600083015261082981610759565b9050919050565b600060208201905081810360008301526108498161077c565b9050919050565b600082825260208201905092915050565b600061086c82610892565b9050919050565b60008115159050919050565b600081905061088d82610994565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108bd8261087f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4973737565206d757374206765744f6666696369616c526573756c7400000000600082015250565b600481106109a5576109a46108c4565b5b50565b6109b181610861565b81146109bc57600080fd5b50565b6109c881610873565b81146109d357600080fd5b5056fea2646970667358221220b748fce56e1ebace0e2cd05b5158aa7daab08f602a6d4765961fa819d63b4f9b64736f6c63430008040033";

export class Vote__factory extends ContractFactory {
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
    _officialResult: BigNumberish,
    _publicity: boolean,
    _voter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vote> {
    return super.deploy(
      _officialResult,
      _publicity,
      _voter,
      overrides || {}
    ) as Promise<Vote>;
  }
  getDeployTransaction(
    _officialResult: BigNumberish,
    _publicity: boolean,
    _voter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _officialResult,
      _publicity,
      _voter,
      overrides || {}
    );
  }
  attach(address: string): Vote {
    return super.attach(address) as Vote;
  }
  connect(signer: Signer): Vote__factory {
    return super.connect(signer) as Vote__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VoteInterface {
    return new utils.Interface(_abi) as VoteInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vote {
    return new Contract(address, _abi, signerOrProvider) as Vote;
  }
}
