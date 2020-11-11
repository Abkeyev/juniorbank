import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    '@keyframes snowflakesFall': {
      "0%": {
        top: '-10%'
      },
      '100%': {
        top: '100%'
      }
    },
    '@keyframes snowflakesShake': {
      '0%': {
        transform: 'translateX(0px)'
      },
      '50%': {
        transform: 'translateX(80px)'
      },
      '100%': {
        transform: 'translateX(0px)'
      }
    },
    "@keyframes catMode": {
      "0%": {
        transform: "translateX(-150px)",
        opacity: 1
      },
      "25%": {
        transform: "translateX(50px)",
        opacity: 1
      },
      "100%": {
        transform: "translateX(70px)",
        opacity: 0
      },
    },
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

      fixedBtnModal: {
        width: 32,
        height: 32,
        display: 'flex',
        background: "#2D72E5",
        position: "relative",
        marginLeft: 'auto',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '.3s',
        "&:hover": {
          opacity: 0.6
        },
        "&:before": {
          content: "' '",
          position: "absolute",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 2,
          height: 16,
          background: "white",
          borderRadius: '20px',
          transform: 'rotate(-45deg)'
        },
        "&:after": {
          content: "' '",
          position: "absolute",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 2,
          height: 16,
          background: "white",
          borderRadius: '20px',
          transform: 'rotate(45deg)'
        }
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        height: '80vh',
        width: 920,
        position: "relative",
        padding: "16px",
        borderRadius: 20,
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
        "& img": {
          zIndex: 102,
          width: "100%",
        },
      },
      fixedImgModal: {
        zIndex: 103,
        opacity: 1,
        "& img:last-child": {
          display: "none",
        },
      },
      modalTitle: {
        overflowY: "auto",
        overflowX: "hidden",
        height: 'calc(100% - 32px)',
        "& h3": {
          marginTop: 0,
          fontSize: 24,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      gridTableCols: {

      },
      trTable: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #F3F3F3'
      },
      col3: {
        width: '25%',
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#80868C'
      },
      col9: {
        paddingLeft: 48,
        width: '75%',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#000000'
      },
      trBody: {
        marginBottom: 16,
        position: 'relative',
        '& img': {
          position: 'absolute',
          width: 72,
          left: -140,
          bottom: 0,
          top: 0,
          margin: 'auto'
        },
        '& p': {
          fontWeight: 'normal',
          fontSize: 14,
          color: '#000000',
          marginBottom: 2
        },
      },
      trHead: {
        position: 'relative',
        '& img': {
          position: 'absolute',
          width: 72,
          right: 30,
          bottom: -30
        },
        '& h3': {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          color: '#000000',
        },
        '& p': {
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: '#000000',
          margin: 0
        },
      },


      bannerCat: {
        position: "relative",
        height: '100%',
        margin: '32px 0',
        overflow: 'hidden',
        zIndex: 9,
        cursor: 'pointer'
      },
      bannerCatImg: {
        width: '100%'
      },
      catImg: {
        position: "absolute",
        bottom: 4,
        width: 'auto',
        animation: "$catMode 5s linear infinite",
      },
      snowFlake: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        '& span': {
          color: '#fff',
          fontSize: '1em',
          position: 'absolute',
          top: '-10%',
          zIndex: '9999',
          userSelect: 'none',
          cursor: 'default',
          animationName: '$snowflakesFall, $snowflakesShake',
          animationDuration: '10s, 3s',
          animationTimingFunction: 'linear, ease-in-out',
          animationIterationCount: 'infinite, infinite',
          animationPlayState: 'running, running',
          '&:nth-child(1)': {
            left: '1%',
            animationDelay: '0s, 0s'
          },
          '&:nth-child(2)': {
            left: '10%',
            animationDelay: '1s, 1s'
          },
          '&:nth-child(3)': {
            left: '20%',
            animationDelay: '6s, 0.5s'
          },
          '&:nth-child(4)': {
            left: '30%',
            animationDelay: '4s, 2s'
          },
          '&:nth-child(5)': {
            left: '40%',
            animationDelay: '2s, 2s'
          },
          '&:nth-child(6)': {
            left: '50%',
            animationDelay: '8s, 3s'
          },
          '&:nth-child(7)': {
            left: '60%',
            animationDelay: '6s, 2s'
          },
          '&:nth-child(8)': {
            left: '70%',
            animationDelay: '2.5s, 1s'
          },
          '&:nth-child(9)': {
            left: '80%',
            animationDelay: '1s, 0s'
          },
          '&:nth-child(10)': {
            left: '90%',
            animationDelay: '3s, 1.5s'
          }
        },
      }
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        marginTop: 0,
      },
      title: {
        textAlign: "center",
      },

      fixedBtnModal: {
        width: 32,
        height: 32,
        display: 'flex',
        background: "#2D72E5",
        position: "relative",
        marginLeft: 'auto',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '.3s',
        "&:hover": {
          opacity: 0.6
        },
        "&:before": {
          content: "' '",
          position: "absolute",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 2,
          height: 16,
          background: "white",
          borderRadius: '20px',
          transform: 'rotate(-45deg)'
        },
        "&:after": {
          content: "' '",
          position: "absolute",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 2,
          height: 16,
          background: "white",
          borderRadius: '20px',
          transform: 'rotate(45deg)'
        }
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        height: '80vh',
        width: 'calc(100% - 32px)',
        position: "relative",
        padding: "16px",
        borderRadius: 20,
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
        "& img": {
          zIndex: 102,
          width: "100%",
        },
      },
      fixedImgModal: {
        zIndex: 103,
        opacity: 1,
        "& img:last-child": {
          display: "none",
        },
      },
      modalTitle: {
        overflowY: "auto",
        overflowX: "hidden",
        height: 'calc(100% - 32px)',
        "& h3": {
          marginTop: 0,
          fontSize: 24,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      gridTableCols: {

      },
      trTable: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '10px 0',
        borderBottom: '1px solid #F3F3F3'
      },
      col3: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 14,
        marginBottom: 8,
        color: '#80868C'
      },
      col9: {
        paddingLeft: 0,
        width: '100%',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#000000'
      },
      trBody: {
        marginBottom: 16,
        position: 'relative',
        '& img': {
          position: 'absolute',
          width: 72,
          left: -140,
          bottom: 0,
          top: 0,
          margin: 'auto',
          display: 'none'
        },
        '& p': {
          fontWeight: 'normal',
          fontSize: 14,
          color: '#000000',
          marginBottom: 2
        },
      },
      trHead: {
        position: 'relative',
        '& img': {
          position: 'absolute',
          width: 72,
          right: 30,
          bottom: -30
        },
        '& h3': {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          color: '#000000',
        },
        '& p': {
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: '#000000',
          margin: 0
        },
      },


      bannerCat: {
        position: "relative",
        height: '100%',
        margin: '32px 0',
        overflow: 'hidden',
        zIndex: 9,
        cursor: 'pointer'
      },
      bannerCatImg: {
        display: 'none',
        width: '100%'
      },
      bannerCatImgM: {
        width: '100%'
      },
      catImg: {
        position: "absolute",
        top: 4,
        width: '200px',
        animation: "$catMode 5s linear infinite",
      },
      snowFlake: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        '& span': {
          color: '#fff',
          fontSize: '1em',
          position: 'absolute',
          top: '-10%',
          zIndex: '9999',
          userSelect: 'none',
          cursor: 'default',
          animationName: '$snowflakesFall, $snowflakesShake',
          animationDuration: '10s, 3s',
          animationTimingFunction: 'linear, ease-in-out',
          animationIterationCount: 'infinite, infinite',
          animationPlayState: 'running, running',
          '&:nth-child(1)': {
            left: '1%',
            animationDelay: '0s, 0s'
          },
          '&:nth-child(2)': {
            left: '10%',
            animationDelay: '1s, 1s'
          },
          '&:nth-child(3)': {
            left: '20%',
            animationDelay: '6s, 0.5s'
          },
          '&:nth-child(4)': {
            left: '30%',
            animationDelay: '4s, 2s'
          },
          '&:nth-child(5)': {
            left: '40%',
            animationDelay: '2s, 2s'
          },
          '&:nth-child(6)': {
            left: '50%',
            animationDelay: '8s, 3s'
          },
          '&:nth-child(7)': {
            left: '60%',
            animationDelay: '6s, 2s'
          },
          '&:nth-child(8)': {
            left: '70%',
            animationDelay: '2.5s, 1s'
          },
          '&:nth-child(9)': {
            left: '80%',
            animationDelay: '1s, 0s'
          },
          '&:nth-child(10)': {
            left: '90%',
            animationDelay: '3s, 1.5s'
          }
        },
      }
    },
    root: {
      position: "relative",
    },
    open: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      transition: ".3s",
    },
    drpBack: {
      width: "100%",
      height: "100%",
      background: "#00000099",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 100,
      cursor: "pointer",
    },
    closed: {
      display: "none",
    },
  })
);

const Safety = (props: any) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root} id="secondHeader">
      <Grid className={classes.bannerCat}
        onClick={() => {
          setOpen(true);
        }}>
        <img className={classes.catImg} src="cat-banner.svg" />
        <img className={classes.bannerCatImg} src="bg-banner-cat.png" />
        <img className={`${classes.bannerCatImgM} ${classes.mobCatImg}`} src="bg-banner-cat-mob.svg" />
        <div className={classes.snowFlake}>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
          <span>❅</span>
        </div>
      </Grid>

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

      <Grid className={`${classes.fixedModal} ${open ? classes.open : ""}`}>
        <Grid className={classes.modalClose}>
          <Grid className={`${classes.modalMain} ${classes.notScroll}`}>

            <div
              className={classes.fixedBtnModal}
              onClick={() => setOpen(false)}
            >
            </div>
            <Grid className={classes.modalTitle}>
              <div className={classes.trHead}>
                <h3 style={{ marginBottom: 16 }}>
                  АКЦИЯ
                </h3>
                <p>Наименование акции: «Новый год с Лаки»</p>
                <p style={{ marginBottom: 16 }}>Цель акции: Увеличение количества оборотов по картам Джуниор</p>
                <p style={{ marginBottom: 32 }}>Условия акции:</p>
                <img src="gift-1.svg" />
              </div>
              <Grid className={classes.gridTableCols}>
                <div className={classes.trTable}>
                  <div className={classes.col3}>Срок проведения акции</div>
                  <div className={classes.col9}>с 16.11.2020 г.  по 16.12.2020 г.</div>
                </div>
                <div className={classes.trTable}>
                  <div className={classes.col3}>Участники акции</div>
                  <div className={classes.col9}>Клиенты, оформившие карту «Junior Bank» и совершившие транзакций по карте на сумму более 5 000 тенге</div>
                </div>
                <div className={classes.trTable}>
                  <div className={classes.col3}>География проведения</div>
                  <div className={classes.col9}>Филиальная сеть</div>
                </div>
                <div className={classes.trTable}>
                  <div className={classes.col3}>Продукты:</div>
                  <div className={classes.col9}>«Junior Bank» по действующим условиям</div>
                </div>
                <div className={classes.trTable}>
                  <div className={classes.col3}>Условия:</div>
                  <div className={classes.col9}>
                    <b style={{ marginBottom: 16 }}>Условия Акции:</b>
                    <div className={classes.trBody}>
                      <p>1.	Иметь оформленную и активную карту «Junior Bank» и совершить транзакции с 16.11.2020 г.  по 16.12.2020 г. по карте на сумму 5 000 (пять тысяч) тенге и более, цельной или дробными суммами.</p>
                      <p>2.	Ребенок, для которого была открыта карта, заполняет «Письмо Деду Морозу», где пишет, что хочет получить на Новый Год и отправляет письмо с контактными данными (ФИО и номер телефона) на почту marketing@bcc.kz с обязательной пометкой «Письмо Деду Морозу»</p>
                      <p>3.	В акции участвуют дети от 6 до 18 лет</p>
                      <p>4.	Для участия необходимо согласие родителей или законных представителей.</p>
                      <p>5.	Сумма подарка не должна превышать 30 000 тг</p>
                      <p>6.	Количество победителей - 100 человек</p>
                      <p>7.	Определение победителей -  22.12.2020 г.</p>
                      <p>8.	Отправка подарков 28-29.12.2020</p>
                      <p>Территория проведения Акции: Филиальная сеть БЦК</p>
                      <img src="gift-2.svg" />
                    </div>

                    <b style={{ marginBottom: 16 }}>Правила Акции для клиентов Банка:</b>
                    <div className={classes.trBody}>
                      <p>1. Все клиенты Банка, оформившие карту «Junior Bank» и совершившие транзакции по карте на сумму более 5 000 тенге за период действия Акции и отправившие письмо с контактными данными (ФИО и номер телефона) на почту marketing@bcc.kz с обязательной пометкой «Письмо Деду Морозу», становятся участниками Акции.</p>
                      <p>2. В Акции может участвовать 1 ребенок по 1 номеру карты</p>
                      <p>(виртуальной или пластиковой). А также несколько детей из одной семьи.</p>
                      <p>3. Сумма желаемого подарка не должна превышать 30 000 (тридцать тысяч) тенге</p>
                      <p>Не признаются участниками Акции и не имеют права принимать в ней участие:</p>
                      <p>1.Заблокированные и закрытые карты</p>
                      <p>2. Нерезиденты РК</p>
                      <img src="gift-3.svg" />
                    </div>

                    <b style={{ marginBottom: 16 }}>Как определяются победители:</b>
                    <div className={classes.trBody}>
                      <p>Победитель будет выбран по № карты Junior генератором случайных чисел.</p>
                      <p>Розыгрыш будет проведен в режиме онлайн трансляции в Instagram</p>
                    </div>

                    <b style={{ marginBottom: 16 }}>Особые условия:</b>
                    <div className={classes.trBody}>
                      <p>1. Организаторы конкурса вправе переиграть процесс определения победителя, если выявленный победитель не выйдет на связь с менеджерами банка в течение 24 часов после окончания конкурса, а также если сумма подарка превышает бюджет в 30 000 тенге.</p>
                      <p>2. Подарок отправляется победителю по почте/курьерской службой или денежной суммой в 30 000 тг методом перевода на счет клиента.</p>
                      <p>3. Подарков может быть несколько, однако совокупная сумма всех подарков не должна превышать сумму в 30 000 тенге. Если же совокупная сумма нескольких подарков составляет больше 30 000 тенге, то производится закуп подарков количественно меньше, но на сумму более приближенную до 30 000 тенге.</p>
                      <p>4. В течение периода проведения Акции организатор вправе вносить изменения в настоящие Правила в одностороннем порядке; в случае внесения изменений и/или дополнений в настоящие Правила распространяет информацию о внесенных изменениях на сайте Банка: www.bcc.kz</p>

                      <img src="gift-4.svg" />
                    </div>

                  </div>
                </div>
                <div className={classes.trTable}>
                  <div className={classes.col3}>Периодичность розыгрыша/подведения итогов</div>
                  <div className={classes.col9}>Подведение итогов - 22 декабря 2020 г.
                  Определение победителя состоится в онлайн трансляции (Instagram) из г. Алматы (ГО Банка ЦентрКредит), по номеру карты (последние 4 цифры и имени владельца)
</div>
                </div>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <div className={classes.drpBack} onClick={() => setOpen(false)}></div>
      </Grid>
    </div>
  );
};

export default Safety;
