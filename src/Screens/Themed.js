import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import "../App.css";

const theme = createTheme({
   palette: {
      secondary: {
         main: "#ff1493",
      },
   },
   typography: {
      fontFamily: ["PT Serif"],
      h3: {
         fontWeight: 400,
         fontSize: "1.5rem",
         lineHeight: "3.5rem",
      },
      body2: {
         fontFamily: ["Fleur De Leah"],
         fontWeight: 250,
         fontSize: "3rem",
         lineHeight: "2.5rem",
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
   header: {
      textAlign: "center",
      padding: "2%",
   },
});

function Themed() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.45;
   } else {
      document.body.style.zoom = 1;
   }

   return (
      <div className="Themed">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <Typography variant="body2" color={"secondary"} className={classes.header}>
                  Themed Perfumery Workshops
               </Typography>
               <Typography variant="h3">
                  There are special themed workshops based on different seasons and
                  occasions. You will get an explanation about perfumery and then explore
                  your sense of smell with a themed focus to have an experience that is
                  more relevant, easier and with a theme reflecting signature scent that
                  you will get to compose through the end.
               </Typography>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default Themed;
