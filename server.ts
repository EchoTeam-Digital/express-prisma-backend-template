import express from "express";
import cors from "cors";
import helmet from "helmet";
const app = express();
const port = process.env.PORT || 5020;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Server Is Online").status(200);
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});

export default app;
