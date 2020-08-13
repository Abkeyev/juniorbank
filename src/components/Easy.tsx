import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@keyframes cardMode": {
      from: {
        transform: "translateY(10px)",
      },
      to: {
        transform: "translateY(-10px)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        maxWidth: "100%",
        margin: "0 auto",
        marginBottom: 32,
        padding: "0 16px 32px",
      },
      title: {
        marginBottom: 32,
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
        "& > img": {
          position: "relative",
          width: "85%",
          animation: "$cardMode 2s alternate infinite",
        },
      },
      textBlock: { width: "100%", padding: "32px 16px" },
      container: {
        backgroundColor: "#2D72E5",
        borderRadius: 24,
        color: "white",
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
        padding: "0 56px 85px",
      },
      title: {
        marginBottom: 16,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
        "& > img": {
          position: "absolute",
          bottom: 20,
          width: "60%",
          animation: "$cardMode 2s alternate infinite",
        },
      },
      textBlock: { width: "50%", padding: "100px 70px 80px 0" },
      container: {
        backgroundColor: "#2D72E5",
        borderRadius: 24,
        color: "white",
        width: "100%",
      },
    },
  })
);

const Easy = (props: any) => {
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
          <img src={process.env.PUBLIC_URL + "/ez.svg"} alt="app" />
        </Grid>
        <Grid item className={classes.textBlock}>
          <BccTypography block type="h1" className={classes.title}>
            Легко и выгодно
          </BccTypography>
          <BccTypography block type="p2l" className={classes.subTitle}>
            Оплата со смартфона в 1 клик и 1%
            <br />
            гарантированного кэшбэка в кармане
            <br />
            <br />
            Кэшбэк можно вывести на карту или платить им за покупки
          </BccTypography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Easy;
