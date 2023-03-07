import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import BasicInfo from "./BasicInfo";
import Mirrow from "./Mirrow";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    "&.css-bhp9pd-MuiPaper-root-MuiCard-root": {
      boxShadow: " 0px 0px 6px 2px rgba(0,0,0,0.44)",
      borderRadius: 20,
    },
  },
});

export default function SteperComp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [profileImgae, setProfileImgae] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    issue: "",
  });
  const PicekerImage = useRef(null);
  const PicekerVideo = useRef(null);

  const onChangeForm = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      <h1 style={{ padding: 35 }}> !Empieza a crear tu leccion ahora!</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card style={{ width: "35%", padding: 10 }} className={classes.card}>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>Creacion basica de leccion</StepLabel>
              <StepContent>
                <div>
                  <BasicInfo
                    title={form.title}
                    description={form.description}
                    issue={form.issue}
                    onChangeForm={onChangeForm}
                    imageHandler={imageHandler}
                    PicekerImage={PicekerImage}
                    PreviewVideo={PreviewVideo}
                    PicekerVideo={PicekerVideo}
                  />
                </div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  fullWidth
                  disabled={
                    form.title === "" ||
                    form.description === "" ||
                    form.issue === ""
                  }
                >
                  siguiente
                </Button>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>segunda</StepLabel>
              <StepContent>
                hola2
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
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
        <Card style={{ width: "55%" }} className={classes.card}>
          <Mirrow
            title={form.title}
            description={form.description}
            issue={form.issue}
            profileImgae={profileImgae}
            videoPreview={videoPreview}
          />
        </Card>
      </div>
    </div>
  );
}
