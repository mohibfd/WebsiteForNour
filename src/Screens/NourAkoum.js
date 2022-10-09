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

function NourAkoum() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.45;
   } else {
      document.body.style.zoom = 1;
   }

   return (
      <div className="NourAkoum">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <Typography variant="body2" color={"secondary"} className={classes.header}>
                  Nour Akoum
               </Typography>
               <Typography variant="h3">
                  {
                     "French & Lebanese independent Perfumer and part of the French Society of Perfumers. After having her B.S in Chemistry, she studied European Fragrance & Cosmetics Masters at ISIPCA in Paris, where it also included an MBM degree from the University of Padova, Italy and a Scientific perfumery Master from the University of Versailles, France. Her masters had three different diplomas, Scientific, Technical, and Business management all in the Fragrance industry. She’s also really passionate about fashion and style, and acquired a Fashion Design Professional course Certificate in Milan."
                  }
               </Typography>
               <Typography variant="h3">
                  Perfumery for her is this mysterious field where she gets the chance to
                  be creative and create astonishing fragrances. Her main focus is being
                  an independent perfumer providing a customized experience to clients,
                  translating their personalities and emotions into the perfect scent.
               </Typography>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default NourAkoum;
