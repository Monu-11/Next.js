interface Share {
  name: string;
  price: number;
  onChange: string;
}

const shares: Share[] = [
  {
    name: "Nifty50",
    price: 19189.05,
    onChange: "+1.14%",
  },
  {
    name: "Nifty Bank",
    price: 44747.35,
    onChange: "+0.95%",
  },
  {
    name: "Reliance",
    price: 2550.25,
    onChange: "+0.82%",
  },
  {
    name: "Adani",
    price: 2388.05,
    onChange: "-0.58%",
  },
  {
    name: "HDFC",
    price: 1701.4,
    onChange: "+1.51%",
  },
];

export default shares;
