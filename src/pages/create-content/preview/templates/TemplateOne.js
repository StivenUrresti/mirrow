import React from "react";

function TemplateOne(props) {
  const { lessonTitle, lessonTheme, profileImgae, videoPreview, lessonLink } =
    props;
  return (
    <div>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>{lessonTitle}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            height: 210,
            paddingLeft: 10,
          }}
        >
          {profileImgae && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={profileImgae}
                alt=""
                id="img"
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: "center",
                  borderRadius: 20,
                }}
              />
            </div>
          )}
          {lessonTheme && (
            <h6
              style={{
                marginTop: 8,
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
        <div style={{ width: "50%", height: 180, padding: 7 }}>
          {videoPreview && (
            <video
              controls
              src={videoPreview}
              style={{
                alignSelf: "center",
                width: 300,
                height: 200,
                borderRadius: 20,
              }}
            ></video>
          )}
        </div>
      </div>
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
  );
}

export default TemplateOne;
