
import CarDetail from "@/components/templates/CarDetail";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];

  return <CarDetail {...carDetail} />;
}

export default CarDetails;
