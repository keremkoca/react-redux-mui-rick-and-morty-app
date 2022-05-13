import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function CharCard(props) {
  const { gender, image, location, name, origin, species, status } = props.char;
  return (
    <Card>
      <CardMedia component="img" height="300" image={image} alt="charImg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Grid container direction="column" spacing={0}>
          <Grid>Gender:{gender}</Grid>
          <Grid>Location:{location.name}</Grid>
          <Grid>Origin:{origin.name}</Grid>
          <Grid>Species:{species}</Grid>
          <Grid>Status:{status}</Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
