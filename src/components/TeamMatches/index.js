// Write your code here

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

const teamColors = {
  RCB: 'bg-rcb', // Royal Challengers Bangalore
  MI: 'bg-mi', // Mumbai Indians
  KXP: 'bg-kxp', // Punjab Kings
  CSK: 'bg-csk', // Chennai Super Kings
  RR: 'bg-rr', // Rajasthan Royals
  DC: 'bg-dc', // Delhi Capitals
  SH: 'bg-srh', // Sunrisers Hyderabad
  KKR: 'bg-kkr', // Kolkata Knight Riders
  DARK: 'bg-dark', // Alternate Dark Shade
  LIGHT: 'bg-light', // Additional Light Shade
}

/*
# method covert large data snake to camelcase
import l from 'lodash';

const toCamelCase = obj => {
  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      const camelCaseKey = l.camelCase(key);
      result[camelCaseKey] = toCamelCase(obj[key]);
      return result;
    }, {});
  }
  return obj;
};
      console.log(toCamelCase(data))

*/
class TeamMatches extends Component {
  state = {
    teamMatches: {},
    bgClass: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }
  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bgClass = teamColors[id] || 'bg-dark'
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(matchItem => ({
        competingTeam: matchItem.competing_team,
        competingTeamLogo: matchItem.competing_team_logo,
        date: matchItem.date,
        firstInnings: matchItem.first_innings,
        id: matchItem.id,
        manOfTheMatch: matchItem.man_of_the_match,
        matchStatus: matchItem.match_status,
        result: matchItem.result,
        secondInnings: matchItem.second_innings,
        umpires: matchItem.umpires,
        venue: matchItem.venue,
        // Add more fields as required...
      })),
    }
    console.log(updatedData)

    this.setState({teamMatches: updatedData, bgClass, isLoading: false})
  }
  render() {
    const {teamMatches, bgClass, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    return (
      <div className={`teamMatches-container ${bgClass}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="Team Banner" className="banner" />
            <h1 className="TeamMatches-heading">Latest Match</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="teams-list">
              {recentMatches.map(item => (
                <MatchCard teamData={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
