import { SendEmail } from "../classes/send-email.class";

describe("send email Node", () => {
  it("should log sender and receiver when executed", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const node = new SendEmail("a@example.com", "b@example.com");

    node.execute();

    expect(spy).toHaveBeenCalledWith("Sending Email from a@example.com to b@example.com");

    spy.mockRestore();
  });
});
