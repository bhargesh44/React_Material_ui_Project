import React from "react";
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));
export default function Rightbar() {
  const classes = useStyle();
  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={5} style={{ marginBottom: 20 }}>
          <Avatar alt="A" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="B" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="C" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="D" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="E" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="F" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="G" src="https://mui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={125} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
        <Divider flexItem style={{ marginBottom: 5 }} />
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Life
        </Link>
      </Container>
    </>
  );
}
