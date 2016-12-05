import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends React.Component {
  //es6 for setInitialState
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }
  componentDidMount() {
    var query = this.props.location.query;
    //user's info, grab more from github and setState
  }
  render() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playerInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
