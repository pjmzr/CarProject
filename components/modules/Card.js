import Link from "next/link";
import Location from "../icons/Location";
import styles from "./Card.module.css";

function Card({
  data: { id, name, model, year, distance, location, image, price },
}) {
  return (
    <div className={styles.container}>
      <Link href={`/cars/${id}`}>
        <img src={image} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
