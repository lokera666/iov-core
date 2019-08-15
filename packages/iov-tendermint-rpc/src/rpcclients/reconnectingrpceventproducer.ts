/* tslint:disable:readonly-keyword no-object-mutation */
import { JsonRpcRequest } from "@iov/jsonrpc";
import { ReconnectingSocket } from "@iov/socket";
import { Listener, Producer } from "xstream";

import { SubscriptionEvent } from "./rpcclient";
import { RpcEventProducer } from "./rpceventproducer";

export class ReconnectingRpcEventProducer implements Producer<SubscriptionEvent> {
  private readonly request: JsonRpcRequest;
  private readonly socket: ReconnectingSocket;

  private producer: RpcEventProducer;
  private listener?: Listener<SubscriptionEvent>;
  private stopped: boolean = false;

  public constructor(request: JsonRpcRequest, socket: ReconnectingSocket) {
    this.request = request;
    this.socket = socket;
    this.producer = new RpcEventProducer(this.request, this.socket);
  }

  public start(listener: Listener<SubscriptionEvent>): void {
    this.listener = listener;
    this.producer.start(this.listener);
  }

  public stop(): void {
    this.producer.stop();
    this.stopped = true;
  }

  public reconnect(): void {
    if (!this.stopped) {
      this.producer.stop();
      this.producer = new RpcEventProducer(this.request, this.socket);
      if (this.listener) {
        this.producer.start(this.listener);
      }
    }
  }
}
