import { SendSms } from "../classes/send-sms.class";

describe("Send Sms Node", () => {
  it("should log the phone number when executed", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const node = new SendSms("+123456");

    node.execute();

    expect(spy).toHaveBeenCalledWith("Sending SMS to +123456");

    spy.mockRestore();
  });
});
