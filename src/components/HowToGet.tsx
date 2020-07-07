import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        marginBottom: 140,
        padding: "0 56px 0",
      },
      title: {
        marginBottom: 45,
        marginLeft: 65,
      },
      imgBlock: {
        width: "50%",
        position: "relative",
        "& > img": {
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
        },
      },
      textBlock: { width: "50%" },
      container: {
        width: "100%",
      },
      num: {
        border: "1px solid #2D72E5",
        color: "#2D72E5",
        fontSize: 18,
        width: 35,
        height: 35,
        boxSizing: "border-box",
        display: "inline-block",
        marginRight: 30,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "32px",
      },
      list: {
        display: "flex",
        flexWrap: "nowrap",
        marginBottom: 15,
        "& > div": {
          alignSelf: "center",
        },
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
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
        "& > img": {
          position: "relative",
          width: "70%",
        },
      },
      textBlock: { width: "100%", padding: 32 },
      container: {
        width: "100%",
        flexWrap: "nowrap",
        display: "flex",
        alignItems: "center",
      },
      num: {
        border: "1px solid #2D72E5",
        color: "#2D72E5",
        fontSize: 18,
        width: 35,
        height: 35,
        boxSizing: "border-box",
        display: "inline-block",
        marginRight: 16,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "32px",
      },
      list: {
        display: "flex",
        flexWrap: "nowrap",
        marginBottom: 15,
        "& > div": {
          alignSelf: "center",
          "& > span": {
            fontSize: 18,
          },
        },
      },
    },
    link: {
      color: "#4E77E0",
    },
  })
);

const HowToGet = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        className={classes.container}
      >
        <Grid item className={classes.textBlock}>
          <BccTypography block type="h1" className={classes.title}>
            Как получить карту?
          </BccTypography>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.num}>1</span>
            </Grid>
            <Grid item>
              <BccTypography type="h5" weight="normal">
                Быть клиентом банка и пользователем мобильного приложения{" "}
                <a href="" target="_blank" className={classes.link}>
                  BCC.KZ
                </a>
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.num}>2</span>
            </Grid>
            <Grid item>
              <BccTypography type="h5" weight="normal">
                Отправить заявку на выпуск детской карты Junior
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.num}>3</span>
            </Grid>
            <Grid item>
              <BccTypography type="h5" weight="normal">
                Установите приложение Junior Bank на телефоны своих детей, чтобы
                помочь им отслеживать свои расходы, видеть баланс и многое
                другое.
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.imgBlock}>
          <img src={process.env.PUBLIC_URL + "/how.svg"} alt="app" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HowToGet;
