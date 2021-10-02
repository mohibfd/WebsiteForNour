import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import "../App.css";

const theme = createTheme({
   typography: {
      fontFamily: ["PT Serif"],
      h3: {
         fontWeight: 400,
         fontSize: "2.4rem",
         lineHeight: "3.5rem",
      },
   },
});

const styles = makeStyles({
   wrapper: {
      border: "2px solid #00BFFF",
      padding: "1%",
      width: "75%",
      margin: "auto",
      marginTop: "5%",
   },
});

function Private() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.45;
   } else {
      document.body.style.zoom = 1;
   }

   return (
      <div className="Private">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <Typography variant="h3">
                  Available upon request: Birthday party, Graduation celebration,
                  Bachelorette and a variety of other options that you could have in mind.
               </Typography>
               <Typography variant="h3">
                  P.S: It is important to plan these events ahead of time so make sure to
                  contact us for more details and booking at least a month ahead of your
                  desired date.
               </Typography>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default Private;
