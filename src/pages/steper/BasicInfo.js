import React from "react";
import { TextField, Box, Button } from "@mui/material";
import "./Basic.css";

function BasicInfo(props) {
  const {
    title,
    description,
    issue,
    onChangeForm,
    imageHandler,
    PicekerImage,
    PicekerVideo,
    PreviewVideo,
  } = props;
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="ingresar el titulo de la leccion "
            style={{ marginBottom: 20, width: 400, alignSelf: "center" }}
            value={title}
            onChange={onChangeForm("title")}
          />
          <TextField
            label="ingresar la descripcion"
            style={{ marginBottom: 20, width: 400, alignSelf: "center" }}
            value={description}
            onChange={onChangeForm("description")}
          />
          <TextField
            label="ingresar el tema"
            style={{ marginBottom: 20, width: 400, alignSelf: "center" }}
            value={issue}
            onChange={onChangeForm("issue")}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <input
                ref={PicekerImage}
                type="file"
                accept="image/*"
                name="image-upload"
                id="file-upload"
                onChange={imageHandler}
              />
              <Button
                variant="outlined"
                onClick={() => PicekerImage.current.click()}
              >
                poner imagen
              </Button>
            </div>
            <div>
              <input
                ref={PicekerVideo}
                type="file"
                accept="video/*"
                name="image-upload"
                id="file-upload"
                onChange={PreviewVideo}
              />
              <Button
                variant="outlined"
                onClick={() => PicekerVideo.current.click()}
              >
                poner video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
