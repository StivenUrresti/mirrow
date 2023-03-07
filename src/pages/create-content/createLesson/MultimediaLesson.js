import { Button, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const MultimediaLesson = (props) => {
  const {
    PicekerImage,
    imageHandler,
    PreviewVideo,
    PicekerVideo,
    lessonLink,
    onChangeForm,
  } = props;
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" }}>
          Selecciona la multimedia que vas a usar en tu leccion
        </h2>
        <h5 style={{ alignSelf: "center", textAlign: "center" }}>
          Puedes agragar un enlace si lo deceas
        </h5>
        <TextField
          label="Enlace"
          fullWidth
          value={lessonLink}
          onChange={onChangeForm("lessonLink")}
        />
        <h5 style={{ alignSelf: "center", textAlign: "center" }}>
          Puedes seleccionar fotos y videos
        </h5>
      </div>
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
            <AddPhotoAlternateIcon style={{ width: 100 }} />
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
            <VideoCallIcon style={{ width: 100 }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultimediaLesson;
