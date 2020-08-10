import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import {
  BccTypography,
  BccInput,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
} from "../BccComponents";
import ReactGA from "react-ga";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989",
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black",
      },
      TableW: {
        widthh: "100%",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989",
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        "& span": {
          fontSize: 14,
          color: "#5B5B5B",
        },
      },
      TableW: {
        widthh: "70%",
      },
      TableWW: {
        paddingTop: 12,
        "& tr > td:nth-child(2)": {
          width: "50%",
        },
      },
    },
  })
);

const Benefits = () => {
  const classes = useStylesTarifs({});

  const rows = [
    {
      code: `Выпуск карты за 5 минут.`,
      value: `Выпуск виртуальной карты Junior дистанционно, без посещения банка ребенком или родителем.<br/>Выпуск пластиковой карты Junior мгновенно без посещения отделения ребенком.`,
    },
    {
      code: `Junior Bank`,
      value: `Собственное мобильное приложение ребенка, где он сможет отслеживать свои траты, зарабатывать кэшбэки, совершать платежи и многое другое. Совсем как у взрослых.`,
    },
    {
      code: `Безопасность`,
      value: `Мы позаботимся о сохранности денежных средств. Лимиты от банка всегда на чеку.<br/>У родителя под рукой возможность увеличить или уменьшить лимиты в любой момент`,
    },
    {
      code: `Уведомления`,
      value: `SMS/PUSH уведомления на телефон ребенка и на телефон родителя бесплатно.`,
    },
    {
      code: `Гибкость`,
      value: `Вы можете выпустить карту как своему ребенку, так и племяннику, внучке или младшей сестре.<br/>Нет ограничений.`,
    },
    {
      code: `Покупки`,
      value: `По карте Junior не будет возможности совершить покупку в винотеке, табачных и религиозных лавках, аренда авто и т.д.<br/>Только категории до 18 лет.`,
    },
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>
                <div dangerouslySetInnerHTML={{ __html: m.code }} />
              </TableCell>
              <TableCell className={classes.td}>
                <div dangerouslySetInnerHTML={{ __html: m.value }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Faq = () => {
  const classes = useStylesTarifs({});

  const rows = [
    {
      code: `Что такое Junior Card?`,
      value: ` • Это виртуальная карта. Выпускается дитсанционно в BCC.KZ родителем. Картой можно оплачивать покупки смартфоном (Apple Pay/Samsung Pay) или в интернете, снимать деньги в специальных банкоматах, совершать платежи и переводы<br/> • Это пластиковая карта мгновенного выпуска, оформляется родителем в любом отделении банка. По карте доступны все сервисы, как, покупки, платежи, переводы и прочее`,
    },
    {
      code: `Кто может выпустить карту Junior?`,
      value: `Карту Junior может выпустить клиент, у которого уже имеется в наличии любая карта БЦК.`,
    },
    {
      code: `Карту Junior могут выпускать только родители  для своих детей?`,
      value: `Карту Junior может выпустить любой клиент банка для своих детей, племянников, внуков, братьев и сестер. То есть, бабушка внуку, дядя племяннику, сестра младшему брату и т.д.`,
    },
    {
      code: `Есть ли возрастное ограничение при открытии карты Junior?`,
      value: `Да, карту Junior можно открыть детям с 6 до 18 лет.`,
    },
    {
      code: `Какова стоимость карты?`,
      value: `Выпуск и обслуживание карты 0 тг, как и СМС/ПУШ уведомления для родителя/ребенка.`,
    },
    {
      code: `Какие действия произойдут после выпуска виртуальной карты родителем/клиентом?`,
      value: `На сотовый номер ребенка указанный родителем/клиентом в заявке придет смс сообщение со ссылкой на скачивание мобильного приложения Junior Bank. Ребенок скачивает мобильное приложение Junior Bank и регистрируется в нем, вводя свой номер сотового телефона, далее подтверждает действие датой своего рождения и придумывает пароль для доступа в мобильное приложение Junior Bank.`,
    },
    {
      code: `Как платить смартфоном ребенку?`,
      value: `Сервис доступен только для смартфонов Iphone и Samsung с технологией NFC.
      В скачанном приложении Junior Bank можно запросить реквизиты карты, сохранить их и добавить в wallet IPhone (Apple Pay) и в wallet Samsung (Samsung Pay).`,
    },
    {
      code: `Может ли ребенок пользоваться и виртуальной картой (используя смартфон) и пластиковой картой?`,
      value: `Да, так как и виртуальная, и пластиковая карты открываются на единый карт-счет. Баланс на них будет единый.`,
    },
    {
      code: `Нужно ли клиенту закрывать виртуальную карту, если  он хочет выпустить пластик?`,
      value: `Нет, пластик открывается в дополнение к виртуальной карте. Нет необходимости закрывать виртуальную карту, так как ребенок может платить виртуальной картой в Apple Pay/ Samsung Pay, а также пластиком везде, где это необходимо.`,
    },
    {
      code: `Нужно ли клиенту открывать виртуальную карту, если у ребенка уже есть пластиковая Junior?`,
      value: `Нет, такой необходимости нет. Однако, если вы хотите подвязать детскую карту к Apple Pay/ Samsung Pay ребенка, то можно это сделать добавив реквизиты на пластиковой карте в wallet IPhone (Apple Pay) и в wallet Samsung (Samsung Pay).`,
    },
    {
      code: `Что интересного ребенок увидит в мобильном приложении Junior Bank?`,
      value: `Мобильное приложение Junior Bank отражает карту ребенка и доступные средства на карте, историю покупок, заработанный кэшбэк, платежи и переводы (скоро), выбор любимых категорий (скоро) и много интересного.`,
    },
    {
      code: `Видит ли ребенок в мобильном приложении Junior Bank средства на карте Родителя/клиента?`,
      value: `Нет, ребенок видит только свою карту и доступные средства по своей карте.`,
    },
    {
      code: `Видит ли Родитель/клиент карту ребенка в своем мобильном приложении BCC.KZ?`,
      value: `Да, Родитель/клиент видит карту ребенка и операции, произведенные по ней.`,
    },
    {
      code: `Какие условия по кэшбэку для карты Junior?`,
      value: `При совершении покупок по карте Junior на нее начисляется гарантированный кэшбэк в размере 1%. Кэшбэк начисляется на любую сумму покупки, даже на 10 тенге, максимальная сумма кэшбэка в месяц 10 000 тенге.`,
    },
    {
      code: `Может ли родитель/клиент управлять деньгами ребенка на карте Junior?`,
      value: `Нет, родитель не сможет:
      •	платить с детской карты, 
      •	снимать деньги с детской карты, 
      •	переводить деньги с детской карты обратно на свою карту.`,
    },
    {
      code: `Какие запреты на детские карты распространяются банком?`,
      value: `По детским картам настроен ряд автозапретов в рамках которых детская карта не сможет обслуживаться в торговых точках категории 18+ (табачная лавка, алкомаркеты, религиозные магазины, казино, коммерческий спорт, аренда авто и прочее).`,
    },
    {
      code: `Как родитель может управлять картой ребенка?`,
      value: `-  заблокировать/разблокировать карту ребенка<br/>
- настроить лимиты трат по следующим направлениям в сторону увеличения или уменьшения, снятие наличных в банкоматах, переводы с детских карт на другие карты, оплата покупок, покупки в интернете<br/>
      - сбросить и установить пин - код<br/>
      - настроить смс уведомления себе на телефон по детской карте.`,
    },
    {
      code: `Можно ли выпустить карту для детей нерезидентов?`,
      value: `Да, главное, чтобы у клиента/родителя была любая карта банка БЦК.`,
    },
  ];

  return (
    <Box className={classes.TableWW}>
      {rows.map((m, i) => (
        <BccCollapsePanel>
          <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
            <BccTypography type="p2">
              <div dangerouslySetInnerHTML={{ __html: m.code }} />
            </BccTypography>
          </BccCollapseTitle>
          <BccCollapseDetails>
            <BccTypography type="p2">
              <div dangerouslySetInnerHTML={{ __html: m.value }} />
            </BccTypography>
          </BccCollapseDetails>
        </BccCollapsePanel>
      ))}
    </Box>
  );
};

const Tarifs = () => {
  const classes = useStylesTarifs({});

  const rows = [
    {
      code: `Выпуск карты`,
      value: `0 тенге`,
    },
    {
      code: `Годовое обслуживание`,
      value: `0 тенге`,
    },
    {
      code: `Перевыпуск карты`,
      value: `до 3-х раз - 0 тенге`,
    },
    {
      code: `Снятие наличных в банкоматах банка`,
      value: `0 тенге`,
    },
    {
      code: `Снятие наличных денег в чужих банкоматах`,
      value: `до 10 000 тенге - 0 тенге`,
    },
    {
      code: `Переводы внутри банка`,
      value: `0 тенге`,
    },
    {
      code: `Переводы на чужие карты`,
      value: `до 10 000 тенге - 0 тенге`,
    },
    {
      code: `СМС/PUSH уведомления родителю и ребенку`,
      value: `0 тенге`,
    },
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Development = () => {
  const classes = useStylesTarifs({});

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item style={{ margin: "100px 0" }}>
        <img src={process.env.PUBLIC_URL + "/dev.svg"} />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        marginBottom: 40,
        position: "relative",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "0 16px",
        color: "white",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 20,
        color: "#141414",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        maxWidth: 1280,
        padding: "0 32px",
        margin: "0 auto",
        marginBottom: 40,
        position: "relative",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        marginBottom: 40,
        color: "#141414",
      },
    },
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});

  const swipeTab = (index: number) => {
    const actionName =
      index === 0 ? "Iron_Additionally_Rates" : "Iron_Additionally_Conditions";

    ReactGA.event({
      category: `BccIronCard_${actionName}`,
      action: actionName,
    });
  };

  return (
    <Grid container className={classes.root}>
      <BccTypography type="h2" block className={classes.title}>
        Как заказать карту?
      </BccTypography>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={[
            `Преимущества`,
            `Тарифы`,
            `Часто задаваемые вопросы`,
            <>
              <img src={process.env.PUBLIC_URL + "/new.svg"} /> New
            </>,
          ]}
          pans={[<Benefits />, <Tarifs />, <Faq />, <Development />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
