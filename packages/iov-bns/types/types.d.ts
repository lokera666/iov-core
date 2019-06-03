import * as Long from "long";
import { As } from "type-tagger";
import { Address, Algorithm, ChainId, FullSignature, LightTransaction, PublicKeyBundle, SendTransaction, SignatureBytes, SwapAbortTransaction, SwapClaimTransaction, SwapOfferTransaction } from "@iov/bcp";
import { Int53 } from "@iov/encoding";
import * as codecImpl from "./generated/codecimpl";
export interface ChainAddressPair {
    readonly chainId: ChainId;
    readonly address: Address;
}
export interface BnsUsernameNft {
    readonly id: string;
    readonly owner: Address;
    readonly addresses: readonly ChainAddressPair[];
}
export interface BnsUsernamesByUsernameQuery {
    readonly username: string;
}
export interface BnsUsernamesByOwnerAddressQuery {
    readonly owner: Address;
}
export interface BnsUsernamesByChainAndAddressQuery {
    readonly chain: ChainId;
    readonly address: Address;
}
export declare type BnsUsernamesQuery = BnsUsernamesByUsernameQuery | BnsUsernamesByOwnerAddressQuery | BnsUsernamesByChainAndAddressQuery;
export declare function isBnsUsernamesByUsernameQuery(query: BnsUsernamesQuery): query is BnsUsernamesByUsernameQuery;
export declare function isBnsUsernamesByOwnerAddressQuery(query: BnsUsernamesQuery): query is BnsUsernamesByOwnerAddressQuery;
export declare function isBnsUsernamesByChainAndAddressQuery(query: BnsUsernamesQuery): query is BnsUsernamesByChainAndAddressQuery;
export declare type PrivateKeyBytes = Uint8Array & As<"private-key">;
export interface PrivateKeyBundle {
    readonly algo: Algorithm;
    readonly data: PrivateKeyBytes;
}
export interface Result {
    readonly key: Uint8Array;
    readonly value: Uint8Array;
}
export interface Keyed {
    readonly _id: Uint8Array;
}
export interface Decoder<T extends {}> {
    readonly decode: (data: Uint8Array) => T;
}
export declare function decodePubkey(publicKey: codecImpl.crypto.IPublicKey): PublicKeyBundle;
export declare function decodePrivkey(privateKey: codecImpl.crypto.IPrivateKey): PrivateKeyBundle;
export declare function decodeSignature(signature: codecImpl.crypto.ISignature): SignatureBytes;
/**
 * Decodes a protobuf int field (int32/uint32/int64/uint64) into a JavaScript
 * number.
 */
export declare function asIntegerNumber(maybeLong: Long | number | null | undefined): number;
export declare function asInt53(input: Long | number | null | undefined): Int53;
export declare function ensure<T>(maybe: T | null | undefined, msg?: string): T;
export declare function decodeFullSig(sig: codecImpl.sigs.IStdSignature): FullSignature;
export interface AddAddressToUsernameTx extends LightTransaction {
    readonly kind: "bns/add_address_to_username";
    /** the username to be updated, must exist on chain */
    readonly username: string;
    readonly payload: ChainAddressPair;
}
export interface Participant {
    readonly address: Address;
    readonly power: number;
}
export interface CreateMultisignatureTx extends LightTransaction {
    readonly kind: "bns/create_multisignature_contract";
    readonly participants: readonly Participant[];
    readonly activationThreshold: number;
    readonly adminThreshold: number;
}
export interface RegisterUsernameTx extends LightTransaction {
    readonly kind: "bns/register_username";
    readonly username: string;
    readonly addresses: readonly ChainAddressPair[];
}
export interface RemoveAddressFromUsernameTx extends LightTransaction {
    readonly kind: "bns/remove_address_from_username";
    /** the username to be updated, must exist on chain */
    readonly username: string;
    readonly payload: ChainAddressPair;
}
export interface UpdateMultisignatureTx extends LightTransaction {
    readonly kind: "bns/update_multisignature_contract";
    readonly contractId: Uint8Array;
    readonly participants: readonly Participant[];
    readonly activationThreshold: number;
    readonly adminThreshold: number;
}
export declare type BnsTx = SendTransaction | SwapOfferTransaction | SwapClaimTransaction | SwapAbortTransaction | AddAddressToUsernameTx | CreateMultisignatureTx | RegisterUsernameTx | RemoveAddressFromUsernameTx | UpdateMultisignatureTx;
export declare function isBnsTx(transaction: LightTransaction): transaction is BnsTx;
export declare function isAddAddressToUsernameTx(transaction: LightTransaction): transaction is AddAddressToUsernameTx;
export declare function isCreateMultisignatureTx(transaction: LightTransaction): transaction is CreateMultisignatureTx;
export declare function isRegisterUsernameTx(transaction: LightTransaction): transaction is RegisterUsernameTx;
export declare function isRemoveAddressFromUsernameTx(transaction: LightTransaction): transaction is RemoveAddressFromUsernameTx;
export declare function isUpdateMultisignatureTx(transaction: LightTransaction): transaction is UpdateMultisignatureTx;
