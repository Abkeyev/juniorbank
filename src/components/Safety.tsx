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
        padding: "0 16px 32px",
        marginTop: 40,
      },
      title: {
        marginBottom: 30,
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 1,
      },
      list: {
        alignItems: "center",
        "& > div": {
          width: "100%",
          padding: "16px",
          boxSizing: "border-box",
          backgroundColor: "#F1F7F9",
          borderRadius: 8,
          marginBottom: 30,
          "& > div": {
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            "& > div:first-child": {
              marginRight: 20,
            },
            "& > div:last-child": {
              width: "calc(100% - 90px)",
            },
          },
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 56px 120px",
      },
      title: {
        marginBottom: 30,
      },
      list: {
        alignItems: "center",
        "& > div": {
          width: "calc(50% - 15px)",
          padding: "36px 72px",
          boxSizing: "border-box",
          backgroundColor: "#F1F7F9",
          borderRadius: 8,
          marginBottom: 30,
          "& > div": {
            alignItems: "center",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            "& > div:first-child": {
              marginRight: 50,
            },
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        marginTop: 0,
      },
      title: {
        textAlign: "center",
      },
    },
    root: {
      position: "relative",
    },
  })
);

const Safety = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <BccTypography type="h1" block className={classes.title}>
        Контроль и безопасность
      </BccTypography>
      <Grid
        container
        justify="space-between"
        className={classes.list}
        wrap="wrap"
      >
        <Grid item>
          <Grid container justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/safety1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="p2l" block>
                Покупки только в разрешенных категориях до 18
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/safety2.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="p2l" block>
                СМС уведомления об операциях родителю и пуш уведомления ребенку
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/safety3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="p2l" block>
                Отслеживание операций в BCC.KZ
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/safety4.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="p2l" block>
                Безопасные лимиты от банка
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Safety;
