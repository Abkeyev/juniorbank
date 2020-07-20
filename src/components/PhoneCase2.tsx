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
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      imgBlock: {
        width: "100%",
        position: "relative",
        "& > img": {
          position: "relative",
          width: "100%",
        },
      },
      textBlock: { width: "100%", padding: "32px 16px" },
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
        marginTop: 102,
        padding: "0 56px 85px",
      },
      title: {
        marginBottom: 16,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        "& > img": {
          position: "absolute",
          bottom: 0,
          left: 0,
        },
      },
      textBlock: { width: "50%", padding: "100px 70px 80px 0" },
      container: {
        backgroundColor: "#F1F7F9",
        borderRadius: 24,
        width: "100%",
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
          <img src={process.env.PUBLIC_URL + "/phonecase2.svg"} alt="app" />
        </Grid>
        <Grid item className={classes.textBlock}>
          <BccTypography block type="h1" className={classes.title}>
            Самостоятельность и продвинутость
          </BccTypography>
          <BccTypography block type="p2l" className={classes.subTitle}>
            Собственное мобильное приложение придаст статуса, а самостоятельный
            ребенок учится быть ответственным за свои покупки
          </BccTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneCase2;
