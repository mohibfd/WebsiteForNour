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
                  Creative Perfume Lab
               </Typography>
               <Typography variant="h3">
                  An activity available on a regular basis upon booking a slot. A wide
                  selection of authentic perfume raw materials present for you to smell
                  and explore creatively. Dive into your sense of smell and see a
                  completely different perspective on this mysterious world.
               </Typography>
               <Typography variant="h3">
                  Get the chance to truly experience the complexity of a perfume by
                  choosing your favorite scents to make your own signature scent. The
                  session will have a focus on providing freedom of choice after smelling
                  all different raw materials to have a selection by the end helping
                  create your perfume with guidance of our independent perfumer. Fun,
                  knowledgeable, Innovative, Creative and a Unique activity.
               </Typography>
               <Typography variant="h3">
                  Hurry up and join us in our only perfume Lab open for public in the
                  Middle East.
               </Typography>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default CreativePerfumeLabs;
