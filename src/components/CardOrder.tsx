import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import {
  BccTypography,
  BccButton,
  BccCheckbox,
  BccInput,
  BccFormControlLabel,
} from "./BccComponents";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import MaskedInput from "react-maskedinput";
import { useTranslation } from "react-i18next";
import BlockUi from "react-block-ui";
import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import "react-block-ui/style.css";

const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("md")]: {
      root: {
        alignItems: "center",
        margin: "16px auto",
        width: "90%",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      title: {
        textAlign: "center",
        marginBottom: 16,
        fontSize: 32,
        lineHeight: 1,
      },
      formControlCheckBox: {
        marginTop: "20px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        maxWidth: 1280,
        width: "80%",
        margin: "36px auto",
        marginBottom: 90,
      },
      form: {
        maxWidth: 650,
        margin: "0 auto",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      title: {
        textAlign: "center",
        marginBottom: "27px",
      },
      formControlCheckBox: {
        marginTop: "25px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
    },
    input: {
      borderColor: "#2D72E5!important",
    },

    submit: {
      background: "#2D72E5!important",
      fontSize: "20px",
      lineHeight: "28px",
      "&:disabled": {
        color: "#B3B6BA",
        backgroundColor: "#F3F3F3!important",
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      cursor: "pointer",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
    },
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    successForm: {
      padding: "30px",
      marginTop: 64,
      borderRadius: 8,
      backgroundColor: "rgba(125, 206, 160, 0.2)",
      textAlign: "center",
      "& > img": {
        display: "block",
        margin: "0 auto",
        marginBottom: 23,
      },
      "& > div": {
        display: "block",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#1F7042",
      },
      "& > span": {
        display: "block",
        fontSize: 16,
        color: "#1F7042",
        marginBottom: 60,
      },
    },
    warningForm: {
      backgroundColor: "rgba(200, 79, 79, 0.05)",
      "& > div": {
        color: "#000D1A",
        fontSize: 16,
        fontWeight: "normal",
        marginBottom: 60,
      },
    },
    starbankingForm: {
      backgroundColor: "#FAFAFA",
      padding: "56px 30px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      "& > div": {
        marginBottom: 0,
      },
    },
    linkBlock: {
      width: "70%",
      alignSelf: "center",
      textAlign: "left",
    },
    starText: {
      fontSize: 12,
      color: "#000D1A",
      padding: "0 10px 0 0",
    },
    starQr: {
      height: "48px!important",
      marginBottom: 12,
    },
    starImages: {
      marginTop: 24,
      "& > img": {
        height: 32,
        verticalAlign: "middle",
        marginRight: 16,
        marginBottom: 12,
        cursor: "pointer",
      },
    },
    imgBlock: {
      width: "30%",
      "& > img": {
        width: "100%",
      },
    },
    hintText: {
      fontSize: 14,
      textAlign: "center",
      color: "#141414",
      opacity: 0.7,
    },
    grid: {
      marginBottom: 80,
      "& > div:nth-child(2)": {
        width: "calc((100% / 3))",
      },
      "& > div": {
        width: "calc(100% / 3 - 35px)",
        "& > img": {
          width: "100%",
        },
      },
    },
  })
);

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="7(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const CardOrder = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const classes = useStyles({});
  const { t } = useTranslation();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () => {
    return (
      fio.length > 1 && phoneNumber.replace("_", "").length === 16 && agree
    );
  };

  const formatPhoneNumber = () => {
    let res = phoneNumber;
    if (phoneNumber.slice(0, 1) === "8") res = "7" + phoneNumber.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download",
    });

    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download",
    });

    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
      "_blank"
    );
  };

  const handleClose = () => {
    setOpenError(false);
  };

  return (
    <Grid
      ref={props.refProp}
      id="order"
      container
      className={classes.root}
      spacing={4}
      direction="column"
      justify="center"
    >
      {/* <Grid
        container
        justify="space-between"
        wrap="nowrap"
        alignItems="baseline"
        className={classes.grid}
      >
        <Grid item>
          <img src={process.env.PUBLIC_URL + "/junior-card1.svg"} />
        </Grid>
        <Grid item>
          <img src={process.env.PUBLIC_URL + "/junior-card2.svg"} />
        </Grid>
        <Grid item>
          <img src={process.env.PUBLIC_URL + "/junior-card3.svg"} />
        </Grid>
      </Grid> */}
      <BccTypography type="h1" className={classes.title}>
        Заполните заявку и получите
        <br />
        Junior Card
      </BccTypography>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Возникла непредвиденная ошибка!
        </Alert>
      </Snackbar>
      <div className={classes.form}>
        <BlockUi tag="div" blocking={isLoading}>
          <>
            <BccInput
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              id="iin"
              className={classes.input}
              label="ФИО"
              name="fio"
              value={fio}
              onChange={(e: any) =>
                setFio(
                  e.target.value
                    .replace(/[^a-zA-ZА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, "")
                    .replace(/\s+/gi, ", ")
                )
              }
            />
            <BccInput
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              className={classes.input}
              id="phone"
              name="phone"
              helperText={phoneError ? "Неверный формат номера телефона" : ""}
              error={phoneError ? true : false}
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              label="Номер телефона"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
            <BccFormControlLabel
              className={classes.formControlCheckBox}
              control={
                <BccCheckbox
                  value="remember"
                  color="primary"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
              }
              label={
                <BccTypography type="p3" className={classes.checkBoxLabel}>
                  Я согласен(а) на сбор и обработку персональных данных
                </BccTypography>
              }
            />
            <Grid
              container
              style={{ marginTop: "16px", marginBottom: "16px" }}
              spacing={2}
            >
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="card_order_security.svg"
                  className={classes.icon}
                  alt="order_security"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <BccTypography type="p3" block>
                  Мы гарантируем безопасность и сохранность ваших данных
                </BccTypography>
              </Grid>
            </Grid>
            <BccButton
              onClick={() => {}}
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={!isValid()}
            >
              Подать заявку
            </BccButton>
          </>
        </BlockUi>
      </div>
    </Grid>
  );
};

export default CardOrder;
