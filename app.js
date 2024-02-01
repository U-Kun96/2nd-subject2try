import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "뭘 봐 임마" });
});

app.listen(8000, () => {
  console.log(`8000번 포트에서 감자 서버 작동 중!`);
});
