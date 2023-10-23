import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ShoppingApp() {
  const onClickHandler = () => {
    window.open(
      "https://github.com/Tarun-Sachan/Ecommerce-MERN-App",
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
          image="https://user-images.githubusercontent.com/117214735/266780863-6f19e943-65ba-44f9-b89f-b40570d1a9fa.png"
          alt="Shopping App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ecommerce Next.js App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack shopping with checkout functionality along with payment
            intergartion using Stripe. Project also has Admin Panel with
            authentication for product management. All product data and Order
            details are stored in MongoDB.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
