import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function TaskManager() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/Task-Manager-Nodejs/blob/main/README.md",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClickHandler}>
        <CardMedia
          component="img"
          height="140"
          image="https://user-images.githubusercontent.com/117214735/266821305-2708bc30-d82a-41f9-9dd8-e523da8acf53.png"
          alt="Task manager app"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Task Manager Nodejs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack App to manage daily tasks. App user Nodejs and Express to
            handle backend along with MongoDB to store data.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
