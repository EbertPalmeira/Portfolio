import { Grid, Typography, Box, Avatar } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import Quiz from "../../imgs/quiz.png";
import Dash from "../../imgs/dash.png";
import Ubs from "../../imgs/ubs.png";
import lojaProdutos from "../../imgs/abencoado3.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../App.css";

const Projetos = () => {
  useEffect(() => {
    AOS.init({
      duration: 7000,
      once: true,
    });
  }, []);

  return (
    <Grid sx={{ marginTop: "150px" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2em",
          alignItems: "center",
          marginBottom: "50px",
        }}
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Projetos
        <Typography
          sx={{ color: "#986dff", fontSize: "1.2em", textAlign: "center" }}
        >
          .
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "500px 500px",
          justifyContent: "center",
          gap: "50px",
          padding: "50px",

          "@media (max-width:1200px)": {
            flexDirection: "column",
            gridTemplateColumns: "1fr",
          },
          "@media (max-width:500px)": {
            gridTemplateColumns: "350px",
          },
        }}
      >
        {/* QuizWeb */}
        <Grid data-aos="zoom-in" data-aos-duration="3000">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
              border: "4px solid #1f1f1f",
              padding: "20px",
              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 0px 13px 5px #1f1f1f",
              },
            }}
          >
            {/* Wrapper para Avatar com emoji */}
            <Box
              sx={{
                position: "relative",
                "&:hover .emoji": {
                  opacity: 1, // Mostra o emoji ao passar o mouse
                },
              }}
            >
              {/* Avatar */}
              <Avatar
                src={Quiz}
                sx={{
                  width: "200px",
                  height: "250px",
                  borderRadius: 0,

                  "@media (max-width:500px)": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                  },
                }}
              />

              {/* Emoji no centro */}
              <Box
                component="a"
                href="https://quizebertdeveloper.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="emoji"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Centraliza no meio
                  fontSize: "50px",
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0, // Esconde o emoji por padrão
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.5)", // Zoom ao passar o mouse no emoji
                  },
                }}
              >
                <FaExternalLinkAlt color="#4682B4	" className="icon" />
              </Box>
            </Box>

            <Typography sx={{ color: "#fff", fontSize: "1.2em" }}>
              QuizWeb
            </Typography>
          </Box>
        </Grid>

        {/* Dashboard */}
        <Grid data-aos="zoom-in" data-aos-duration="3000">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
              border: "4px solid #1f1f1f",
              padding: "20px",

              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 0px 13px 5px #1f1f1f",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&:hover .emoji": {
                  opacity: 1, // Mostra o emoji ao passar o mouse
                },
              }}
            >
              {/* Avatar */}
              <Avatar
                src={Dash}
                sx={{
                  width: "420px",
                  height: "250px",
                  borderRadius: 0,

                  "@media (max-width:500px)": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                  },
                }}
              />

              {/* Emoji no centro */}
              <Box
                component="a"
                href="https://www.linkedin.com/posts/ebert-palmeira-dev_react-typescript-webdevelopment-activity-7236910703205355521-Fr9F?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="emoji"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "50px",
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0, // Esconde o emoji por padrão
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.5)",
                  },
                }}
              >
                <FaExternalLinkAlt color="#4682B4	" className="icon" />
              </Box>
            </Box>

            <Typography sx={{ color: "#fff", fontSize: "1.2em" }}>
              Dashboard Financeiro
            </Typography>
          </Box>
        </Grid>

        {/* Ubs */}
        <Grid data-aos="zoom-in" data-aos-duration="3000">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
              border: "4px solid #1f1f1f",
              padding: "20px",

              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 0px 13px 5px #1f1f1f",
              },
            }}
          >
            {/* Wrapper para Avatar com emoji */}
            <Box
              sx={{
                position: "relative",
                "&:hover .emoji": {
                  opacity: 1,
                },
              }}
            >
              {/* Avatar */}
              <Avatar
                src={Ubs}
                sx={{
                  width: "420px",
                  height: "250px",
                  borderRadius: 0,

                  "@media (max-width:500px)": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                  },
                }}
              />

              {/* Emoji no centro */}
              <Box
                component="a"
                href="https://www.linkedin.com/posts/ebert-palmeira-dev_react-typescript-materialui-activity-7233233472801112064-n4kE?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="emoji"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "50px",
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0, // Esconde o emoji por padrão
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.5)",
                  },
                }}
              >
                <FaExternalLinkAlt color="#4682B4	" className="icon" />
              </Box>
            </Box>
            <Typography sx={{ color: "#fff", fontSize: "1.2em" }}>
              Cadastro de Pacientes
            </Typography>
          </Box>
        </Grid>

        {/* SISTEMA DE PRODUTOS */}
        <Grid data-aos="zoom-in" data-aos-duration="3000">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
              border: "4px solid #1f1f1f",
              padding: "20px",
              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 0px 13px 5px #1f1f1f",
              },
            }}
          >
            {/* Wrapper para Avatar com emoji */}
            <Box
              sx={{
                position: "relative",
                "&:hover .emoji": {
                  opacity: 1,
                },
              }}
            >
              {/* Avatar */}
              <Avatar
                src={lojaProdutos}
                sx={{
                  width: "450px",
                  height: "250px",
                  borderRadius: 0,

                  "@media (max-width:500px)": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                  },
                }}
              />

              {/* Emoji no centro */}
              <Box
                component="a"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7332738717578592256/"
                target="_blank"
                rel="noopener noreferrer"
                className="emoji"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "50px",
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.5)",
                  },
                }}
              >
                <FaExternalLinkAlt color="#4682B4	" className="icon" />
              </Box>
            </Box>

            <Typography sx={{ color: "#fff", fontSize: "1.2em" }}>
              Organizador de Loja
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Projetos;
