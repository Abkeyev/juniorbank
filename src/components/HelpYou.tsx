import React from "react";
import { BccTypography } from "./BccComponents";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PhoneAndroid, Call } from "@material-ui/icons";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA",
        padding: "50px 0",
      },
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        marginBottom: 70,
        position: "relative",
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
      paper: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 20,
        border: "1px solid #E8E8E8",
        display: "grid",
        alignContent: "center",
        "&:hover": {
          cursor: "pointer",
        },
      },
      title: {
        textAlign: "left",
        marginBottom: 36,
      },
      subTitle: {
        marginBottom: 16,
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B",
        paddingLeft: 48,
      },
      freeCallText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
      },
      freeCall: {
        color: "#ffffff",
        background: "#2D72E5",
        borderRadius: 8,
        width: 32,
        height: 32,
        padding: 6,
        boxSizing: "border-box",
        verticalAlign: "text-bottom",
        marginRight: 16,
      },
      phoneText: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        display: "flex",
        alignItems: "center",
      },
      phone: {
        color: "#ffffff",
        width: 32,
        height: 32,
        marginRight: 16,
      },
      callUs: {
        "& > div:first-child": {
          marginRight: 24,
        },
        "& > div": {
          width: "35%",
          "& > div": {
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            minHeight: 100,
            padding: 20,
            border: "1px solid #E8E8E8",
            alignContent: "center",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        marginBottom: 36,
        padding: "0 28px",
        position: "relative",
      },
      phone: {
        color: "#ffffff",
        width: 32,
        height: 32,
        marginRight: 16,
      },
      callUs: {
        "& > div:first-child": {
          marginRight: 24,
        },
        "& > div": {
          width: "calc(50% - 12px)",
          "& > div": {
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            minHeight: 100,
            padding: 20,
            border: "1px solid #E8E8E8",
            alignContent: "center",
          },
        },
      },
      mainRoot: {
        backgroundColor: "#FAFAFA",
        padding: "20px 0",
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
      paper: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 20,
        border: "1px solid #E8E8E8",
        marginBottom: 10,
        height: "auto",
        "&:hover": {
          cursor: "pointer",
        },
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B",
        paddingLeft: 48,
      },
      freeCallText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
      },
      freeCall: {
        color: "#ffffff",
        background: "#2D72E5",
        borderRadius: 8,
        width: 32,
        height: 32,
        padding: 6,
        boxSizing: "border-box",
        verticalAlign: "text-bottom",
        marginRight: 16,
      },
      phoneText: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
      },
      gridMargin: {
        marginTop: 30,
        padding: "0 !important",
      },
      title: {
        textAlign: "left",
        marginBottom: 36,
      },
      subTitle: {
        marginBottom: 16,
      },
    },
    [theme.breakpoints.down("xs")]: {
      paper: {
        display: "flex",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
        },
      },
      textPapr: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        paddingLeft: 0,
      },
      freeCallText: {
        fontSize: 20,
      },
      phoneText: {
        fontSize: 18,
        display: "flex",
        alignItems: "center",
      },
      gridMargin: {
        marginTop: 0,
      },
      callUs: {
        "& > div:first-child": { marginRight: 0, marginBottom: 12 },
        "& > div": {
          width: "100%",
          "& > span": {
            fontSize: 24,
            lineHeight: "24px",
          },
        },
      },
    },
  })
);

const HelpYou = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickCall505 = () => {
    ReactGA.event({
      category: "BccIronCard_iron_call_505",
      action: "iron_call_505",
    });
    window.open("tel:505");
  };

  const onClickCallMB = () => {
    ReactGA.event({
      category: "BccIronCard_iron_call_2443030",
      action: "iron_call_2443030",
    });
    window.open("tel:87012443030");
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root} justify="center">
        <Grid item>
          <BccTypography type="h1" block className={classes.title}>
            Возникли вопросы?
          </BccTypography>
        </Grid>
        <Grid container justify="center" className={classes.callUs}>
          <Grid item>
            <BccTypography type="h2" block className={classes.subTitle}>
              Звоните
            </BccTypography>
            <Grid container wrap="nowrap" onClick={() => onClickCall505()}>
              <Grid item>
                <Call className={classes.freeCall} />
              </Grid>
              <Grid item>
                <BccTypography type="h4" block className={classes.subTitle}>
                  505
                </BccTypography>
                <BccTypography type="p2" block>
                  Бесплатно с мобильного
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <BccTypography type="h2" block className={classes.subTitle}>
              Пишите
            </BccTypography>
            <Grid container wrap="nowrap" onClick={() => onClickCallMB()}>
              <Grid item>
                <img
                  src={process.env.PUBLIC_URL + "/wp.svg"}
                  className={classes.phone}
                />
              </Grid>
              <Grid item>
                <BccTypography type="h4" block>
                  +7 (701) 244 30 30
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HelpYou;
