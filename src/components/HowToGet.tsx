import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        padding: "0 56px",
      },
      stepsMob: {
        display: "none",
      },
      stepper: {
        display: "flex",
        position: "absolute",
        top: 160,
        left: "inherit",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          width: 18,
          "& > div:nth-child(2n)": {
            height: 120,
            backgroundColor: "#E6EAF0",
            width: 3,
          },
          "& > div.active:nth-child(2n)": {
            height: 120,
            backgroundColor: "#2D72E5",
            width: 3,
          },
          "& > div:nth-child(2n+1)": {
            width: 18,
            height: 18,
            border: "3px solid #E6EAF0",
            boxSizing: "border-box",
            borderRadius: 9,
          },
          "& > div.active:nth-child(2n+1)": {
            border: "none",
            backgroundColor: "#2D72E5",
          },
        },
      },
      stepText: {
        width: "100%",
        padding: "0 612px 160px 63px",
        display: "flex",
        marginTop: 160,
        flexDirection: "column",
        boxSizing: "border-box",
        "& > div": {
          display: "flex",
          flexDirection: "column",
          marginBottom: 120,
          "& > span:first-child": {
            display: "inline-block",
            width: 34,
            height: 34,
            backgroundColor: "#D7E6FF",
            borderRadius: 17,
            color: "#2D72E5",
            marginBottom: 10,
            textAlign: "center",
            lineHeight: "34px",
            fontSize: 16,
            fontWeight: "bold",
          },
        },
      },
      link: {
        color: "#2D72E5",
        textDecoration: "underline",
        cursor: "pointer",
      },
      appLinks: {
        "& > div": {
          width: 160,
          marginRight: 40,
          "& > img:first-child": {
            marginBottom: 10,
          },
          "& > img": {
            width: "100%",
          },
        },
        "& > img": {
          width: 100,
        },
      },
      stepGif: {
        position: "absolute",
        right: 40,
        top: 40,
        width: 600,
        height: 600,
        "& > div": {
          width: "inherit",
          height: "inherit",
          backgroundColor: "#FED832",
          borderRadius: "50%",
          transition: "all .7s ease",
        },
      },
      fixedGif: {
        position: "fixed",
        top: 40,
      },
      fixedGifBot: {
        position: "absolute",
        top: "auto",
        bottom: 40,
      },
      fixed: {
        position: "fixed!important",
        top: 160,
      },
      fixedBot: {
        position: "absolute",
        left: "inherit",
        top: "auto",
        bottom: 520,
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        padding: "0 28px",
      },
      stepper: {
        display: "none",
      },
      stepText: {
        display: "none",
      },
      link: {
        color: "#2D72E5",
        textDecoration: "underline",
        cursor: "pointer",
      },
      appLinks: {
        "& > div": {
          width: 160,
          marginRight: 40,
          "& > img:first-child": {
            marginRight: 24,
            width: 160,
          },
          "& > img": {
            width: 160,
          },
        },
      },
      stepGif: {
        display: "none",
      },
      stepsMob: {
        display: "flex",
        flexDirection: "column",
        "& > div": {
          textAlign: "center",
          marginBottom: 64,
          "& > div:first-child": {
            width: 600,
            height: 600,
            textAlign: "center",
            margin: "0 auto",
            marginBottom: 24,
            "& > div": {
              width: "inherit",
              height: "inherit",
              backgroundColor: "#FED832",
              borderRadius: "50%",
              transition: "all .7s ease",
            },
          },
          "& > span:nth-child(2)": {
            display: "inline-block",
            width: 34,
            height: 34,
            backgroundColor: "#D7E6FF",
            borderRadius: 17,
            color: "#2D72E5",
            marginBottom: 10,
            textAlign: "center",
            lineHeight: "34px",
            fontSize: 16,
            fontWeight: "bold",
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: "0 12px",
      },
      stepsMob: {
        "& > div": {
          "& > div:first-child": {
            width: "100%",
          },
        },
      },
    },
  })
);

const HowToGet = (props: any) => {
  const classes = useStyles({});
  const steps = [0, 1, 2];
  const [active, setActive] = React.useState(0);
  const [fixed, setFixed] = React.useState(false);
  const [fixedBot, setFixedBot] = React.useState(false);
  const step1Ref: any = React.useRef(null);
  const step2Ref: any = React.useRef(null);
  const step3Ref: any = React.useRef(null);

  React.useEffect(() => {
    window.document.addEventListener("scroll", (d) => {
      const blockHeight =
        step1Ref.current.offsetHeight +
        step2Ref.current.offsetHeight +
        step3Ref.current.offsetHeight;
      if (
        window.scrollY >=
        step1Ref.current.offsetParent?.offsetTop + blockHeight
      ) {
        setFixed(false);
        setFixedBot(true);
      } else if (window.scrollY >= step1Ref.current.offsetParent?.offsetTop) {
        {
          setFixed(true);
          setFixedBot(false);
        }
      } else {
        setFixed(false);
        setFixedBot(false);
      }
      window.scrollY >=
      step1Ref.current.offsetParent?.offsetTop +
        step1Ref.current.offsetHeight +
        step2Ref.current.offsetHeight
        ? setActive(2)
        : window.scrollY >=
          step1Ref.current.offsetParent?.offsetTop + step1Ref.current.offsetTop
        ? setActive(1)
        : setActive(0);
    });
  });

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

  return (
    <div className={classes.container} ref={props.refProp}>
      <div className={`${classes.stepper} ${fixedBot ? classes.fixedBot : ""}`}>
        <div className={fixed ? classes.fixed : ""}>
          {steps.map((s: any) => {
            if (s === active && s < steps.length - 1)
              return (
                <>
                  <div onClick={() => setActive(s)} className="active"></div>
                  <div></div>
                </>
              );
            if (s === active && s === steps.length - 1)
              return (
                <>
                  <div onClick={() => setActive(s)} className="active"></div>
                </>
              );
            else if (s < active && s < steps.length - 1)
              return (
                <>
                  <div onClick={() => setActive(s)} className="active"></div>
                  <div className="active"></div>
                </>
              );
            else if (s < steps.length - 1)
              return (
                <>
                  <div onClick={() => setActive(s)}></div>
                  <div></div>
                </>
              );
            else return <div onClick={() => setActive(s)}></div>;
          })}
        </div>
      </div>
      <div className={classes.stepText}>
        <div ref={step1Ref}>
          <span>1</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Закажите карту
          </BccTypography>
          <BccTypography type="p2l" block mb="40px">
            Откройте виртуальную детскую карту в приложении BCC.KZ или
            пластиковую в любом отделении банка
          </BccTypography>
          <Grid container wrap="nowrap" className={classes.appLinks}>
            <Grid item container direction="column">
              <img
                src={process.env.PUBLIC_URL + "/as.svg"}
                onClick={(e: any) => onClickAS(e)}
              />
              <img
                src={process.env.PUBLIC_URL + "/gp.svg"}
                onClick={(e: any) => onClickGP(e)}
              />
            </Grid>
            <img src={process.env.PUBLIC_URL + "/qr.svg"} />
          </Grid>
          <BccTypography type="p2l" block mt="16px">
            Скачайте приложение BCC.KZ в App Store, Google Play или наведите
            камеру телефона на QR код
          </BccTypography>
        </div>
        <div ref={step2Ref}>
          <span>2</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Установите приложение Junior Bank на телефон ребёнка
          </BccTypography>
          <BccTypography type="p2l" block mb="36px">
            Как только откроется детская карта на телефонный номер ребенка
            придет СМС с ссылкой на скачивание приложения.
          </BccTypography>
          <BccTypography type="p2l" block>
            С помощью приложения{" "}
            <a href="#" target="_blank" className={classes.link}>
              Junior Bank
            </a>{" "}
            ребёнок сможет начать пользоваться картой и отслеживать свои траты.
          </BccTypography>
        </div>
        <div ref={step3Ref}>
          <span>3</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Привяжите карту к Apple Pay или Samsung Pay
          </BccTypography>
          <BccTypography type="p2l" block>
            Ребёнок со смартфоном, с функцией бесконтактных платежей, сможет
            безопасно оплачивать свои покупки
          </BccTypography>
        </div>
      </div>
      <div
        className={`${classes.stepGif} ${fixedBot ? classes.fixedGifBot : ""}`}
      >
        <div
          className={fixed ? classes.fixedGif : ""}
          style={{
            background: `url(/${active + 1}-step.gif) no-repeat center bottom`,
          }}
        ></div>
      </div>
      <div className={classes.stepsMob}>
        <div>
          <div>
            <div
              className={classes.stepImg}
              style={{
                background: `url(/${active +
                  1}-step.gif) no-repeat center bottom`,
              }}
            ></div>
          </div>
          <span>1</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Закажите карту
          </BccTypography>
          <BccTypography type="p2l" block mb="40px">
            Откройте виртуальную детскую карту в приложении BCC.KZ или
            пластиковую в любом отделении банка
          </BccTypography>
          <Grid
            container
            justify="center"
            wrap="nowrap"
            className={classes.appLinks}
          >
            <img
              src={process.env.PUBLIC_URL + "/as.svg"}
              onClick={(e: any) => onClickAS(e)}
            />
            <img
              src={process.env.PUBLIC_URL + "/gp.svg"}
              onClick={(e: any) => onClickGP(e)}
            />
          </Grid>
        </div>
        <div>
          <div>
            <div
              className={classes.stepImg}
              style={{
                background: `url(/2-step.gif) no-repeat center bottom`,
              }}
            ></div>
          </div>
          <span>2</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Установите приложение Junior Bank на телефон ребёнка
          </BccTypography>
          <BccTypography type="p2l" block mb="36px">
            Как только откроется детская карта на телефонный номер ребенка
            придет СМС с ссылкой на скачивание приложения.
          </BccTypography>
          <BccTypography type="p2l" block>
            С помощью приложения{" "}
            <a href="#" target="_blank" className={classes.link}>
              Junior Bank
            </a>{" "}
            ребёнок сможет начать пользоваться картой и отслеживать свои траты.
          </BccTypography>
        </div>
        <div>
          <div>
            <div
              className={classes.stepImg}
              style={{
                background: `url(/3-step.gif) no-repeat center bottom`,
              }}
            ></div>
          </div>
          <span>3</span>
          <BccTypography color="#2D72E5" type="h4" block mb="16px">
            Привяжите карту к Apple Pay или Samsung Pay
          </BccTypography>
          <BccTypography type="p2l" block>
            Ребёнок со смартфоном, с функцией бесконтактных платежей, сможет
            безопасно оплачивать свои покупки
          </BccTypography>
        </div>
      </div>
    </div>
  );
};

export default HowToGet;
