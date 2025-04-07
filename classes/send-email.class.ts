import { NodeType } from "../types/node.type";
import { Node } from "./node.class";

export class SendEmail extends Node {
  constructor(public from: string, public to: string) { super(); }

  protected run(): void {
    console.log(`Sending Email from ${this.from} to ${this.to}`);
  }

  toJSON() {
    return {
      type: NodeType.SEND_EMAIL,
      from: this.from,  
      to: this.to,
      ...(this.next ? { next: this.next.toJSON() } : {})
    };
  }
}