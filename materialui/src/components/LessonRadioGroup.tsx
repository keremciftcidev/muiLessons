import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

import { useState } from "react";

export const LessonRadioGroup = () => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }

    const [value, setValue] = useState("")
  return (
    <FormControl>
      <FormLabel>Maaş beklentisi</FormLabel>
      <RadioGroup row name="extected-salary" value={value} onChange={handleChange}>
        <FormControlLabel
          label="2000$"
          value="2000 "
          color="secondary"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          label="3000$"
          value="3000 "
          color="secondary"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          label="4000$"
          value="4000 "
          color="secondary"
          control={<Radio color="error" />}
        />
      </RadioGroup>
    </FormControl>
  );
};
