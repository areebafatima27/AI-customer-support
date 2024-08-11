import { useState } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import "./App.css";

function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDgysN0JNaV0Byq9FVKYK4H1AVzp-odQw0",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });

    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return (
    <Box className="container">
      <h1 className="heading">Welcome To your Chatbot</h1>
      <TextField
        value={question}
        label="Ask question"
        multiline
        rows={4}
        onChange={(e) => setQuestion(e.target.value)}
        className="textField"
      />
      <button onClick={generateAnswer}>Generate answer</button>

      <Box variant="contained" className="answer">
        <p>{answer}</p>
      </Box>
    </Box>
  );
}

export default Home;
