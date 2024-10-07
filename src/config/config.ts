import bmw1 from "../assets/bmw1.webp";
import bmw2 from "../assets/bmw2.webp";
import bmw3 from "../assets/bmw3.webp";
import Checkmark from "../components/Icons/Checkmark";
import Flags from "../components/Icons/Flags";
import Mail from "../components/Icons/Mail";
import { ServiceCard, FeatureCard, NavItem } from "../types";

export const ROUTES = {
  HOME: "/",
  MAP_UPDATE: "/map-update",
  SERVICE_HISTORY: "/service-history",
  FSC_CODE: "/fsc-code",
  WIKI: "/wiki",
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    altText: "bmw-1",
    buttonText: "BUY NOW",
    imgSrc: bmw1,
    price: "$10.99",
    title: "Service history",
    link: ROUTES.SERVICE_HISTORY,
  },
  {
    altText: "bmw-2",
    buttonText: "BUY NOW",
    imgSrc: bmw2,
    price: "$21.98",
    title: "Map update",
    link: ROUTES.MAP_UPDATE,
  },
  {
    altText: "bmw-3",
    buttonText: "BUY NOW",
    imgSrc: bmw3,
    price: "$8.49",
    title: "FSC CODE ONLY",
    link: ROUTES.FSC_CODE,
  },
];

export const FEATURES_LIST: FeatureCard[] = [
  {
    description:
      "One landing page with everything you need for your car. We deliver via e-mail within 60 seconds.",
    title: "EASY TO USE",
    logo: Mail,
  },
  {
    description:
      "We are sending you service history, map update or fsc code along with clear instructions.",
    title: "ALL SERVICES ARE SENT BY E-MAIL",
    logo: Flags,
  },
  {
    description:
      "Here we come with the guarantee that you will be satisfied with the decision of buying our services.",
    title: "100% SATISFACTION",
    logo: Checkmark,
  },
];

export const NAV_LIST: NavItem[] = [
  {
    name: "HOME",
    link: ROUTES.HOME,
  },
  {
    name: "VIN WIKI",
    link: ROUTES.WIKI,
  },
  {
    name: "HOME",
    link: ROUTES.HOME,
  },
  {
    name: "VIN WIKI",
    link: ROUTES.WIKI,
  },
];

export const FOOTER_LIST: NavItem[] = [
  {
    name: "Privacy Policy",
    link: "https://checkvin.eu/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    link: "https://checkvin.eu/terms",
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
  },
];
