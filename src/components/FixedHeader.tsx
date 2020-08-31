import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s",
      },
      smallcard: {
        marginRight: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& > img": {
          height: 80,
          marginTop: 10,
        },
      },
      headerBtn: {
        backgroundColor: "#2D72E5!important",
        fontSize: 16,
        fontWeight: "bold",
        minWidth: 240,
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "21px 52px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s",
      },
      small: {
        display: "none",
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: 230,
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        padding: 0,
        "&:hover": {
          backgroundColor: "#3F0259",
          opacity: 0.8,
        },
        overflow: "hidden",
      },
    },
    [theme.breakpoints.down("sm")]: {
      hide: {
        display: "none",
        opacity: 0,
        transition: "all ease-in-out .3s",
      },
      headerBtn: {
        backgroundColor: "#2D72E5!important",
        height: 56,
        fontSize: 16,
        lineHeight: "56px",
        minWidth: "auto",
      },
      small: {
        display: "none",
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "16px 26px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s",
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: "auto",
        padding: "0 10px",
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#3F0259",
          opacity: 0.8,
        },
        overflow: "hidden",
      },
      smallcard: {
        marginRight: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& > img": {
          height: 64,
          marginTop: 10,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      header: {
        padding: "16px",
        disaplay: "block",
        "& > div:first-child": {
          width: "20%",
          "& > img": {
            width: "100%",
          },
        },
      },
      logo: {
        display: "none",
      },
      headerBtn: {
        backgroundColor: "#2D72E5!important",
        height: 48,
        fontSize: 16,
        lineHeight: "48px",
        minWidth: "auto",
      },
      small: {
        display: "block",
      },
      smallcard: {
        marginRight: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& > img": {
          height: 53,
          marginTop: 5,
        },
      },
    },
  })
);

let hide = true;

const FixedHeader = (props: any) => {
  let [hide, setHide] = useState(true);
  useEffect(() => {
    window.document.addEventListener("scroll", (d) => {
      const doc = document;
      const element = doc && doc.getElementById("secondHeader");
      const scrollTop = element && element.offsetTop;
      scrollTop && window.scrollY >= scrollTop
        ? setHide((hide = false))
        : setHide((hide = true));
    });
  });

  const classes = useStyles({});
  const { t } = useTranslation();

  const order = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "1button_open_account_online_calltoaction",
      action: "Open_account_online_calltoaction",
    });
    props.scrollToOrder();
  };

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      alignItems="center"
      className={hide ? classes.hide : classes.header}
    >
      <Grid item xl={6} lg={6} md={6} sm={4} xs={3}>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="BCC Logo" />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={8} xs={9}>
        <Grid
          justify="flex-end"
          alignContent="center"
          alignItems="center"
          container
        >
          <Grid item className={classes.smallcard}>
            <img
              src={process.env.PUBLIC_URL + "/juniorcard.svg"}
              alt="Juniorcard"
            />
          </Grid>
          <Grid>
            <BccButton
              variant="contained"
              className={classes.headerBtn}
              color="primary"
              onClick={(e: any) => order(e)}
            >
              Оформить
            </BccButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FixedHeader;
