export { riseCodec } from "./risecodec";
export { generateNonce, RiseConnection } from "./riseconnection";
export { createRiseConnector } from "./riseconnector";
import { Derivation } from "@iov/dpos";
/**
 * RISE-specific passphrase to Ed25519 keypair derivation
 *
 * "passphrase" is RISE's word for an autogenerated 12 word english BIP39 mnemonic
 * encoded as a string. Since the BIP39 property is not used for anything but validation
 * in the user interface we work with plain strings here.
 */
export declare const passphraseToKeypair: typeof Derivation.passphraseToKeypair;
