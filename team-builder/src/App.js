import React from "react";
import "./App.css";
import Form from "./components/Form";
import TeamMember from "./components/teamMembers";

function App() {
  const [teamMember, setTeamMember] = React.useState([
    {
      id: 1,
      name: "George",
      email: "George@pup.com",
      myRole: "Frontend Engineer",
    },
  ]);

  const addNewMember = (newTeamMember) => {
    setTeamMember([...teamMember, { ...newTeamMember, id: Date.now() }]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <TeamMember teamMember={teamMember} />
    </div>
  );
}

export default App;
