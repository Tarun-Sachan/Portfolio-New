import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cart() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/reduxToolkit-cart",
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
          image="https://user-images.githubusercontent.com/117214735/266820178-1d39ea51-c827-4495-af6b-7eded796e8c6.png"
          alt="Live Weather App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Redux Toolkit Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fully function shopping cart handler using Redux Toolkit to manage states. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
