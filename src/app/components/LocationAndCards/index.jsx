"use client";

import LocationSearch from "@/app/components/LocationSearch";
import CardsSection from "@/app/components/CardsSection";
import { useEffect, useState } from "react";
import data from "@/app/components/CardsSection/mock-data.json";

const LocationAndCards = () => {
  const { centers } = data;
  const [activeLocation, setLocation] = useState({
    label: "All",
    value: "all",
  });
  const [activeService, setService] = useState({ label: "All", value: "all" });
  const [centersOnPage, setCentersOnPage] = useState([]);

  useEffect(() => {
    //filter by service
    let filteredByService = [];
    if (activeService.value !== "all") {
      filteredByService = centers.reduce((accumulator, current) => {
        const filteredSubArray = current.services.filter((element) =>
          activeService.value.includes(element.value)
        );

        if (filteredSubArray.length > 0) {
          accumulator.push(current);
        }

        return accumulator;
      }, []);
    } else {
      //restore from backup if user selects all
      filteredByService = [...centers];
    }

    //filter by location
    let filteredByLocation = [];
    if (activeLocation.value !== "all") {
      filteredByLocation = centers.reduce((accumulator, current) => {
        const filtered = activeLocation.value.includes(current.location.value);
        if (filtered) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
    } else {
      //restore from backup if user selects all
      filteredByLocation = [...centers];
    }

    //intersect both arrays to find common
    const filteredCenters = filteredByService.filter((element) =>
      filteredByLocation.includes(element)
    );

    setCentersOnPage(filteredCenters);
  }, [data, activeLocation, activeService]);
  return (
    <div>
      <LocationSearch
        activeLocation={activeLocation}
        setLocation={setLocation}
        activeService={activeService}
        setService={setService}
      />
      <CardsSection data={centersOnPage} />
    </div>
  );
};
export default LocationAndCards;
