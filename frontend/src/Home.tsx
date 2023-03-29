import { Link } from 'react-router-dom';
import styles from './Blah.module.css';
import Navigation from './Navigation';

function TopBanner(props: any) {
  return (
    <>
      <Navigation />
      <div className="row">
        <div className="col-4">
          <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton Headshot"></img>
        </div>
        <div className="col align-self-center">
          <h1 className={styles.h1}>{props.saying}</h1>
          <p>
            The purpose of this site is to keep track of Joel Hilton's movie
            collection.
          </p>
        </div>
      </div>

      <br />
    </>
  );
}

export default TopBanner;
