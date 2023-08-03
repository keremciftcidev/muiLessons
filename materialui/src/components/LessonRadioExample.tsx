import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "ronaldo") {
      setHelperText("Doğru cevap verdiniz");
    } else if (value === "mbappe") {
      setHelperText("Doğru cevap Ronaldo");
      setError(false);
    } else if (value === "haland") {
      setHelperText("Doğru cevap Ronaldo");
      setError(false);
    } else {
      setHelperText("Lütfen Seçim yapınız  ");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Tüm zamanların en iyi futbolcusu kim?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel
            value={"ronaldo"}
            label="Ronaldo"
            control={<Radio />}
          />

          <FormControlLabel
            value={"mbappe"}
            label="Mbappe"
            control={<Radio />}
          />
          <FormControlLabel
            value={"haland"}
            label="Haland"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button variant="outlined" type="submit">
          GÖNDER
        </Button>
      </FormControl>
    </form>
  );
};
