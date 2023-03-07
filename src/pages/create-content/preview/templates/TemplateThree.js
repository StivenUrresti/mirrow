import React from "react";

function TemplateThree(props) {
  const { lessonTitle, lessonTheme, profileImgae, videoPreview, lessonLink } =
    props;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            height: 300,
            paddingLeft: 30,
            paddingTop: 20,
          }}
        >
          {videoPreview && (
            <video
              controls
              src={videoPreview}
              style={{
                alignSelf: "center",
                width: 250,
                height: 150,
                borderRadius: 20,
              }}
            ></video>
          )}
          {lessonTheme && (
            <h6
              style={{
                marginTop: 8,
                minHeight: 100,
                overflowY: "auto",
                border: "1px #000 solid",
                padding: 5,
                borderRadius: 5,
              }}
            >
              {lessonTheme}
            </h6>
          )}
        </div>
        <div style={{ width: "50%", height: 300, padding: 7 }}>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            {lessonTitle}
          </p>
          {profileImgae && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={profileImgae}
                alt=""
                id="img"
                style={{
                  width: 190,
                  height: 190,
                  alignSelf: "center",
                  borderRadius: 20,
                  marginBottom: 10,
                }}
              />
            </div>
          )}
          {lessonLink && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={{
                  fontSize: 12,
                  width: 200,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                href={lessonLink}
                target="blank"
              >
                {lessonLink}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TemplateThree;
