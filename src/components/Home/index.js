// Write your code here
import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamsData: formattedData})
  }
  render() {
    const {teamsData} = this.state
    return (
      <div className="home-container">
        <div className="home-heading-container">
          <img
            className="home-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamsData.map(item => (
            <TeamCard teamData={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
