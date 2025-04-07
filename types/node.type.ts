export enum NodeType {
  SEND_SMS = "SEND_SMS",
  SEND_EMAIL = "SEND_EMAIL",
  CONDITION = "CONDITION",
  LOOP = "LOOP",    
}


export type NodeJson =
  | { type: NodeType.SEND_SMS; phone: string; next?: NodeJson }
  | { type: NodeType.SEND_EMAIL; from: string; to: string; next?: NodeJson }
  | { type: NodeType.CONDITION; expression: string; trueAction?: NodeJson; falseAction?: NodeJson; next?: NodeJson }
  | { type: NodeType.LOOP; count: number; action?: NodeJson; next?: NodeJson };