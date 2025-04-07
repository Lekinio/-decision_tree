import { NodeType } from "../types/node.type";
import { Node } from "./node.class";
export class Loop extends Node {
  constructor(public count: number, public action?: Node) { super(); }

  protected run(context: any): void {
    const previousIter = context.hasOwnProperty("iteration") ? context.iteration : undefined;
    for (let i = 1; i <= this.count; i++) {
      context.iteration = i;
      if (this.action) {
        this.action.execute(context);
      }
    }
    if (previousIter !== undefined) {
      context.iteration = previousIter;
    } else {
      delete context.iteration;
    }
  }

  toJSON() {
    return {
      type: NodeType.LOOP,
      count: this.count,
      ...(this.action ? { action: this.action.toJSON() } : {}),
      ...(this.next ? { next: this.next.toJSON() } : {})
    };
  }
}