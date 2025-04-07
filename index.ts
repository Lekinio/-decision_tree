import bodyParser from "body-parser";
import express from "express";
import { CreateNodeService } from "./services/create-node.service";


const app = express();
app.use(bodyParser.json());
 const nodeService = new CreateNodeService();

app.get("/", (_req, res) => {
  res.send("hello world");
});

app.post("/execute", (req, res) => {
  try {
    console.log("\n--- executing Tree from Request Body ---");
   
    const node = nodeService.createNode(req.body);

    node.execute();
    res.status(200).send("decision tree executed successfully.");
  } catch (err) {
    console.error("execution failed:", err);
    res.status(500).send("failed to execute decision tree.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`sserver is running on port ${PORT}`);
});
