import React from "react";
// import CustomBtn from "./CustomBtn";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = makeStyles({
   wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 2rem 0 2rem",
   },
   item: {
      paddingTop: "1rem",
   },
});

function Grid({ icon, title, link }) {
   const classes = styles();
   return (
      <div className={classes.wrapper}>
         <div className={classes.item}>{icon}</div>
         <Typography className={classes.item} variant="h5">
            <Link
               to={{
                  pathname: link,
               }}
               target="_blank"
            >
               {title}
            </Link>
         </Typography>
         {/* <div className={classes.item}>
            <CustomBtn txt={btnTitle} />
         </div> */}
      </div>
   );
}

export default Grid;
