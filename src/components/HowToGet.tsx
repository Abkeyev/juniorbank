import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccStepLabel,
  BccStepper,
  BccStep,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            width: "70%",
            margin: "0 auto",
          },
          "&  > video": {
            width: "70%",
            margin: "0 auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#2D72E5",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#2D72E5",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          width: "100%",
        },
      },
      qr: {
        "& > img": {
          width: "50%",
        },
      },
      mobileLinks: {
        marginRight: 6,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      stepper: {
        padding: "40px 0 60px",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto 140px",
        paddingTop: 30,
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        alignItems: "center",
        minHeight: 400,
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            maxHeight: 400,
          },
          "&  > video": {
            maxHeight: 400,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#2D72E5",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 100,
        "& > span": {
          color: "#2D72E5",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "auto",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: { marginRight: 50 },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
        backgroundColor: "#2D72E5!important",
        transition: "all .5s ease",
        "&:hover": {
          opacity: 0.5,
        },
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      as: {
        marginBottom: 25,
        display: "inline-block",
      },
    },
    link: {
      color: "#2D72E5",
      display: "block",
      textDecoration: "underline",
      cursor: "pointer",
    },
    jc: {
      maxWidth: 400,
    },
  })
);

const HowToGet = (props: any) => {
  const steps1 = [1, 2, 3, 4, 5];
  const steps2 = [1, 2, 3, 4, 5, 6];
  const classes = useStyles({});
  const [activeStep, setActiveStep] = React.useState(1);
  const [steps, setActiveSteps] = React.useState(steps1);
  const [toggle, setToggle] = React.useState("ip");
  const { t } = useTranslation();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  const onClickAS = (e: any) => {
    e.preventDefault();

    ReactGA.event({
      category: "Juniorbank_downloawd_AppStore",
      action: "juniorbank_appstore",
    });
    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGP = (e: any) => {
    ReactGA.event({
      category: "Juniorbank_downloawd_GooglePlay",
      action: "juniorbank_googleplay",
    });
    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 1:
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.star}
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/step1.svg"} alt="BCC.KZ" />
            </Grid>
            <Grid item className={classes.starBlock2}>
              <BccTypography type="h4" block className={classes.starBusiness}>
                BCC.KZ
              </BccTypography>
              <BccTypography type="p2" block className={classes.starSteps}>
                Скачайте мобильное приложение «bcc.kz»
              </BccTypography>
              <Grid
                container
                justify="flex-start"
                direction="row"
                className={classes.lOut}
                wrap="nowrap"
              >
                <Grid item className={classes.mobileLinks}>
                  <span
                    className={`${classes.link} ${classes.as}`}
                    onClick={(e: any) => onClickAS(e)}
                  >
                    <img src={process.env.PUBLIC_URL + "/as.svg"} />
                  </span>
                  <span
                    className={classes.link}
                    onClick={(e: any) => onClickGP(e)}
                  >
                    <img src={process.env.PUBLIC_URL + "/gp.svg"} />
                  </span>
                </Grid>
                <Grid item className={classes.qr}>
                  <img src={process.env.PUBLIC_URL + "/qr.svg"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.star}
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/step1.svg"} alt="Step2" />
            </Grid>
            <Grid item className={classes.starBlock2}>
              <BccTypography type="h4" block className={classes.starBusiness}>
                Cтаньте клиентом
              </BccTypography>
              <BccTypography type="p2" block className={classes.starSteps}>
                Станьте клиентом банка, зарегистрировавшись в bcc.kz
                дистанционно
              </BccTypography>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.star}
          >
            <Grid item>
              <img
                className={classes.jc}
                src={process.env.PUBLIC_URL + "/juniorcard.svg"}
                alt="Step3"
              />
            </Grid>
            <Grid item className={classes.starBlock2}>
              <BccTypography type="h4" block className={classes.starBusiness}>
                Подать заявку
              </BccTypography>
              <BccTypography type="p2" block className={classes.starSteps}>
                Подайте заявку на выпуск виртуальной карты Junior или откройте
                пластиковую карту мгновенного выпуска в отделении
              </BccTypography>
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.star}
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/step4.png"} alt="Step5" />
            </Grid>
            <Grid item className={classes.starBlock2}>
              <BccTypography type="h4" block className={classes.starBusiness}>
                Приложение Junior Bank
              </BccTypography>
              <BccTypography type="p2" block className={classes.starSteps}>
                Установите на смартфон ребенка детское мобильное приложение
                Junior Bank по ссылке направленной банком на номер ребенка
              </BccTypography>
            </Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.star}
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/step5.png"} alt="Step5" />
            </Grid>
            <Grid item className={classes.starBlock2}>
              <BccTypography type="h4" block className={classes.starBusiness}>
                Apple Pay / Samsung Pay
              </BccTypography>
              <BccTypography type="p2" block className={classes.starSteps}>
                Привяжите виртуальную карту Junior к Apple Pay/ Samsung Pay и
                платите смартфоном или пластиковой картой Junior выпущенной в
                отделении Банка.
              </BccTypography>
            </Grid>
          </Grid>
        );
      default:
        return "Ошибка";
    }
  }

  return (
    <div className={classes.container} ref={props.refProp}>
      <BccTypography type="h2" block className={classes.title}>
        Как заказать карту?
      </BccTypography>
      <BccTypography
        type="h6"
        weight="normal"
        block
        className={classes.subitle}
      >
        Предлагаем воспользоваться пошаговой инструкцией для открытия счёта:
      </BccTypography>
      <BccStepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <BccStep key={`step${label}`}>
            <BccStepLabel>
              <BccTypography type="p4">Шаг {label}</BccTypography>
            </BccStepLabel>
          </BccStep>
        ))}
      </BccStepper>
      <div>
        <div>
          <div className={classes.anim}>{getStepContent(activeStep)}</div>
          {activeStep === steps.length ? (
            <div>
              <BccTypography type="p2" className={classes.instructions}>
                Все завершено!
              </BccTypography>
              <BccButton
                variant="contained"
                color="primary"
                onClick={handleReset}
                className={classes.nextBtn}
              >
                К началу
              </BccButton>
            </div>
          ) : (
            <div>
              <BccButton
                variant="text"
                disabled={activeStep === 1}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </BccButton>
              <BccButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextBtn}
              >
                {activeStep === steps.length ? "Завершить" : "Далее"}
              </BccButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowToGet;
