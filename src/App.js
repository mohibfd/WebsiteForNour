import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "./components/Grid";
import nourIcon from "./nourIcon.jpg";
import starIcon from "./Star.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useMediaQuery } from "react-responsive";

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
         fontSize: "4rem",
         lineHeight: "5.5rem",
      },
      h2: {
         fontWeight: 600,
         fontSize: "3rem",
         lineHeight: "4.5rem",
      },
      h3: {
         fontWeight: 400,
         fontSize: "2.4rem",
         lineHeight: "3.5rem",
      },
      h4: {
         fontWeight: 250,
         fontSize: "2rem",
         lineHeight: "2.5rem",
      },
      h5: {
         fontWeight: 100,
         fontSize: "1.7rem",
         lineHeight: "2rem",
      },
      body1: {
         fontFamily: ["Open Sans"],
         fontWeight: 250,
         fontSize: "2rem",
         lineHeight: "2.5rem",
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
      margin: "1.5%",
   },
   wrapperOne: {
      border: "2px solid #00BFFF",
      // width: "100%",
      // margin: "auto",
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
      width: "25%",
      height: "25%",
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
   numbersContainer: {
      display: "flex",
      marginTop: "2%",
   },
   numbers: {
      minWidth: "20rem",
   },
   txtNextToNums: {
      flex: 1,
      marginRight: "14rem",
      padding: "0.5rem 0 0 0",
   },
});

function App() {
   const classes = styles();

   const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

   if (isMobile) {
      document.body.style.zoom = 0.5;
   } else {
      document.body.style.zoom = 1;
   }
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
               <div className={`${classes.wrapper} ${classes.wrapperOne}`}>
                  <img src={nourIcon} className={classes.logo} alt="" />

                  <Typography variant="h4">{"Akoum & Jamal blg, Dam w Farz"}</Typography>
                  <Typography variant="h4">Tripoli, Lebanon</Typography>
                  <Typography variant="h4">nourakoumparfumeur@gmail.com</Typography>
                  <div className={`${classes.grid} ${classes.littleSpace}`}>
                     <Grid
                        icon={
                           <InstagramIcon
                              style={{ fill: "#ff1493", height: "125", width: "125" }}
                           />
                        }
                        title="@nourakoumparfumeur"
                     />
                     <Grid
                        icon={
                           <FacebookIcon
                              style={{ fill: "#00BFFF", height: "125", width: "125" }}
                           />
                        }
                        title="@nourakoumparfumeur"
                     />
                  </div>
               </div>
               <div className={classes.bigSpace} />

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

                  <Typography variant="h3">Customized Fragrances Luxury Store</Typography>
                  <Typography variant="h4">
                     Creative Perfume Lab and Workshops (Themed and Private)
                  </Typography>
                  <Typography variant="h5" className={classes.littleSpace}>
                     Triple Perfumery Master degree
                  </Typography>
                  <Typography variant="h5">(Scientific, Business, Technical)</Typography>
                  <Typography variant="h5">
                     Paris, Italy and Amsterdam's Expertise
                  </Typography>
                  <Typography variant="h5">
                     Member of the French Society of Perfumers
                  </Typography>
                  <div className={classes.numbersContainer}>
                     <div className={classes.numbers}>
                        <Typography
                           variant="body1"
                           // className={classes.number}
                        >
                           +33 7 67 85 55 41
                        </Typography>
                        <Typography variant="body1">+961 6 412 024</Typography>
                        <Typography variant="body1">+961 81 157 395</Typography>
                     </div>
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
                           Nour Akoum
                        </Typography>
                     </div>
                     <img src={starIcon} className={classes.star} alt="" />
                  </div>
               </div>
            </div>
         </ThemeProvider>
      </div>
   );
}

export default App;
