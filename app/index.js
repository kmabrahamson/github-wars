var USER_DATA = {
  name: "kaitlin abrahamson",
  username: "kmabrahamson",
  image: "https://avatars3.githubusercontent.com/u/10915804?v=3&s=460"
}

var React = require('react');
var ReactDOM = require('react-dom');

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    );
  }
}

class Link extends React.Component {
  changeURL() {
    window.location.replace(this.props.href)
  }
  render() {
    return (
      <span style={{color: 'purple', cursor: 'pointer'}} onClick={() => this.changeURL()}>
        {this.props.children}
      </span>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <Link href={"https://www.github.com/" + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'))
