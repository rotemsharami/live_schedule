import React from 'react';
import PropTypes from 'prop-types';
import './Schedule.scss';
import {getData} from "../../tools/data";

const Schedule = () => {

  console.log(getData().activities);

  return(
    <div className="Schedule">
                <div>
                {getData().activities.map((activity)=>
                  <div key={activity.id} className='activity'>
                    <div className='title'>{activity.title}</div>
                  </div>
                )}
              </div>


    </div>
    );
  };

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
