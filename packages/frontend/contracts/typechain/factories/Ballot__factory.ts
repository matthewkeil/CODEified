/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ballot, BallotInterface } from "../Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegatedTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "DelegateWeight",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegatedTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "VoterDelegate",
    type: "event",
  },
  {
    inputs: [],
    name: "chairperson",
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
        name: "_delegate",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "delegates",
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
        name: "voterAddress",
        type: "address",
      },
    ],
    name: "getDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
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
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegatedTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015013803806200150183398181016040528101906200003791906200025b565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200019a576003604051806040016040528084848151811062000133577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080620001919062000342565b915050620000e2565b505062000419565b6000620001b9620001b384620002c9565b620002a0565b90508083825260208201905082856020860282011115620001d957600080fd5b60005b858110156200020d5781620001f2888262000244565b845260208401935060208301925050600181019050620001dc565b5050509392505050565b600082601f8301126200022957600080fd5b81516200023b848260208601620001a2565b91505092915050565b6000815190506200025581620003ff565b92915050565b6000602082840312156200026e57600080fd5b600082015167ffffffffffffffff8111156200028957600080fd5b620002978482850162000217565b91505092915050565b6000620002ac620002bf565b9050620002ba82826200030c565b919050565b6000604051905090565b600067ffffffffffffffff821115620002e757620002e6620003bf565b5b602082029050602081019050919050565b6000819050919050565b6000819050919050565b6200031782620003ee565b810181811067ffffffffffffffff82111715620003395762000338620003bf565b5b80604052505050565b60006200034f8262000302565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000385576200038462000390565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200040a81620002f8565b81146200041657600080fd5b50565b6110d880620004296000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063544d85641161005b578063544d8564146101285780635c19a95c146101445780639e7b8d6114610160578063a3ec138d1461017c57610088565b80630121b93f1461008d578063013cf08b146100a957806327dd1b00146100da5780632e4176cf1461010a575b600080fd5b6100a760048036038101906100a29190610bf1565b6101b0565b005b6100c360048036038101906100be9190610bf1565b61031d565b6040516100d1929190610d57565b60405180910390f35b6100f460048036038101906100ef9190610bb5565b610351565b6040516101019190610d05565b60405180910390f35b61011261039f565b60405161011f9190610d05565b60405180910390f35b610142600480360381019061013d9190610b8c565b6103c3565b005b61015e60048036038101906101599190610b8c565b610527565b005b61017a60048036038101906101759190610b8c565b61084b565b005b61019660048036038101906101919190610b8c565b610a38565b6040516101a7959493929190610e20565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154141561023b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023290610de0565b60405180910390fd5b8060010160009054906101000a900460ff161561028d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028490610da0565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600301819055508060000154600383815481106102f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160010160008282546103129190610e84565b925050819055505050565b6003818154811061032d57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b6002602052816000526040600020818154811061036d57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104e6577f6a03fc9cca94c15fb7ac5b63b3e6753ce8528bddf8ef2a30803322aa69139681828260010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516104d993929190610d20565b60405180910390a1610523565b7f6a03fc9cca94c15fb7ac5b63b3e6753ce8528bddf8ef2a30803322aa691396818260008060405161051a93929190610d20565b60405180910390a15b5050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156105bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b390610da0565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561062b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062290610dc0565b60405180910390fd5b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050146107bd57600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610847565b60405180602001604052803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020906001610845929190610abb565b505b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d090610d80565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615610969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096090610da0565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154146109ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e590610e00565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154905085565b828054828255906000526020600020908101928215610b34579160200282015b82811115610b335782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610adb565b5b509050610b419190610b45565b5090565b5b80821115610b5e576000816000905550600101610b46565b5090565b600081359050610b7181611074565b92915050565b600081359050610b868161108b565b92915050565b600060208284031215610b9e57600080fd5b6000610bac84828501610b62565b91505092915050565b60008060408385031215610bc857600080fd5b6000610bd685828601610b62565b9250506020610be785828601610b77565b9150509250929050565b600060208284031215610c0357600080fd5b6000610c1184828501610b77565b91505092915050565b610c2381610eda565b82525050565b610c3281610eec565b82525050565b610c4181610ef8565b82525050565b6000610c54602c83610e73565b9150610c5f82610f5b565b604082019050919050565b6000610c77601783610e73565b9150610c8282610faa565b602082019050919050565b6000610c9a601783610e73565b9150610ca582610fd3565b602082019050919050565b6000610cbd601583610e73565b9150610cc882610ffc565b602082019050919050565b6000610ce0602e83610e73565b9150610ceb82611025565b604082019050919050565b610cff81610f22565b82525050565b6000602082019050610d1a6000830184610c1a565b92915050565b6000606082019050610d356000830186610c1a565b610d426020830185610c1a565b610d4f6040830184610c1a565b949350505050565b6000604082019050610d6c6000830185610c38565b610d796020830184610cf6565b9392505050565b60006020820190508181036000830152610d9981610c47565b9050919050565b60006020820190508181036000830152610db981610c6a565b9050919050565b60006020820190508181036000830152610dd981610c8d565b9050919050565b60006020820190508181036000830152610df981610cb0565b9050919050565b60006020820190508181036000830152610e1981610cd3565b9050919050565b600060a082019050610e356000830188610cf6565b610e426020830187610c29565b610e4f6040830186610c1a565b610e5c6060830185610c1a565b610e696080830184610cf6565b9695505050505050565b600082825260208201905092915050565b6000610e8f82610f22565b9150610e9a83610f22565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ecf57610ece610f2c565b5b828201905092915050565b6000610ee582610f02565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f6e6c7920746865206368616972706572736f6e2063616e206769766520726960008201527f67687420746f20766f74652e0000000000000000000000000000000000000000602082015250565b7f566f7465722068617320616c726561647920766f746564000000000000000000600082015250565b7f43616e6e6f742064656c656761746520746f2073656c66000000000000000000600082015250565b7f48617665206e6f20726967687420746f20766f74650000000000000000000000600082015250565b7f566f7465722068617320616c7265616479206265656e20676976656e2074686560008201527f20726967687420746f20766f7465000000000000000000000000000000000000602082015250565b61107d81610eda565b811461108857600080fd5b50565b61109481610f22565b811461109f57600080fd5b5056fea264697066735822122095632b649fa55dc03a313f01088425b23a63dd214d243d1e735ffbfb9f87c64f64736f6c63430008040033";

export class Ballot__factory extends ContractFactory {
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
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ballot> {
    return super.deploy(proposalNames, overrides || {}) as Promise<Ballot>;
  }
  getDeployTransaction(
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}
