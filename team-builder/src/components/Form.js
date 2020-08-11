import React from "react";

const Form = (props) => {
  const [newTeamMember, setNewTeamMember] = React.useState({
    name: "",
    email: "",
    myRoles: "",
  });
  const changeHandler = (event) => {
    const stateObject = {
      ...newTeamMember,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.myRole]: event.target.myRole,
    };
    setNewTeamMember(stateObject);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(newTeamMember);
    setNewTeamMember({
      name: "",
      email: "",
      myRoles: "",
    });
  };

  return (
    <form onSubmit={submitForm}>
      <ul>
        <h2>Team Member Registration Form</h2>
        <li>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="2"
            maxLength="30"
            placeholder="name here"
            value={newTeamMember.name}
            onChange={changeHandler}
          />
        </li>
        <li>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example: charlie@pup.com"
            value={newTeamMember.email}
            onChange={changeHandler}
          />
        </li>
        <li>
          <label>Role:</label>
          <input
            list="roles"
            id="myRole"
            name="myRole"
            placeholder="choose from the following"
            value={newTeamMember.myRole}
            onChange={changeHandler}
          />
          <datalist id="roles">
            <option value="Backend Engineer" />
            <option value="Frontend Engineer" />
            <option value="Designer" />
            <option value="Data Scientist" />
            <option value="Role" />
          </datalist>
        </li>
        <li>
          <button>Submit</button>
        </li>
      </ul>
    </form>
  );
};

export default Form;
