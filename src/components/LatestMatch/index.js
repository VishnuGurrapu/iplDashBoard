// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latestMatch-container">
      <div className="OppsiteteamContainer">
        <div className="resultData-container">
          <p className="latestMatch-heading text">{competingTeam}</p>
          <p className="para1 text">{date}</p>
          <p className="para3 text">{venue}</p>
          <p className="para3 text">{result}</p>
        </div>
        <div className="competingLogo-container">
          <img
            className="competingLogo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
      </div>
      <div className="gameData-container">
        <p className="para2 text">FirstInnings</p>
        <p className="para3 text">{firstInnings}</p>
        <p className="para2 text">SecondInnings</p>
        <p className="para3 text">{secondInnings}</p>
        <p className="para2 text">ManOfTheMatch</p>
        <p className="para3 text">{manOfTheMatch}</p>
        <p className="para2 text">Umpires</p>
        <p className="para3 text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
