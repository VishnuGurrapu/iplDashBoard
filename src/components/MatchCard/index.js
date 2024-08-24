// Write your code here
import './index.css'

const MatchCard = props => {
  const {teamData} = props
  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = teamData

  return (
    <div className="matchCard-container">
      <img className="comLogo" src={competingTeamLogo} />
      <p className="para12">{competingTeam}</p>
      <p className="para32">{result}</p>
      <p className="para22">{matchStatus}</p>
    </div>
  )
}
export default MatchCard
