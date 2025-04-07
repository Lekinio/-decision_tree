import { CreateNodeService } from "../services/create-node.service";
import { NodeJson, NodeType } from "../types/node.type";

describe("Full Decision Tree Execution", () => {
  it("runs a sample tree with condition and SMS", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();

    const tree: NodeJson = {
      type: NodeType.CONDITION,
      expression: "user === 'alice'",
      trueAction: { type: NodeType.SEND_SMS, phone: "999" },
      falseAction: { type: NodeType.SEND_SMS, phone: "000" }
    };

    const nodeService = new CreateNodeService();
    const node = nodeService.createNode(tree);
    
    node.execute({ user: "alice" });

    expect(spy).toHaveBeenCalledWith("Sending SMS to 999");

    spy.mockRestore();
  });
});