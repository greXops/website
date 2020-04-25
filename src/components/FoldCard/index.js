import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function FoldCard(props) {
  const card = props;

  return (
    <div style={{ margin: "auto" }}>
      <Link to={card.link}>
        <div className={styles.UserCard}>
          <div className={styles.UserCardTop}>
            <img src={card.picture} alt="Card Image" />
          </div>
          <div className={styles.UserCardBottom}>
            {card.name}
            <div className={styles.CardUserName}>{card.username}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FoldCard;
