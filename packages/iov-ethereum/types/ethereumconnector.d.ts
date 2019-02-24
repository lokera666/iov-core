import { ChainConnector, ChainId } from "@iov/bcp-types";
import { EthereumConnectionOptions } from "./ethereumconnection";
/**
 * A helper to connect to a ethereum-based chain at a given url
 *
 * @param options An EthereumConnectionOptions object. If undefined, all possible options are default.
 */
export declare function ethereumConnector(url: string, options: EthereumConnectionOptions | undefined, expectedChainId?: ChainId): ChainConnector;
