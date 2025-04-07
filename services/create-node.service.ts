import { Condition } from "../classes/condition.class";
import { Loop } from "../classes/loop.class";
import { Node } from "../classes/node.class";
import { SendEmail } from "../classes/send-email.class";
import { SendSms } from "../classes/send-sms.class";
import { NodeJson, NodeType } from "../types/node.type";

export class CreateNodeService {
  constructor() {}

  createNode(data: NodeJson): Node {
     let node: Node;
  switch (data.type) {
    case NodeType.SEND_SMS:
      node = new SendSms(data.phone);
      break;
    case NodeType.SEND_EMAIL:
      node = new SendEmail(data.from, data.to);
      break;
    case NodeType.CONDITION:
      node = new Condition(
        data.expression,
        data.trueAction ? this.createNode(data.trueAction) : undefined,
        data.falseAction ? this.createNode(data.falseAction) : undefined
      );
      break;
    case NodeType.LOOP:
      node = new Loop(
        data.count,
        data.action ? this.createNode(data.action) : undefined
      );
      break;
    default:
      throw new Error(`Unknown node type`);
  }
  if (data.next) {
    node.next = this.createNode(data.next);
  }
  return node;
  }
}