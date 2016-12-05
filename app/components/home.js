import React from 'react';
import styles from '../styles';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Github Wars</h1>
        <p className="lead">Placeholder text</p>
        <Link to="/playerOne">
          <button className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    );
  }
}

export default Home;
