var React = require('react');

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello from Main!
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
