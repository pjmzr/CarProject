import { useRouter } from "next/router";
import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";

function Cat() {
  const router = useRouter();
  const { cat } = router.query;
  const searchedData = carsData.filter((i) => i.category === cat);

  return <CarsList data={searchedData} />;
}

export default Cat;
