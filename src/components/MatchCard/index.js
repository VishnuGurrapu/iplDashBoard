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
  const bgColor = matchStatus === 'Won' ? 'bgGreen' : 'bgRed'
  return (
    <div className="matchCard-container">
      <div className="comLogoContainer">
        <img className="comLogo" src={competingTeamLogo} />
      </div>
      <p className="para12">{competingTeam}</p>
      <p className="para32">{result}</p>
      <p className={`para22 ${bgColor}`}>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
