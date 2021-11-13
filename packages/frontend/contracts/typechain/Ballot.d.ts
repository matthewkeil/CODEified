/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BallotInterface extends ethers.utils.Interface {
  functions: {
    "chairperson()": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "delegates(address,uint256)": FunctionFragment;
    "getDelegate(address)": FunctionFragment;
    "giveRightToVote(address)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "vote(uint256)": FunctionFragment;
    "voters(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "chairperson",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getDelegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "giveRightToVote",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vote", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "voters", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "chairperson",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "giveRightToVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;

  events: {
    "DelegateWeight(address,address,address)": EventFragment;
    "VoterDelegate(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateWeight"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoterDelegate"): EventFragment;
}

export type DelegateWeightEvent = TypedEvent<
  [string, string, string] & {
    voter: string;
    delegatedTo: string;
    delegate: string;
  }
>;

export type VoterDelegateEvent = TypedEvent<
  [string, string, string] & {
    voter: string;
    delegatedTo: string;
    delegate: string;
  }
>;

export class Ballot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BallotInterface;

  functions: {
    chairperson(overrides?: CallOverrides): Promise<[string]>;

    delegate(
      _delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegates(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDelegate(
      voterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    giveRightToVote(
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    vote(
      proposal: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string, string, BigNumber] & {
        weight: BigNumber;
        voted: boolean;
        delegatedTo: string;
        delegate: string;
        vote: BigNumber;
      }
    >;
  };

  chairperson(overrides?: CallOverrides): Promise<string>;

  delegate(
    _delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegates(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getDelegate(
    voterAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  giveRightToVote(
    voter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

  vote(
    proposal: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voters(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, string, string, BigNumber] & {
      weight: BigNumber;
      voted: boolean;
      delegatedTo: string;
      delegate: string;
      vote: BigNumber;
    }
  >;

  callStatic: {
    chairperson(overrides?: CallOverrides): Promise<string>;

    delegate(_delegate: string, overrides?: CallOverrides): Promise<void>;

    delegates(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDelegate(voterAddress: string, overrides?: CallOverrides): Promise<void>;

    giveRightToVote(voter: string, overrides?: CallOverrides): Promise<void>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    vote(proposal: BigNumberish, overrides?: CallOverrides): Promise<void>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string, string, BigNumber] & {
        weight: BigNumber;
        voted: boolean;
        delegatedTo: string;
        delegate: string;
        vote: BigNumber;
      }
    >;
  };

  filters: {
    "DelegateWeight(address,address,address)"(
      voter?: null,
      delegatedTo?: null,
      delegate?: null
    ): TypedEventFilter<
      [string, string, string],
      { voter: string; delegatedTo: string; delegate: string }
    >;

    DelegateWeight(
      voter?: null,
      delegatedTo?: null,
      delegate?: null
    ): TypedEventFilter<
      [string, string, string],
      { voter: string; delegatedTo: string; delegate: string }
    >;

    "VoterDelegate(address,address,address)"(
      voter?: null,
      delegatedTo?: null,
      delegate?: null
    ): TypedEventFilter<
      [string, string, string],
      { voter: string; delegatedTo: string; delegate: string }
    >;

    VoterDelegate(
      voter?: null,
      delegatedTo?: null,
      delegate?: null
    ): TypedEventFilter<
      [string, string, string],
      { voter: string; delegatedTo: string; delegate: string }
    >;
  };

  estimateGas: {
    chairperson(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(
      _delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegates(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDelegate(
      voterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    giveRightToVote(
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      proposal: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chairperson(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegate(
      _delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDelegate(
      voterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    giveRightToVote(
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      proposal: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
