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
          pans={[<Benefits />, <Tarifs />, <Tarifs />, <Development />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
