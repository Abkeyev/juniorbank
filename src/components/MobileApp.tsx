import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      rootOutside: {
        position: "relative",
        "& > img": {
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 0,
          display: "none",
        },
        "& > img:first-child": {
          zIndex: 0,
          left: 0,
          top: 0,
          display: "none",
        },
        "& > img:nth-child(2)": {
          left: 50,
          zIndex: 2,
          bottom: -30,
          display: "none",
        },
        "& > img:nth-child(3)": {
          top: 0,
          right: 0,
          zIndex: 2,
          display: "none",
        },
        "& > img:nth-child(4)": {
          right: "30%",
          bottom: -30,
          display: "none",
        },
      },
      root: {
        position: "relative",
        maxWidth: "100%",
        margin: "0 auto",
        zIndex: 1,
        marginTop: 32,
        padding: "0 16px 32px",
        color: "white",
      },
      title: {
        marginBottom: 32,
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      subTitle: {
        marginBottom: 32,
      },
      imgBlock: {
        gridArea: "a",
        width: "100%",
        position: "relative",
        zIndex: 4,
        "& > img:first-child": {
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxHeight: 500,
        },
        "& > img:nth-child(2)": {
          position: "relative",
          width: "100%",
          display: "none",
        },
      },
      textBlock: { width: "100%", padding: "32px 16px", textAlign: "right" },
      container: {
        position: "relative",
        zIndex: 3,
        backgroundColor: "#2D72E5",
        borderRadius: 24,
        width: "100%",
        flexWrap: "nowrap",
        display: "flex",
        alignItems: "center",
      },
      storesApp: {
        flexWrap: "nowrap",
        justifyContent: "flex-end",
      },
      appStore: {
        marginRight: 22,
        "& img": {
          width: "100%",
        },
      },
      googleMarker: {
        "& img": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      rootOutside: {
        position: "relative",
        "& > img": {
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 0,
        },
        "& > img:first-child": {
          zIndex: 0,
          left: 0,
          top: 0,
        },
        "& > img:nth-child(2)": {
          left: 50,
          zIndex: 2,
          bottom: -30,
        },
        "& > img:nth-child(3)": {
          top: 0,
          right: 0,
          zIndex: 2,
        },
        "& > img:nth-child(4)": {
          right: "30%",
          bottom: -30,
        },
      },
      root: {
        position: "relative",
        maxWidth: 1280,
        margin: "0 auto",
        zIndex: 1,
        marginTop: 85,
        padding: "0 56px 85px",
        color: "white",
      },
      title: {
        marginBottom: 16,
      },
      subTitle: {
        marginBottom: 32,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        zIndex: 4,
        "& > img:first-child": {
          position: "absolute",
          top: "calc(50% - 370px)",
          zIndex: 3,
          right: 40,
        },
        "& > img:nth-child(2)": {
          position: "absolute",
          right: 0,
          top: -70,
        },
      },
      textBlock: { width: "50%", padding: "110px 0 160px 120px" },
      container: {
        position: "relative",
        zIndex: 3,
        backgroundColor: "#2D72E5",
        borderRadius: 24,
        width: "100%",
      },
      appStore: {
        marginRight: 22,
      },
    },
  })
);

const MobileApp = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.rootOutside}>
      <img src={process.env.PUBLIC_URL + "/appBgPart1.svg"} alt="app" />
      <img src={process.env.PUBLIC_URL + "/appBgPart2.svg"} alt="app" />
      <img src={process.env.PUBLIC_URL + "/appBgPart5.svg"} alt="app" />
      <img src={process.env.PUBLIC_URL + "/appBgPart4.svg"} alt="app" />
      <div className={classes.root}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.container}
        >
          <Grid item className={classes.textBlock}>
            <BccTypography block type="h1" className={classes.title}>
              Детское приложение Junior Bank
            </BccTypography>
            <BccTypography block type="p2l" className={classes.subTitle}>
              Научите ребенка следить за своими тратами в мобильном приложении
              Junior Bank
            </BccTypography>
            <Grid container className={classes.storesApp}>
              <Grid item className={classes.appStore}>
                <a href="" target="_blank">
                  <img src={process.env.PUBLIC_URL + "/as.svg"} alt="app" />
                </a>
              </Grid>
              <Grid item className={classes.googleMarker}>
                <a href="" target="_blank">
                  <img src={process.env.PUBLIC_URL + "/gp.svg"} alt="app" />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.imgBlock}>
            <img src={process.env.PUBLIC_URL + "/phoneapp.svg"} alt="app" />
            <img src={process.env.PUBLIC_URL + "/appBgPart3.svg"} alt="app" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MobileApp;
