import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography } from "./BccComponents";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      rootOutside: {
        position: "relative",
        "& > img": {
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
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 1,
      },
      subTitle: {
        marginBottom: 32,
      },
      lOut: {
        flexWrap: "nowrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      qr: {
        "& > img": {
          height: 70,
        },
      },
      imgBlock: {
        gridArea: "a",
        width: "60%",
        position: "relative",
        zIndex: 4,
        textAlign: "right",
        "& > img:first-child": {
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxHeight: 500,
        },
        "& > figure": {
          display: "none",
        },
      },
      mobileLinks: {
        marginRight: 24,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      as: {
        marginBottom: 10,
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
      headerBgPart: {
        position: "absolute",
        right: 0,
        bottom: 0,
        zIndex: 0,
        "& > figure": { display: "none", margin: 0 },
        "& > img": {
          width: "100%",
        },
      },
      headerBgPart1: {
        zIndex: 0,
        left: 0,
        top: 0,
      },
      headerBgPart2: {
        left: 50,
        zIndex: 2,
        bottom: -30,
      },
      headerBgPart3: {
        top: 0,
        right: 0,
        zIndex: 2,
      },
      headerBgPart4: {
        right: "30%",
        bottom: -30,
      },
      qrMob: {
        display: "none",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      rootOutside: {
        position: "relative",
      },
      qrMob: {
        display: "none",
      },
      headerBgPart: {
        position: "absolute",
        right: 0,
        bottom: 0,
        zIndex: 0,
        "&>figure": { margin: 0 },
        "& > img": {
          width: "100%",
        },
      },
      headerBgPart1: {
        zIndex: 0,
        left: 0,
        top: 0,
      },
      headerBgPart2: {
        left: 50,
        zIndex: 2,
        bottom: -30,
      },
      headerBgPart3: {
        top: 0,
        right: 0,
        zIndex: 2,
      },
      headerBgPart4: {
        right: "30%",
        bottom: -30,
      },
      root: {
        position: "relative",
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
        zIndex: 1,
        marginTop: 85,
        padding: "0 56px 64px",
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
        "& > figure": {
          position: "absolute",
          right: 0,
          top: -70,
        },
      },
      lOut: {
        alignItems: "center",
        "& > div": {
          width: "auto",
        },
      },
      qr: {
        "& > img": {
          width: "100px",
        },
      },
      mobileLinks: { marginRight: 50 },
      textBlock: { width: "50%", padding: "80px 0 80px 80px" },
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
      as: {
        marginBottom: 25,
        display: "inline-block",
      },
    },
    [theme.breakpoints.down("xs")]: {
      link: {
        maxWidth: 100,
      },
      container: {
        flexDirection: "column",
      },
      textBlock: {
        textAlign: "center",
      },
      lOut: {
        display: "none",
      },
      imgBlock: {
        width: "100%",
        "& > img": {
          display: "none",
        },
      },
      qrMob: {
        display: "block",
        textAlign: "center",
        "& > img": {
          display: "block",
          margin: "0 auto",
        },
        "& > span:nth-child(2)": { marginRight: 16 },
        "& > span": {
          display: "inline-block",
        },
      },
    },
    link: {
      color: "#2D72E5",
      display: "block",
      textDecoration: "underline",
      cursor: "pointer",
      maxWidth: 150,
      "& > img": {
        width: "100%",
      },
    },
  })
);

const MobileApp = (props: any) => {
  const classes = useStyles({});

  const onClickAS = (e: any) => {
    e.preventDefault();

    ReactGA.event({
      category: "Juniorbank_downloawd_AppStore",
      action: "juniorbank_appstore",
    });
    window.open(
      "https://apps.apple.com/kz/app/juniorbank-by-bankcentercredit/id1514548493",
      "_blank"
    );
  };

  const onClickGP = (e: any) => {
    ReactGA.event({
      category: "Juniorbank_downloawd_GooglePlay",
      action: "juniorbank_googleplay",
    });
    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.juniorbank&hl=ru",
      "_blank"
    );
  };
  return (
    <div className={classes.rootOutside}>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart1}`}>
        <Parallax y={[120, 0]} tagOuter="figure">
          <img src={process.env.PUBLIC_URL + "/appBgPart1.svg"} alt="app" />
        </Parallax>
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart2}`}>
        <Parallax y={[120, 0]} tagOuter="figure">
          <img src={process.env.PUBLIC_URL + "/appBgPart2.svg"} alt="app" />
        </Parallax>
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart3}`}>
        <Parallax y={[120, 0]} tagOuter="figure">
          <img src={process.env.PUBLIC_URL + "/appBgPart5.svg"} alt="app" />
        </Parallax>
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart4}`}>
        <Parallax y={[120, 0]} tagOuter="figure">
          <img src={process.env.PUBLIC_URL + "/appBgPart4.svg"} alt="app" />
        </Parallax>
      </div>
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
            <Grid
              container
              justify="flex-start"
              direction="row"
              className={classes.lOut}
              wrap="nowrap"
            >
              <Grid item className={classes.mobileLinks}>
                <span
                  className={`${classes.link} ${classes.as}`}
                  onClick={(e: any) => onClickAS(e)}
                >
                  <img src={process.env.PUBLIC_URL + "/as.svg"} />
                </span>
                <span
                  className={classes.link}
                  onClick={(e: any) => onClickGP(e)}
                >
                  <img src={process.env.PUBLIC_URL + "/gp.svg"} />
                </span>
              </Grid>
              <Grid item className={classes.qr}>
                <img src={process.env.PUBLIC_URL + "/qr.svg"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.imgBlock}>
            <img src={process.env.PUBLIC_URL + "/phoneapp.svg"} alt="app" />
            <Parallax y={[120, 0]} tagOuter="figure">
              <img src={process.env.PUBLIC_URL + "/appBgPart3.svg"} alt="app" />
            </Parallax>
            <Grid item className={classes.qrMob}>
              <img src={process.env.PUBLIC_URL + "/mob-qr.png"} alt="app" />
              <span
                className={`${classes.link} ${classes.as}`}
                onClick={(e: any) => onClickAS(e)}
              >
                <img src={process.env.PUBLIC_URL + "/as.svg"} />
              </span>
              <span className={classes.link} onClick={(e: any) => onClickGP(e)}>
                <img src={process.env.PUBLIC_URL + "/gp.svg"} />
              </span>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MobileApp;
