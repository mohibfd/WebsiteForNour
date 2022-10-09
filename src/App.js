import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "./components/Grid";
import ButtonMailTo from "./components/ButtonMailTo";
import nourIcon from "./nourIcon.jpg";
import starIcon from "./Star.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import "./App.css";

const theme = createTheme({
   palette: {
      primary: {
         main: "#00BFFF",
      },
      secondary: {
         main: "#ff1493",
      },
   },
   typography: {
      fontFamily: ["PT Serif"],
      h1: {
         fontWeight: 800,
         fontSize: "3.5rem",
         lineHeight: "5.5rem",
      },
      h2: {
         fontWeight: 600,
         fontSize: "2.5rem",
         lineHeight: "4.5rem",
      },
      h3: {
         fontWeight: 400,
         fontSize: "2rem",
         lineHeight: "3.5rem",
      },
      h4: {
         fontWeight: 250,
         fontSize: "1.5rem",
         lineHeight: "2.5rem",
      },
      h5: {
         fontWeight: 100,
         fontSize: "1.2rem",
         lineHeight: "2rem",
      },
      body1: {
         fontFamily: ["Open Sans"],
         fontWeight: 250,
         fontSize: "1.25rem",
         lineHeight: "2.5rem",
      },
      body2: {
         fontFamily: ["Fleur De Leah"],
         fontWeight: 250,
         fontSize: "2.5rem",
         lineHeight: "2.5rem",
      },
   },
});

const styles = makeStyles({
   wrapper: {
      margin: "1.5%",
   },
   wrapperOne: {
      border: "2px solid #00BFFF",
      padding: "1%",
   },
   bigSpace: {
      marginBottom: "5rem",
   },
   littleSpace: {
      marginTop: "1rem",
   },
   grid: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
   },
   logo: {
      width: "20%",
      height: "20%",
   },
   italic: {
      marginLeft: "50",
   },
   star: {
      width: "6rem",
      height: "6rem",
   },
   mystereHeaderContainer: {
      display: "flex",
   },
   mystereHeader: {
      flex: 1,
      marginRight: "6rem",
   },
   footerContainer: {
      display: "flex",
      marginTop: "2%",
   },
   txtNextToNums: {
      flex: 1,
      marginLeft: "6rem",
      padding: "0.5rem 0 0 0",
   },
   smallStarOne: {
      width: "2rem",
      height: "2rem",
      marginRight: "28rem",
   },
   smallStarTwo: {
      width: "2rem",
      height: "2rem",
      marginLeft: "28rem",
   },
   numbers: {
      margin: "1%",
   },
});

function App() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.45;
   } else {
      document.body.style.zoom = 1;
   }

   const containerOne = () => {
      return (
         <div className={`${classes.wrapper} ${classes.wrapperOne}`}>
            <div className={classes.mystereHeaderContainer}>
               <img src={starIcon} className={classes.star} alt="" />
               <Typography
                  display="inline"
                  variant="h1"
                  color={"secondary"}
                  className={classes.mystereHeader}
               >
                  Mystère
               </Typography>
            </div>

            <Typography variant="h3">
               <Link
                  display="inline"
                  variant="inherit"
                  to="/CustomizedFragrances"
                  style={{ color: "#000" }}
               >
                  {"Customized Fragrances "}
               </Link>
               Luxury Store
            </Typography>
            <Typography variant="h4">
               <Link
                  display="inline"
                  variant="inherit"
                  to="/CreativePerfumeLab"
                  style={{ color: "#000" }}
               >
                  {"Creative Perfume Lab "}
               </Link>
               and Workshops
               <Link
                  display="inline"
                  variant="inherit"
                  to="/Themed"
                  style={{ color: "#000" }}
               >
                  {" (Themed "}
               </Link>
               and
               <Link
                  display="inline"
                  variant="inherit"
                  to="/Private"
                  style={{ color: "#000" }}
               >
                  {" Private)"}
               </Link>
            </Typography>
            <Typography variant="h5" className={classes.littleSpace}>
               Triple Perfumery Master degree
            </Typography>
            <Typography variant="h5">(Scientific, Business, Technical)</Typography>
            <Typography variant="h5">Paris, Italy and Amsterdam's Expertise</Typography>
            <Typography variant="h5">
               Member of the French Society of Perfumers
            </Typography>
            <div className={classes.footerContainer}>
               <div className={classes.txtNextToNums}>
                  <Typography
                     variant="body2"
                     className={classes.italic}
                     color={"primary"}
                  >
                     Parfumeur
                  </Typography>
                  <div className={classes.littleSpace} />

                  <Typography variant="body2" color={"secondary"}>
                     <Link
                        display="inline"
                        variant="inherit"
                        to="/NourAkoum"
                        style={{ color: "#ff1493" }}
                     >
                        Nour Akoum
                     </Link>
                  </Typography>
               </div>
               <img src={starIcon} className={classes.star} alt="" />
            </div>
         </div>
      );
   };

   const phoneNumOne = "+33 7 67 85 55 41";
   const phoneNumTwo = "+961 6 412 024";
   const phoneNumThree = "+961 81 157 395";

   const containerTwo = () => {
      return (
         <div className={`${classes.wrapper} ${classes.wrapperOne}`}>
            <img src={nourIcon} className={classes.logo} alt="" />

            <Typography variant="h4">{"Akoum & Jamal blg, Dam w Farz"}</Typography>
            <Typography variant="h4">Tripoli, Lebanon</Typography>
            <Typography variant="h4">
               <ButtonMailTo
                  label="nourakoumparfumeur@gmail.com"
                  mailto="mailto:nourakoumparfumeur@gmail.com"
               />
            </Typography>

            <Typography variant="body1" display="inline" className={classes.numbers}>
               <a href={`tel:${phoneNumOne}`}> {phoneNumOne} </a>
            </Typography>
            <Typography variant="body1" display="inline" className={classes.numbers}>
               <a href={`tel:${phoneNumTwo}`}> {phoneNumTwo} </a>
            </Typography>
            <Typography variant="body1" display="inline" className={classes.numbers}>
               <a href={`tel:${phoneNumThree}`}> {phoneNumThree} </a>
            </Typography>
            <div className={classes.littleSpace} />

            <Typography variant="body2" display="inline">
               Always{" "}
            </Typography>
            <Typography variant="body2" color={"secondary"} display="inline">
               Smell{" "}
            </Typography>
            <Typography variant="body2" display="inline">
               and{" "}
            </Typography>
            <Typography variant="body2" color={"primary"} display="inline">
               Smile
            </Typography>
            <Typography variant="body2" display="inline">
               !
            </Typography>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
               <Grid
                  icon={
                     <InstagramIcon
                        style={{ fill: "#ff1493", height: "100", width: "100" }}
                     />
                  }
                  title="@nourakoumparfumeur"
                  link="https://www.instagram.com/nourakoumparfumeur/"
               />
               <Grid
                  icon={
                     <FacebookIcon
                        style={{ fill: "#00BFFF", height: "100", width: "100" }}
                     />
                  }
                  title="@nourakoumparfumeur"
                  link="https://www.facebook.com/nourakoumparfumeur/"
               />
            </div>
         </div>
      );
   };
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <img src={starIcon} className={classes.smallStarOne} alt="" />
               <div>
                  <Typography display="inline" variant="body2" color={"secondary"}>
                     {"Nour Akoum "}
                  </Typography>
                  <Typography display="inline" variant="body2" color={"primary"}>
                     Parfumeur
                  </Typography>
               </div>
               <img src={starIcon} className={classes.smallStarTwo} alt="" />
               {containerOne()}
               <div className={classes.bigSpace} />
               {containerTwo()}
            </div>
         </ThemeProvider>
      </div>
   );
}

export default App;
