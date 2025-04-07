import { Condition } from "../classes/condition.class";
import { SendSms } from "../classes/send-sms.class";

describe("condition Node", () => {
  it("executes trueAction if expression is true", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const trueNode = new SendSms("111");
    const node = new Condition("value > 5", trueNode);

    node.execute({ value: 10 });

    expect(spy).toHaveBeenCalledWith("Sending SMS to 111");
    spy.mockRestore();
  });

  it("executes false Action if expression is false", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const falseNode = new SendSms("222");
    const node = new Condition("value > 5", undefined, falseNode);

    node.execute({ value: 3 });

    expect(spy).toHaveBeenCalledWith("Sending SMS to 222");
    spy.mockRestore();
  });
});
