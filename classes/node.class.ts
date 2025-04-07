export abstract class Node {
  next?: Node;

  protected abstract run(context: any): void;

  execute(context: any = {}): void {
    this.run(context);
    if (this.next) {
      this.next.execute(context);
    }
  }

  abstract toJSON(): any;
}