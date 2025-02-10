import { GiIronHulledWarship } from "react-icons/gi";
import { PiSailboat } from "react-icons/pi";
import { FaFirstdraft } from "react-icons/fa";
import { GiRopeBridge } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { MdOutlineScubaDiving } from "react-icons/md";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Reparacija i restauracija plovila",
        link: "",
      },
      {
        title: "Zamena ostecenih i trulih delova",
        link: "",
      },
      {
        title: "Podvodno zavarivanje",
        link: "",
      },
    ],
  },
  {
    title: "Proizvodi",
    list: [
      {
        title: "Proizvodnja pontona za splavove",
        link: "",
      },
      {
        title: "Izrada mostova za splavove",
        link: "",
      },
    ],
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface ServiceList {
  id: number;
  title: string;
  text: string;
}

export const serviceList = [
  {
    id: 1,
    title: "Proizvodnja pontona za splavove",
    text: "Нудимо вам висококвалитетне понтоне, прилагођене вашим потребама, који ће обезбедити стабилност и сигурност вашег сплава.",
    icon: FaFirstdraft,
  },
  {
    id: 2,
    title: "Izrada mostova za splavove",
    text: "Потребан вам је мост за ваш сплав? Пројектоваћемо мостове који ће у свим ситуацијама бити естетски привлачни, али и у потпуности функционални.",
    icon: GiRopeBridge,
  },
  {
    id: 3,
    title: "Podvodno zavarivanje",
    text: "Ово је наша нова услуга која ће вам омогућити да решите проблеме са пловним објектима на најбржи могући начин. Подводно заваривање је савремена техника која осигурава квалитетно и брзо решавање проблема.",
    icon: MdOutlineScubaDiving,
  },
  {
    id: 4,
    title: "Reparacija i restauracija plovila",
    text: "Уколико имате бродиће или чамце којима је потребно обнављање, ми ћемо их вратити у првобитно стање.",
    icon: GiIronHulledWarship,
  },
  {
    id: 5,
    title: "Zamena ostecenih i trulih delova",
    text: "Уколико на вашем сплаву постоје оштећени или трули делови, ми ћемо их заменити и тиме допринети не само естетском изгледу, већ и функционалности читавог сплава.",
    icon: BsTools,
  },
];
