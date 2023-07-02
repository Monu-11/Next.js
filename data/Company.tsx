import HDFC from "../assets/HDFC.png";
import Reliance from "../assets/Reliance.png";
import tcs from "../assets/tcs.png";
import Wipro from "../assets/Wipro.png";
import Infosys from "../assets/Infosys.png";
import Image, { StaticImageData } from "next/image";

interface Company {
  name: string;
  logo: StaticImageData;
}

const companies: Company[] = [
  {
    name: "Tata Consultancy Services",
    logo: tcs,
  },
  {
    name: "Reliance Industries Limited",
    logo: Reliance,
  },
  {
    name: "Infosys",
    logo: Infosys,
  },
  {
    name: "HDFC Bank",
    logo: HDFC,
  },
  {
    name: "Wipro",
    logo: Wipro,
  },
];
export default companies;
