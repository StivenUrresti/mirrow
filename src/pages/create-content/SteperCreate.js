import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LessonTitle from "./createLesson/LessonTitle";
import ThemeLesson from "./createLesson/ThemeLesson";
import MultimediaLesson from "./createLesson/MultimediaLesson";
import Preview from "./preview/Preview";

const useStyles = makeStyles({
  card: {
    "&.css-bhp9pd-MuiPaper-root-MuiCard-root": {
      boxShadow: " 0px 0px 6px 2px rgba(0,0,0,0.44)",
      borderRadius: 20,
    },
  },
  cardTwo: {
    "&.css-bhp9pd-MuiPaper-root-MuiCard-root": {
      boxShadow: "none",
      borderRadius: 0,
    },
    width: "45%",
  },
});

export default function SteperCreate() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [profileImgae, setProfileImgae] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [template, setTemplate] = useState("template-1");
  const [form, setForm] = useState({
    lessonTitle: "",
    lessonTheme: "",
    lessonLink: "",
  });

  const onchangeTemplate = (key) => {
    setTemplate(key);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChangeForm = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImgae(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const PicekerImage = useRef(null);
  const PicekerVideo = useRef(null);

  const PreviewVideo = (e) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  };

  return (
    <div>
      <h1 style={{ padding: 25 }}> !Empieza a crear tu lección ahora ahora!</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card style={{ width: "45%", padding: 10 }} className={classes.card}>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>Titulo de la lección </StepLabel>
              <StepContent>
                <div>
                  <LessonTitle
                    lessonTitle={form.lessonTitle}
                    onChangeForm={onChangeForm}
                  />
                </div>
                <Button variant="text" onClick={handleNext} fullWidth>
                  siguiente
                </Button>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Tema de la lección </StepLabel>
              <StepContent>
                <div>
                  <ThemeLesson
                    lessonTheme={form.lessonTheme}
                    onChangeForm={onChangeForm}
                  />
                </div>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      continuar
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Agregar multimedia </StepLabel>
              <StepContent>
                <div>
                  <MultimediaLesson
                    PicekerImage={PicekerImage}
                    profileImgae={profileImgae}
                    imageHandler={imageHandler}
                    PreviewVideo={PreviewVideo}
                    PicekerVideo={PicekerVideo}
                    videoPreview={videoPreview}
                    lessonLink={form.lessonLink}
                    onChangeForm={onChangeForm}
                  />
                </div>
                <Box sx={{ mb: 2, mt: 4 }}>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      continuar
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        </Card>

        <div style={{ width: "47%" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                variant="outlined"
                onClick={() => onchangeTemplate("template-1")}
              >
                PLantilla 1
              </Button>
              <Button
                variant="outlined"
                onClick={() => onchangeTemplate("template-2")}
              >
                Plantilla 2
              </Button>
              <Button
                variant="outlined"
                onClick={() => onchangeTemplate("template-3")}
              >
                Plantilla 3
              </Button>
            </div>
          </div>
          <Preview
            lessonTitle={form.lessonTitle}
            lessonTheme={form.lessonTheme}
            profileImgae={profileImgae}
            videoPreview={videoPreview}
            template={template}
            lessonLink={form.lessonLink}
          />
        </div>
      </div>
    </div>
  );
}
