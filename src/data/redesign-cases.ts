import offroad from "@/assets/images/portfolio_offroad_1.webp?url";
import laboratoriaBcp from "@/assets/images/portfolio_labbcp_1.webp?url";
import zukarzen from "@/assets/images/portfolio_zukarzen_1.webp?url";
import laboratoriaMack from "@/assets/images/portfolio_labmack_1.webp?url";
import loreal from "@/assets/images/portfolio_loreal.webp?url";
import utp from "@/assets/images/portfolio_utp.webp?url";
import colsubsidio from "@/assets/images/portfolio_colsubsidio.webp?url";
import biotraining from "@/assets/images/portfolio_biotraining.webp?url";
import hazLaTarea from "@/assets/images/portfolio_hazlatarea.webp?url";
import stephanie from "@/assets/images/portfolio_stephanie.webp?url";
import logoOffroad from "@/assets/images/logo_offroadperu.webp?url";
import logoLaboratoriaBcp from "@/assets/images/logo_laboratoria_bcp.webp?url";
import logoZukarzen from "@/assets/images/logo_zukarzen.webp?url";
import logoLaboratoria from "@/assets/images/logo_laboratoria.webp?url";
import logoLoreal from "@/assets/images/logo_labo_loreal_ink.webp?url";
import logoUtp from "@/assets/images/logo_utp.webp?url";
import logoColsubsidio from "@/assets/images/logo_colsubsidio.webp?url";
import logoStephanie from "@/assets/images/logo_stephanie.webp?url";
import logoBiotraining from "@/assets/images/logo_biotraining.webp?url";
import logoHazLaTarea from "@/assets/images/logo_haz_la_tarea.png?url";

export type CaseId =
  | "laboratoriaBcp"
  | "zukarzen"
  | "offroad"
  | "laboratoria"
  | "loreal"
  | "utp"
  | "colsubsidio"
  | "biotraining"
  | "hazlatarea"
  | "stephanie";

export type CaseMedia = {
  id: CaseId;
  image: string;
  logo: string;
  href: string;
};

export const caseMedia: CaseMedia[] = [
  {
    id: "laboratoriaBcp",
    image: laboratoriaBcp,
    logo: logoLaboratoriaBcp,
    href: "https://innovabcp2025.com",
  },
  {
    id: "zukarzen",
    image: zukarzen,
    logo: logoZukarzen,
    href: "https://zukarzen.com",
  },
  {
    id: "offroad",
    image: offroad,
    logo: logoOffroad,
    href: "https://offroadperu.com.pe",
  },
  {
    id: "laboratoria",
    image: laboratoriaMack,
    logo: logoLaboratoria,
    href: "http://laboratoria-brechadegenero.la",
  },
  {
    id: "loreal",
    image: loreal,
    logo: logoLoreal,
    href: "https://activatucarrera-laboratoria-loreal.com",
  },
  {
    id: "utp",
    image: utp,
    logo: logoUtp,
    href: "https://www.laboratoria-activatucarrera-utp.pe",
  },
  {
    id: "colsubsidio",
    image: colsubsidio,
    logo: logoColsubsidio,
    href: "https://softlanding-laboratoria-colsubsidio.vercel.app",
  },
  {
    id: "biotraining",
    image: biotraining,
    logo: logoBiotraining,
    href: "https://www.biotraining.pe",
  },
  {
    id: "hazlatarea",
    image: hazLaTarea,
    logo: logoHazLaTarea,
    href: "https://www.hazlatarea.la",
  },
  {
    id: "stephanie",
    image: stephanie,
    logo: logoStephanie,
    href: "https://www.stephaniehoyle.com",
  },
];
