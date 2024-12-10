import React from "react";

const TeamComponent = ({ ...props }) => {
  const { fullName, position } = props;
  return (
    <div className="team-container">
      <div className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/team-member-3.jpg`}
          alt="Team Member 3"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2 text-white font-heading_secondary">
          {fullName}
        </h3>
        <p className="text-gray-400 font-heading_secondary">{position}</p>
      </div>
    </div>
  );
};

export default TeamComponent;
