import Card from "../modules/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
       <Card key={car.id} data={car}/>
      ))}
    </div>
  );
}

export default CarsPage;
