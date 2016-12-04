var React = require('react');
var transparentBg = require('../styles').transparentBg;

class PromptContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
    //es6 pattern for binding 'this' to callback
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onSubmitUser = this.onSubmitUser.bind(this);
  }
  onUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }
  onSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input className="form-control"
                placeholder="Github Username"
                onChange={this.onUpdateUser}
                value={this.state.username}
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
//PropTypes are called on the class in es6
PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = PromptContainer;
