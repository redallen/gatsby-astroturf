import React from "react"
import { Link } from "gatsby"

// import styles from "../styles/sass.module.scss"
import { css } from 'astroturf';

const styles = css`
.page {
  background: #f4fa58;
  padding: 4rem;
}
.header {
  font-size: 4rem;
  line-height: 1;
  margin: 0;
  margin-bottom: 1rem;
}
.link {
  background: #fe2e2e;
  color: #fbfbef;
  font-size: 2rem;
}
`;

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={styles.page}>
        <h1 className={styles.header}>Cheese: Do you like it?</h1>
        <h1 className={styles.header}>🧀 🧀 🧀 🧀 🧀 🧀 🧀</h1>
        <Link to="/" className={styles.link}>
          Back home
        </Link>
      </div>
    )
  }
}

export default IndexComponent
