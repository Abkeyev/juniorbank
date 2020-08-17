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
        height: "auto",
        margin: "0 auto",
        marginBottom: 32,
        padding: "0 16px 32px",
      },
      title: {
        marginTop: 32,
        marginBottom: 32,
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      container: {
        position: "relative",
        flexWrap: "wrap",
        "& > div": {
          position: "relative",
          backgroundColor: "white",
          padding: 32,
          borderRadius: 24,
          color: "#2D72E5",
          fontSize: 18,
          lineHeight: "24px",
          boxSizing: "border-box",
          width: "100%",
          border: "4px solid #2D72E5",
        },
        "& > div:nth-child(2)": {
          margin: "16px 0",
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        height: 300,
        boxSizing: "border-box",
        margin: "0 auto",
        marginBottom: 100,
        padding: "0 56px 64px",
      },
      title: {
        marginBottom: 30,
      },
      container: {
        position: "relative",
        "& > div": {
          position: "absolute",
          backgroundColor: "white",
          padding: 40,
          borderRadius: 24,
          color: "#2D72E5",
          fontSize: 18,
          lineHeight: "24px",
          boxSizing: "border-box",
          border: "4px solid #2D72E5",
        },
        "& > div:first-child": {
          width: "calc(35% + 20px)",
          left: 0,
        },
        "& > div:nth-child(2)": {
          width: "calc(33% + 20px)",
          left: "35%",
          top: 50,
        },
        "& > div:nth-child(3)": {
          width: "32%",
          left: "68%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      title: {
        marginTop: 0,
      },
    },
  })
);

const Reason = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <BccTypography type="h1" block className={classes.title}>
        Зачем ребенку своя карта?
      </BccTypography>
      <Grid container wrap="nowrap" className={classes.container}>
        <Grid item>
          Купюры и монеты дети теряют чаще, чем карты. А школьных хулиганов
          зачастую интересуют наличные, нежели банковская карта.
        </Grid>
        <Grid item>
          Пользуясь приложением ребенок учится быть отвественным и
          самостоятельным, готовясь вступить во взрослую жизнь
        </Grid>
        <Grid item>
          Если платить картой —<br />— не ошибешься со сдачей.
        </Grid>
      </Grid>
    </div>
  );
};

export default Reason;
