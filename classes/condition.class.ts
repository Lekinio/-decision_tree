import { NodeType } from "../types/node.type";
import { Node } from "./node.class";

export class Condition extends Node {
  constructor(
    public expression: string,
    public trueAction?: Node,
    public falseAction?: Node
  ) { super(); }

  protected run(context: any): void {
    let result: boolean;
    try {
      const func = new Function("context", `with(context) { return (${this.expression}); }`);
      result = !!func(context);
    } catch (err) {
      console.error(`Error evaluating expression \"${this.expression}\":`, err);
      result = false;
    }
    if (result && this.trueAction) {
      this.trueAction.execute(context);
    } else if (!result && this.falseAction) {
      this.falseAction.execute(context);
    }
  }

  toJSON() {
    return {
      type: NodeType.CONDITION,
      expression: this.expression,
      ...(this.trueAction ? { trueAction: this.trueAction.toJSON() } : {}),
      ...(this.falseAction ? { falseAction: this.falseAction.toJSON() } : {}),
      ...(this.next ? { next: this.next.toJSON() } : {})
    };
  }
}