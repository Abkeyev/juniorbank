import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      headerRoot: {
        width: "100%",
      },
      headerBgPart: {
        position: "absolute",
        "& > img": {
          width: "100%",
        },
      },
      headerBgPart1: {
        left: "-90px",
        top: 355,
        animation: "$cardMode 2s alternate infinite",
      },
      headerBgPart2: {
        left: "35%",
        top: 36,
        animation: "$cardMode2 8s linear infinite",
      },
      headerBgPart3: {
        right: "-30%",
        top: 0,
        animation: "$cardMode3 5s alternate infinite",
      },
      headerBgPart4: {
        right: 91,
        top: 430,
        animation: "$cardMode2 6s linear infinite",
      },
      headerBtn: {
        backgroundColor: "#2D72E5!important",
        fontSize: 18,
        fontWeight: "bold",
        minWidth: 325,
      },
      header: {
        maxWidth: 1280,
        width: "100%",
        margin: "0 auto",
        padding: "45px 56px 160px",
        zIndex: 99,
        position: "relative",
      },
      headerTitle: {
        marginBottom: 20,
        fontWeight: "bold",
      },
      headerSubTitle: {
        marginBottom: 48,
        lineHeght: "140%",
      },
      headerContent: {
        marginTop: 115,
      },
      juniorcard: {
        "& > img": {
          width: "100%",
          display: "block",
          maxWidth: 450,
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      headerRoot: {
        width: "100%",
      },
      brSm: {
        display: "none",
      },
      headerBgPart: {
        position: "absolute",
        "& > img": {
          width: "100%",
        },
      },
      headerBgPart1: {
        left: 0,
        top: 355,
        animation: "$cardMode 2s alternate infinite",
      },
      headerBgPart2: {
        left: "65%",
        top: 36,
        animation: "$cardMode2 8s linear infinite",
      },
      headerBgPart3: {
        display: "none",
      },
      headerBgPart4: {
        right: 91,
        top: 430,
        animation: "$cardMode2 6s linear infinite",
      },
      headerBtn: {
        backgroundColor: "#2D72E5!important",
        fontSize: 18,
        fontWeight: "bold",
        minWidth: "100%",
      },
      header: {
        maxWidth: "100%",
        width: "100%",
        margin: "0 auto",
        padding: "32px 16px",
        zIndex: 99,
        position: "relative",
      },
      headerTitle: {
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 1,
      },
      headerSubTitle: {
        marginBottom: 48,
        fontWeight: "normal",
        lineHeght: "140%",
        fontSize: 18,
      },
      headerContent: {
        marginTop: 64,
      },
      juniorcard: {
        "& > img": {
          width: "90%",
          margin: "0 auto",
          display: "block",
          maxWidth: 450,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      headerContent: {
        "& > div": {
          flexDirection: "column-reverse",
        },
      },
      juniorcard: {
        "& > img": {
          width: "100%",
          margin: "32px auto",
          display: "block",
          maxWidth: "initial",
        },
      },
    },
    "@keyframes cardMode": {
      from: {
        transform: "translateY(0)",
      },
      to: {
        transform: "translateY(20px)",
      },
    },
    "@keyframes cardMode2": {
      from: {
        transform: "translateY(0) scale(0) rotate(0deg)",
        opacity: 1,
        filter: "blur(0px)",
      },
      to: {
        transform: "translateY(20px) scale(1) rotate(360deg)",
        opacity: 0,
        filter: "blur(20px)",
      },
    },
    "@keyframes cardMode3": {
      from: {
        transform: "translateY(0)",
      },
      to: {
        transform: "translateY(20px)",
      },
    },
  })
);

const Header = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.headerRoot}>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart1}`}>
        <img
          src={process.env.PUBLIC_URL + "/headerBgPart1.svg"}
          alt="bgpart1"
        />
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart2}`}>
        <img
          src={process.env.PUBLIC_URL + "/headerBgPart2.svg"}
          alt="bgpart2"
        />
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart3}`}>
        <img
          src={process.env.PUBLIC_URL + "/headerBgPart3.svg"}
          alt="bgpart3"
        />
      </div>
      <div className={`${classes.headerBgPart} ${classes.headerBgPart4}`}>
        <img
          src={process.env.PUBLIC_URL + "/headerBgPart4.svg"}
          alt="bgpart4"
        />
      </div>

      <Grid container direction="column" className={classes.header}>
        <Grid item>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="BCC Logo" />
        </Grid>
        <Grid item className={classes.headerContent}>
          <Grid container justify="space-between">
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              className={classes.headerContentText}
            >
              <BccTypography type="h1" block className={classes.headerTitle}>
                Первая карта
                <br />
                вашего ребенка
              </BccTypography>
              <BccTypography type="p2" block className={classes.headerSubTitle}>
                Первая детская карта. Учит управлять, сохранять,
                <br className={classes.brSm} />
                приумножать и зарабатывать.
              </BccTypography>
              <BccButton
                variant="contained"
                className={classes.headerBtn}
                color="primary"
                size="large"
              >
                Заказать карту
              </BccButton>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              className={classes.juniorcard}
            >
              <img
                src={process.env.PUBLIC_URL + "/juniorcard.svg"}
                alt="juniorcard"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
