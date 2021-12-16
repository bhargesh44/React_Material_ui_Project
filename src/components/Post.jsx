import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));
export default function Post() {
  const classes = useStyle();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/5968231/pexels-photo-5968231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="My Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Typography variant="body2">
              For starters, fruit tends to be high in vitamins and minerals.
              These include vitamin C, potassium and folate, of which many
              people don't get enough ( 1 , 2). Fruit is also high in fiber,
              which has many health benefits. For starters, fruit tends to be
              high in vitamins and minerals. These include vitamin C, potassium
              and folate, of which many people don't get enough ( 1 , 2). Fruit
              is also high in fiber, which has many health benefits. For
              starters, fruit tends to be high in vitamins and minerals. These
              include vitamin C, potassium and folate, of which many people
              don't get enough ( 1 , 2). Fruit is also high in fiber, which has
              many health benefits.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
