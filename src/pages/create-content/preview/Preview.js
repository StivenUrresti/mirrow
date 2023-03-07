import React from "react";
import "./Preview.css";
import TemplateOne from "./templates/TemplateOne";
import TemplateThree from "./templates/TemplateThree";
import TemplateTwo from "./templates/TemplateTwo";

function Preview(props) {
  const {
    lessonTitle,
    lessonTheme,
    profileImgae,
    videoPreview,
    template,
    lessonLink,
  } = props;

  const renderTemplate = () => {
    switch (template) {
      case "template-1":
        return (
          <TemplateOne
            lessonTitle={lessonTitle}
            lessonTheme={lessonTheme}
            profileImgae={profileImgae}
            videoPreview={videoPreview}
            lessonLink={lessonLink}
          />
        );
      case "template-2":
        return (
          <TemplateTwo
            lessonTitle={lessonTitle}
            lessonTheme={lessonTheme}
            profileImgae={profileImgae}
            videoPreview={videoPreview}
            lessonLink={lessonLink}
          />
        );
      case "template-3":
        return (
          <TemplateThree
            lessonTitle={lessonTitle}
            lessonTheme={lessonTheme}
            profileImgae={profileImgae}
            videoPreview={videoPreview}
            lessonLink={lessonLink}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="bgimg"
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        position: "relative",
        transform: "rotate(90deg)",
        marginTop: -10,
      }}
    >
      <div
        style={{
          width: "90.9%",
          height: "44.5%",
          borderRadius: 30,
          transform: "rotate(270deg)",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}

export default Preview;
