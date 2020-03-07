import React from 'react';

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import pt from 'date-fns/locale/pt';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';

export default function EnviaKeyboardDatePicker({ value, onChange, ...props }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
      <KeyboardDatePicker
        disableFuture
        openTo="year"
        format="dd/MM/yyyy"
        views={['year', 'month', 'date']}
        value={value}
        onChange={onChange}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

EnviaKeyboardDatePicker.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
