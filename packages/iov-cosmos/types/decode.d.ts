import {
  Amount,
  ChainId,
  Fee,
  FullSignature,
  Identity,
  Nonce,
  PubkeyBundle,
  SendTransaction,
  SignatureBytes,
  SignedTransaction,
} from "@iov/bcp";
import amino from "@tendermint/amino-js";
export declare function decodePubkey(pubkey: amino.PubKey): PubkeyBundle;
export declare function decodeSignature(signature: string): SignatureBytes;
export declare function decodeFullSignature(signature: amino.StdSignature, nonce: number): FullSignature;
export declare function decodeAmount(amount: amino.Coin): Amount;
export declare function parseMsg(msg: amino.Msg): SendTransaction;
export declare function parseFee(fee: amino.StdFee): Fee;
export declare function parseCreator(signature: amino.StdSignature, chainId: ChainId): Identity;
export declare function parseTx(tx: amino.Tx, chainId: ChainId, nonce: Nonce): SignedTransaction;
