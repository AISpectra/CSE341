console.log("server.js running...");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

// Data EXACTLY as expected by the frontend
const professionalData = {
  professionalName: "Samuel Expósito Ruiz",

  // Base64 image (optional for the assignment)
  // Leaving it empty is acceptable
  base64Image: "",

  nameLink: {
    firstName: "Samuel",
    url: "https://emotionalsupportspectra.com"
  },

  primaryDescription:
    "I am a software development student and aspiring full-stack developer with a strong focus on backend technologies and API design.",

  workDescription1:
    "I am currently studying web development and software engineering, working with JavaScript, Node.js, and RESTful APIs.",

  workDescription2:
    "I am also building personal projects such as Spectra, a web platform focused on emotional well-being and user-centered digital experiences.",

  linkTitleText: "Find me online:",

  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com"
  },

  githubLink: {
    text: "GitHub",
    link: "https://github.com/AISpectra"
  }
};

// Endpoint used by the frontend
app.get("/professional", (req, res) => {
  res.json(professionalData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

