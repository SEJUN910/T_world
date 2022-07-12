import React from "react";
import { theme } from "../style/css/theme";
import { ThemeProvider } from "styled-components";
import Korea from "../components/countries/Korea";
import Brazil from "../components/countries/Brazil";
import UnitedStates from "../components/countries/UnitedStates";

interface Modals {
  children: React.ReactNode;
  country: string;
  close: () => void;
}

interface CountryInfo {
  country: string;
  language: string[] | string;
  continent: string;
  religion: string[] | string;
}

const countryInfo: CountryInfo[] = [
  {
    country: "South Korea",
    language: "Korean",
    continent: "Asia",
    religion: ["Buddhism", "Continent"],
  },
  {
    country: "United States",
    language: "English",
    continent: "North America",
    religion: "Christianity",
  },
  {
    country: "Brazil",
    language: "Portuguese",
    continent: "South America",
    religion: "Roman Catholic",
  },
];

const MapModal = (props: Modals) => {
  const { close, country } = props;
  return (
    <ThemeProvider theme={theme}>
      {country === "South Korea" && <Korea close={close} />}
      {country === "Brazil" && <Brazil close={close} />}
      {country === "United States" && <UnitedStates close={close} />}
    </ThemeProvider>
  );
};

export default MapModal;
