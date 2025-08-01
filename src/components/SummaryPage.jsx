import React from "react";

const SummaryPage = ({ characters }) => {
    const teamCounts = characters.reduce((acc, char) => {
        const team = char.team || "Unassigned"; // fallback for missing team names
        acc[team] = (acc[team] || 0) + 1;
        return acc;
    }, {});

  return (
    <div>
      <h4>Teams Summary</h4>
      {Object.entries(teamCounts).map(([team, count]) => (
        <p key={team}>{team}: {count} member{count > 1 ? "s" : ""}</p>
      ))}
    </div>
  );
};

export default SummaryPage;