import { TextField } from "@mui/material";
import React from "react";

const ThemeLesson = (props) => {
  const { lessonTheme, onChangeForm } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
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
            Escribe el tema que abordaras, de acuerdo a el el titulo de la
            lección
          </h2>
          <h5 style={{ alignSelf: "center", textAlign: "center" }}>
            No pasa nada si no se te ocurre un buen temas en este momento.
            Puedes cambiarlo más tarde.
          </h5>
          <TextField
            value={lessonTheme}
            onChange={onChangeForm("lessonTheme")}
            id="outlined-multiline-static"
            label="Tema"
            multiline
            rows={4}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeLesson;
