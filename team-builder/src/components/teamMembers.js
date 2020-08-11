import React from "react";

const TeamMember = (props) => {
  return (
    <div className="team-list">
      <h1>Current Team Members</h1>
      {props.teamMember.map((newTeamMember) => (
        <div className="newTeamMember" key={newTeamMember.id}>
          <h4>Name: {newTeamMember.name}</h4>
          <h4>Email: {newTeamMember.email}</h4>
          <h4>Role: {newTeamMember.myRole}</h4>
        </div>
      ))}
    </div>
  );
};
export default TeamMember;
