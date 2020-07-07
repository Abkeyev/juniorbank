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
        marginBottom: 16,
        padding: "0 16px 32px",
      },
      title: {
        marginBottom: 16,
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      description: {
        color: "#1D1D1D",
        opacity: 0.6,
        marginBottom: 16,
      },
      imgBlock: {
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
        "& > img": {
          width: "70%",
          position: "relative",
        },
      },
      textBlock: { width: "100%", padding: "32px 16px" },
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
        marginRight: 30,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "32px",
      },
      list: {
        display: "flex",
        flexWrap: "nowrap",
        marginBottom: 15,
        position: "relative",
        "& > div": {
          alignSelf: "center",
          "& > span": {
            fontSize: 18,
          },
        },
      },
      checkIcon: {
        position: "absolute",
        left: "0",
        top: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        alignItems: "center",
      },
      textIcons: {
        paddingLeft: 40,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        marginBottom: 140,
        padding: "0 56px 0",
      },
      title: {
        marginBottom: 10,
        fontWeight: "bold",
      },
      description: {
        color: "#1D1D1D",
        opacity: 0.6,
        marginBottom: 48,
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
      textBlock: { width: "50%", paddingLeft: 40 },
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
        position: "relative",
        "& > div": {
          alignSelf: "center",
        },
      },
      checkIcon: {
        position: "absolute",
        left: "-48px",
        top: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        alignItems: "center",
      },
    },
  })
);

const About = (props: any) => {
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
          <img src={process.env.PUBLIC_URL + "/club.svg"} alt="app" />
        </Grid>
        <Grid item className={classes.textBlock}>
          <BccTypography block type="h1" className={classes.title}>
            Junior Club
          </BccTypography>
          <BccTypography type="p1" className={classes.description}>
            Быть частью Junior Club дает возможность:
          </BccTypography>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.checkIcon}>
                <img src={process.env.PUBLIC_URL + "/checkIcon.svg"} />
              </span>
            </Grid>
            <Grid item className={classes.textIcons}>
              <BccTypography type="h5" weight="normal">
                Доступ к урокам финансового образования от топ менеджеров банка.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.checkIcon}>
                <img src={process.env.PUBLIC_URL + "/checkIcon.svg"} />
              </span>
            </Grid>
            <Grid item className={classes.textIcons}>
              <BccTypography type="h5" weight="normal">
                Сертификат об обучении с подписью Председателя Банка.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.checkIcon}>
                <img src={process.env.PUBLIC_URL + "/checkIcon.svg"} />
              </span>
            </Grid>
            <Grid item className={classes.textIcons}>
              <BccTypography type="h5" weight="normal">
                Экскурсии в банк. Увидеть как банк устроен изнутри и
                ознакомиться с профессиями.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.checkIcon}>
                <img src={process.env.PUBLIC_URL + "/checkIcon.svg"} />
              </span>
            </Grid>
            <Grid item className={classes.textIcons}>
              <BccTypography type="h5" weight="normal">
                Кадровый резерв. Будь активным и обеспечь себе место в банке уже
                сейчас.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid container className={classes.list}>
            <Grid item>
              <span className={classes.checkIcon}>
                <img src={process.env.PUBLIC_URL + "/checkIcon.svg"} />
              </span>
            </Grid>
            <Grid item className={classes.textIcons}>
              <BccTypography type="h5" weight="normal">
                Конкурсы и акции. Крутые подарки и незабываемые ощущения от
                квеста.
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
