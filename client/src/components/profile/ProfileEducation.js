import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, major, degree, gpa, current, to, from, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{from}</Moment> -{" "}
        {!to ? " Now" : <Moment format='MM/DD/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Major: </strong> {major}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>GPA: </strong> {gpa}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
