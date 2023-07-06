import React from "react";

interface Patient {
  firstName: string;
  lastName: string;
  age: number;
}

interface RecentPatientProps {
  patient: Patient;
}

const RecentPatient: React.FC<RecentPatientProps> = ({
  patient: { firstName, lastName, age },
}) => {
  return (
    <>
      <div className="recent-patients__data">
        <h2 className="recent-patients__name">
          {firstName} {lastName} -
        </h2>
        <p className="recent-patients__age">{age} años</p>
      </div>
    </>
  );
};

export default RecentPatient;
