import { NodeType } from "../types/node.type";
import { Node } from "./node.class";

export class SendSms extends Node {
  constructor(public phone: string) { super(); }

  protected run(): void {
    console.log(`Sending SMS to ${this.phone}`);
  }

  toJSON() {
    return {
      type: NodeType.SEND_SMS,
      phone: this.phone,
      ...(this.next ? { next: this.next.toJSON() } : {})
    };
  }
}