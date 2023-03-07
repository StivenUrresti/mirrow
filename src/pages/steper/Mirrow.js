import React from "react";

function Mirrow(props) {
  const { title, description, issue, profileImgae, videoPreview } = props;
  return (
    <div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {title ? (
            <h1 style={{ alignSelf: "center" }}>{title}</h1>
          ) : (
            <h1 style={{ alignSelf: "center" }}>
              Ingrese el titulo de la leccion{" "}
            </h1>
          )}
          {description ? (
            <p style={{ textAlign: "center" }}>{description}</p>
          ) : (
            <p style={{ textAlign: "center" }}>Ingrese la descripcion</p>
          )}
          {issue ? <p>{issue}</p> : <p>ingresar el tema</p>}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {profileImgae && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={profileImgae}
                alt=""
                id="img"
                style={{ width: 300, height: 300, alignSelf: "center" }}
              />
            </div>
          )}
          {videoPreview && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <video
                controls
                src={videoPreview}
                style={{ width: 300, height: 300, alignSelf: "center" }}
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mirrow;
