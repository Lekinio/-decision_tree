import { Loop } from "../classes/loop.class";
import { SendSms } from "../classes/send-sms.class";

describe("loop Node", () => {
  it("executes action N times", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const action = new SendSms("123");
    const node = new Loop(3, action);

    node.execute();

    expect(spy).toHaveBeenCalledTimes(3);
    spy.mockRestore();
  });
});
