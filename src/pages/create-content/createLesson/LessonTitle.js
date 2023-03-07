import { TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import "./Styles.css";

const useStyles = makeStyles({
  textFields: {
    width: 300,
  },
  buttons: {
    margin: 30,
  },
});
const LessonTitle = (props) => {
  const { onChangeForm, lessonTitle } = props;
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <h2 style={{ alignSelf: "center", textAlign: "center" }}>
            ¿Por qué no eliges un título temporal?
          </h2>
          <h5 style={{ alignSelf: "center", textAlign: "center" }}>
            No pasa nada si no se te ocurre un buen título en este momento.
            Puedes cambiarlo más tarde.
          </h5>
          <TextField
            value={lessonTitle}
            onChange={onChangeForm("lessonTitle")}
            className={classes.textFields}
            label="titulo del curso"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default LessonTitle;
