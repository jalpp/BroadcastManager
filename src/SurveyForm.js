import React, { useState } from "react";

const SurveyForm = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [tournamentLocation, setTournamentLocation] = useState("");
  const [rounds, setRounds] = useState("");
  const [tournamentFormat, setTournamentFormat] = useState("");
  const [timeControl, setTimeControl] = useState("");
  const [monthStart, setMonthStart] = useState("");
  const [startDate, setStartDate] = useState("");
  const [monthEnd, setMonthEnd] = useState("");
  const [endDate, setEndDate] = useState("");
  const [extra, setExtra] = useState("");
  const [concatenatedString, setConcatenatedString] = useState("");
  const [longString, setLongString] = useState("");
  const [gmCount, setGmCount] = useState("");
  const [player2700, setplayer2700] = useState("");
  const [tierstring, setTierString] = useState("");



  function getTier(gmCount, playerAbove){
    const numGM = parseInt(gmCount);
    const above = parseInt(playerAbove);

    if(numGM >= 8 || above >= 10){
      return 'Best tier';
    }else if((numGM >=  3  && numGM <= 7)|| (above >= 3 && above <= 9)){
      return 'High tier';
    }else{
      return 'Normal tier'
    }
  }



  function dateMapping(date) {
    const val = parseInt(date);
  
    if (val === 1 || val === 21 || val === 31) {
      return `${val}st`;
    } else if (val === 2 || val === 22) {
      return `${date}nd`;
    } else if (val === 3 || val === 23) {
      return `${date}rd`;
    } else {
      return `${date}th`;
    }
  }


  

  function broadcastStylingShort(round, format, timecontrol, startMonth, startDate, endMonth, endDate) {
    
    if (startMonth === endMonth && startDate !== endDate) {
      return `${startMonth} ${dateMapping(startDate)} - ${dateMapping(endDate)} | ${round}-round ${format} | ${timecontrol} time control`;
    } else {
      return `${startMonth} ${dateMapping(startDate)} - ${endMonth} ${dateMapping(endDate)} | ${round}-round ${format} | ${timecontrol} time control`;
    }
  }


  function broadcastStylingLong(name, playercount, location, extra, round, format, timecontrol, startMonth, startDate, endMonth, endDate) {
    if (format === "SWISS" || format === "Swiss" || format === "swiss") {
       if (startMonth === endMonth && startDate !== endDate) {
        return `The ${name} is a ${round}-round ${format} tournament held from the ${startDate} to the ${endDate} of ${startMonth} in ${location} \n\n ${extra} \n\n [Offical Website]() | [Results]()`;
      } else {
        return `The ${name} is a ${round}-round ${format} tournament held from the ${startDate} ${startMonth} to the ${endDate} ${endMonth} in ${location} \n\n ${extra} \n\n [Offical Website]() | [Results]()`;
      }
    } else {
       if (startMonth === endMonth && startDate !== endDate) {
        return `The ${name} is a ${playercount}-player ${format} tournament held from the ${startDate} to the ${endDate} of ${startMonth} in ${location} \n\n ${extra} \n\n [Offical Website]() | [Results]()`;
      } else {
        return `The ${name} is a ${playercount}-player ${format} tournament held from the ${startDate} ${startMonth} to the ${endDate} ${endMonth} in ${location} \n\n ${extra} \n\n [Offical Website]() | [Results]()`;
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const concatString = broadcastStylingShort(rounds, tournamentFormat, timeControl, monthStart, startDate, monthEnd, endDate);
    const longstring = broadcastStylingLong(tournamentName, playerCount, tournamentLocation, extra, rounds, tournamentFormat, timeControl, monthStart, startDate, monthEnd, endDate);
    const determineTier = getTier(gmCount, player2700);

    setTierString(determineTier);
    setConcatenatedString(concatString);
    setLongString(longstring);
    setTournamentName("");
    setPlayerCount("");
    setTournamentLocation("");
    setRounds("");
    setTournamentFormat("");
    setTimeControl("");
    setMonthStart("");
    setStartDate("");
    setMonthEnd("");
    setEndDate("");
    setExtra("");
    setGmCount("");
    setplayer2700("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tournament-name">Tournament Name:</label>
        <input
          type="text"
          id="tournament-name"
          value={tournamentName}
          onChange={(event) => setTournamentName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="player-count">Player Count:</label>
        <input
          type="number"
          id="player-count"
          value={playerCount}
          onChange={(event) => setPlayerCount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gm-count">GMs Count:</label>
        <input
          type="number"
          id="gm-count"
          value={gmCount}
          onChange={(event) => setGmCount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="player-2700">2700s Count:</label>
        <input
          type="number"
          id="player-2700"
          value={player2700}
          onChange={(event) => setplayer2700(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="tournament-location">Tournament Location:</label>
        <input
          type="text"
          id="tournament-location"
          value={tournamentLocation}
          onChange={(event) => setTournamentLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rounds">Rounds:</label>
        <input
          type="number"
          id="rounds"
          value={rounds}
          onChange={(event) => setRounds(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tournament-format">Tournament Format (Swiss/Round-R):</label>
        <input
          type="text"
          id="tournament-format"
          value={tournamentFormat}
          onChange={(event) => setTournamentFormat(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time-control">Time Control (Rapid/Blitz):</label>
        <input
          type="text"
          id="time-control"
          value={timeControl}
          onChange={(event) => setTimeControl(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="month-start">Start Month Name (Sep/Jan):</label>
        <input
          type="text"
          id="month-start"
          value={monthStart}
          onChange={(event) => setMonthStart(event.target.value)}
        />
      </div>

       <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="number"
          id="start-date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="month-end">End Month Name (Sep/Jan):</label>
        <input
          type="text"
          id="month-end"
          value={monthEnd}
          onChange={(event) => setMonthEnd(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="number"
          id="end-date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="extra">Extra Information (time per move):</label>
        <input
          type="text"
          id="extra"
          value={extra}
          onChange={(event) => setExtra(event.target.value)}
        />
      </div>
      
    <button type="submit">Submit</button>
    <p> Your Short Description</p>
    <b></b>
    {concatenatedString && <p>{concatenatedString}</p>}
    <p> Your Long Description</p>
    <b></b>
    {longString && <p>{longString}</p>}
    <p> Your Broadcast Tier (Admins Only)</p>
    <b></b>
    {tierstring && <p>{tierstring}</p>}
    </form>
  );
};


  // const [endDate, setEndDate] = useState("");
  // const [extra, setExtra] = useState("");
export default SurveyForm;