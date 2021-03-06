import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        maxWidth: "100%",
        margin: "0 auto",
        marginTop: 32,
        padding: "0 16px 32px",
      },
      title: {
        marginBottom: 32,
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 1,
      },
      imgBlock: {
        width: "40%",
        position: "relative",
        "& > img": {
          position: "relative",
          width: "100%",
        },
      },
      textBlock: {
        width: "60%",
        padding: "32px 16px",
        boxSizing: "border-box",
      },
      container: {
        backgroundColor: "#F1F7F9",
        borderRadius: 24,
        width: "100%",
        flexWrap: "nowrap",
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        marginTop: 102,
        padding: "0 56px 64px",
      },
      title: {
        marginBottom: 16,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        "& > img": {
          width: "100%",
        },
      },
      textBlock: { width: "50%", padding: "100px 70px 80px 0" },
      container: {
        backgroundColor: "#F1F7F9",
        borderRadius: 24,
        width: "100%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        marginTop: 0,
      },
      container: {
        flexDirection: "column-reverse",
        textAlign: "center",
      },
      textBlock: {
        width: "100%",
      },
      imgBlock: {
        width: "90%",
      },
      title: {
        wordBreak: "break-word",
      },
    },
  })
);

const PhoneCase2 = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        className={classes.container}
      >
        <Grid item className={classes.imgBlock}>
          <img src={process.env.PUBLIC_URL + "/phonecase2.png"} alt="app" />
        </Grid>
        <Grid item className={classes.textBlock}>
          <BccTypography block type="h1" className={classes.title}>
            Самостоятельность и продвинутость
          </BccTypography>
          <BccTypography block type="p2l" className={classes.subTitle}>
            Собственное мобильное приложение придаст статуса,
            <br />а самостоятельный ребенок учится быть ответственным
            <br />
            за свои покупки
          </BccTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneCase2;
