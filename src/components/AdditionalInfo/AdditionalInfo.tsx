import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

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
        "& tr > td:nth-child(2)": {
          width: "50%",
        },
      },
    },
  })
);

const Benefits = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    {
      code: `Выпуск карты`,
      value: `Мгновенный выпуск карты без посещения отделения клиентом и ребенком`,
    },
    {
      code: `Доступ`,
      value: `Приложение и карта доступны ребенку сразу`,
    },
    {
      code: `Лимиты`,
      value: `Быстрое пополнение без комиссий`,
    },
    {
      code: `Оплата за покупки`,
      value: `Оплата покупок смартфоном Apple Pay/Samsung Pay`,
    },
    {
      code: `Дополнительно`,
      value: `Ребенок получит возможность получить финансовое образование от топ менеджеров банка`,
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
  const { t } = useTranslation();

  const rows = [
    {
      code: `Что такое Junior Card?`,
      value: `Это виртуальная карта, которой можно оплачивать покупки смартфоном (Apple Pay/Samsung Pay).`,
    },
    {
      code: `Кто может выпустить карту Junior?`,
      value: `Карту Junior может выпустить клиент, у которого уже имеется в наличии любая карта БЦК.`,
    },
    {
      code: `Карту Junior могут выпускать только родители/клиенты для своих детей?`,
      value: `Карту Junior может выпустить любой клиент банка для своих детей, племянников, внуков, братьев и сестер. То есть, бабушка внуку, дядя племяннику, сестра младшему брату и т.д.`,
    },
    {
      code: `Есть ли возрастное ограничение при открытии карты Junior?`,
      value: `Да, карту Junior можно открыть детям с 6 до 18 лет.`,
    },
    {
      code: `Какие действия произойдут после выпуска карты родителем/клиентом?`,
      value: `На сотовый номер ребенка указанный родителем/клиентом в заявке придет смс сообщение со ссылкой на скачивание мобильного приложения Junior Bank. Ребенок скачивает мобильное приложение Junior Bank и регистрируется в нем, вводя свой номер сотового телефона, далее подтверждает действие датой своего рождения и придумывает пароль для доступа в мобильное приложение Junior Bank.`,
    },
    {
      code: `Что интересного ребенок увидит в мобильном приложении Junior Bank?`,
      value: `Мобильное приложение Junior Bank отражает карту ребенка и доступные средства на карте, историю покупок, заработанный кешбэк.`,
    },
    {
      code: `В мобильном приложении Junior Bank ребенок видит средства на карте Родителя/клиента?`,
      value: `Нет ребенок видит только свою карту и доступные средства по своей карте.`,
    },
    {
      code: `Родитель/клиент видит карту ребенка в своем мобильном приложении BCC.KZ?`,
      value: `Да, Родитель/клиент видит карту ребенка и операции, произведенные по карте Junior.`,
    },
    {
      code: `Какие условия по кешбэку для карты Junior?`,
      value: `При совершении покупок по карте Junior на нее начисляется гарантированный кешбэк в размере 1%. Кешбэк начисляется на любую сумму покупки, даже на 10 тенге, максимальная сумма кешбэка в месяц 10 000 тенге.`,
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
      value: `По детским картам настроен ряд автозапретов в рамках которых детская карта не сможет обслуживаться в торговых точках категории 18+ (табачная лавка, алкомаркеты, религиозные магазины, казино, коммерческий спорт, аренда авто и прочее)`,
    },
    {
      code: `Как родитель может управлять картой ребенка?`,
      value: `-  заблокировать/разблокировать карту ребенка
- настроить ежедневные лимиты трат по следующим направлениям в сторону увеличения или уменьшения, снятие наличных в банкоматах, переводы с детских карт на другие карты, оплата покупок
      - сбросить и установить пин - код
      - настроить смс уведомления себе на телефон по детской карте.`,
    },
    {
      code: `Можно ли будет выпустить пластик к виртуальной карте?`,
      value: `Сейчас наши лучшие разработчики трудятся над этим процессом, как только такая возможность появиться, мы сообщим об этом.`,
    },
    {
      code: `Можно ли выпустить карту Junior с индивидуальным дизайном?`,
      value: `Совсем скоро можно будет выпускать цифровые и пластиковые карты с индивидуальным дизайном.`,
    },
    {
      code: `Можно ли выпустить карту для детей нерезидентов?`,
      value: `Да, главное, чтобы у клиента/родителя была любая карта банка.`,
    },
  ];

  return (
    <Box className={classes.TableWW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th} style={{ width: "30%" }}>
                {m.code}
              </TableCell>
              <TableCell className={classes.td} style={{ width: "70%" }}>
                {m.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Tarifs = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    {
      code: `Выпуск карты 
      (без посещения банка)`,
      value: `0 тенге`,
    },
    {
      code: `Оплата товаров и услуг`,
      value: `0 тенге`,
    },
    {
      code: `Годовое обслуживание`,
      value: `0 тенге`,
    },
    {
      code: `Перевыпуск карты`,
      value: `0 тенге`,
    },
    {
      code: `Снятие наличных в банкоматах`,
      value: `0 тенге`,
    },
    {
      code: `СМС/PUSH уведомления 
      родителю и ребенку`,
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
  const { t } = useTranslation();

  const rows = [
    {
      code: `Образование`,
      value: `Приобретая карту ваш ребенок становится участником Junior Club, где
      он может получить финансовое образование от лучших коучей банка`,
    },
    {
      code: `Детская копилка с выбором мечты`,
      value: `Для реализации мечты каждого ребенка
      можно придумать цель и накопить`,
    },
    {
      code: `Бонусы в любимых категориях 5%`,
      value: `С возможностью каждый месяц выбрать любимую категорию на пример спорт и питание`,
    },
    {
      code: `Запрос денег`,
      value: `Функция моментального запроса с фото,
      видео и текстом`,
    },
    {
      code: `Определение геолокации ребенка`,
      value: `Безопасность ребенка превыше всего
    Будьте в курсе где Ваш ребенок прямо сейчас`,
    },
    {
      code: `Задания от родителей`,
      value: `Научите ребенка быть самостоятельным по жизни и зарабатывать первые честные деньги`,
    },
    {
      code: `Автоплатежи Онай, Астана ЛРТ`,
      value: `За мобильный баланс и на Junior Card (настрой и забудь)`,
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {},
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "60px 42px 52px 52px",
        width: "100%",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
    },
    root: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
    },
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

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
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={[
            `Преимущества`,
            `Тарифы`,
            `Часто задаваемые вопросы`,
            `В разработке`,
          ]}
          pans={[<Benefits />, <Tarifs />, <Faq />, <Development />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
