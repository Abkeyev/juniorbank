import React from "react";
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
                marginBottom: 140,
                padding: "0 56px 0",
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
            ourSpec: {
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 18,
                color: "#5B5B5B",
                paddingLeft: 56,
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
                background: "#2D72E5",
                borderRadius: 8,
                width: 32,
                height: 32,
                padding: 6,
                boxSizing: "border-box",
                verticalAlign: "text-bottom",
                marginRight: 16,
            },
        },

        [theme.breakpoints.down("sm")]: {
            root: {
                maxWidth: '100%',
                margin: "0 auto",
                marginBottom: 32,
                padding: "0 16px 32px",
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
                height: 'auto',
                "&:hover": {
                    cursor: "pointer",
                },
            },
            ourSpec: {
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 18,
                color: "#5B5B5B",
                paddingLeft: 56,
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
            phone: {
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
            gridMargin: {
                marginTop: 30,
                padding: '0 !important'
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
            ourSpec: {
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 16,
                paddingLeft: 10,
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
        },
        root: {
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
        },
        gridMargin: {
            "& > a": {
                textDecoration: "none",
                color: "black",
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
        window.open("tel:87272443030");
    };

    return (
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root} spacing={4} justify="center">
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={classes.gridMargin}
                >
                    <Box
                        onClick={() => onClickCall505()}
                        className={classes.paper}
                        height={1}
                    >
                        <Typography className={classes.freeCallText}>
                            <Call className={classes.freeCall} /> 505
            </Typography>
                        <Typography className={classes.ourSpec}>
                            Бесплатно с мобильного
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={classes.gridMargin}
                >
                    <Box
                        className={classes.paper}
                        height={1}
                        onClick={() => onClickCallMB()}
                    >
                        <Typography className={classes.phoneText}>
                            <PhoneAndroid className={classes.phone} /> 8 (727) 244 30 30
            </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HelpYou;
