import React from 'react'
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as challengesActions from '../actions/challengesActions';
import * as userActions from '../actions/userActions.js';
import ChallengesList from './ChallengesList';
import ChooseUserName from './ChooseUserName';


class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.challenges.length == 0) {
      this.props.actions.getChallenges()
    }
  }

  chooseUserName(userName) {
    this.props.actions.assignUserName(userName);
  }
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", width:"100%"}}>
          <div style={{display:"flex", maxHeight:"600px", flexDirection:"column", justifyContent:"space-between", alignItems:"center", marginBottom:"20px"}}>
            <h1 style={{marginTop:"0", textAlign:"center"}}>Welcome!</h1>
            <ChooseUserName userName={this.props.userName} chooseUserName={this.chooseUserName.bind(this)}/>
            <div style={{padding:"10px", border:"solid 1px #666", borderRadius:"3px", maxWidth:"440px"}}>
              <ol>
                <li>Set your desired username above!</li>
                <br />
                <li>
                  Join your partner in Voice Chat
                  <ul>
                    <li>Click the Button In te bottom corner</li>
                  </ul>
                </li>
                <br />
                <li>
                  Select a challenge from the Challenges list
                  <ul>
                    <li>Make sure you and your partner choose the same challenge</li>
                  </ul>
                </li>
                <br />
                <li>Use the collaborative Code Editor environment to solve your challenge together in real time</li>
              </ol>
              <br />
              <h4 style={{textAlign:"center"}}>Happy Coding!</h4>
            </div>
          </div>
          <div>
            <h1 style={{marginTop:"0", textAlign:"center"}}>Challenges</h1>
            <div style={{maxHeight: "503px", minWidth:"600px", overflowY:"scroll" }} >
              <ChallengesList challenges={this.props.challenges} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {challenges: state.challenges, userName: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign(userActions, challengesActions), dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);