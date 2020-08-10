import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PhoneAndroid, Call } from "@material-ui/icons";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundColor: "black",
      },
      root: {
        maxWidth: "100%",
        margin: "0 auto",
        padding: "32px 16px",
        display: "flex",
        flexWrap: "wrap",
      },
      copyrightBlock: {
        marginBottom: 16,
      },
      myFont: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 13,
        color: "white",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      mainRoot: {
        backgroundColor: "black",
      },
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
        padding: "48px 0",
      },
      myFont: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        color: "white",
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const onClickCall505 = () => {
    ReactGA.event({
      category: "BccCard_call_505",
      action: "call_505",
    });
    window.open("tel:505", "_self");
  };

  const onClickCallMB = () => {
    ReactGA.event({
      category: "BccCard_iron_call_2443030",
      action: "iron_call_2443030",
    });
    window.open("tel:87272443030", "_self");
  };
  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.copyrightBlock}
        >
          <Typography className={classes.myFont}>
            © 2000 - 2020 АО "Банк ЦентрКредит"
          </Typography>
          <Typography className={classes.myFont}>
            Все права защищены.
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Typography className={classes.myFont}>
            Лицензия на проведение банковских и иных операций и деятельности на
            рынке ценных бумаг №1.2.25/195/34 от 28.01.2015 выданная НБ РК.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
