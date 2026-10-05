import { League_Spartan } from "next/font/google";
import localFont from "next/font/local";

export const Spartan = League_Spartan();
export const GE_SS = localFont({
  src: [
    {
      path: "../public/fonts/ArbFONTS-GE_SS_Two_Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/ArbFONTS-GE_SS_Two_Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../public/fonts/ArbFONTS-GE-SS-Two-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
});