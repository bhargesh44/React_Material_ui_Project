import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const useStyle = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add /> 
    </>
  );
}

export default App;
