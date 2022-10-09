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

function CreativePerfumeLabs() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.45;
   } else {
      document.body.style.zoom = 1;
   }

   return (
      <div className="CreativePerfumeLabs">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <Typography variant="body2" color={"secondary"} className={classes.header}>
                  Customized Fine Fragrances
               </Typography>
               <Typography variant="h3">
                  A chance to get your unique signature fine fragrance that reflects your
                  personality and creative style. Contact us to reserve your time to have
                  a personalized meeting with our professional independent perfumer. This
                  is the first professional perfume experience available in Lebanon.
                  Providing high standards Fine Fragrance complexity but made especially
                  to match your taste and personality.
               </Typography>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default CreativePerfumeLabs;
