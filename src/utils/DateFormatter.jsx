//External Lib Import
import React from 'react';
import Moment from 'react-moment';

const DateFormatter = (date) => {
  return (
    <>
      <Moment format="D MMM YYYY" withTitle>
        {date}
      </Moment>{' '}
      <br />
    </>
  );
};

export const fromNow = (data) => <Moment fromNow>{data}</Moment>;

export default DateFormatter;
