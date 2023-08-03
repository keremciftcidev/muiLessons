import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const LessonTextField = () => {
  const handleInputChange = (event: { target: { value: string; }; }) => {
    setUpper(event.target.value.toUpperCase());
  };

  const [value, setValue] = useState("");
  const [upper, setUpper] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"column"} width={300} spacing={2}>
        <Stack direction={"row"} spacing={2} >
          <TextField variant="outlined" label="Ad"  />

          <TextField variant="standard" label="Ad" size="small" color="error" />
          <TextField
            variant="outlined"
            label="Ad"
            size="small"
            color="error"
            helperText="adınızı yazınız"
          />
          <TextField
            type="password"
            variant="outlined"
            label="Ad"
            size="small"
            color="error"
            helperText="adınızı yazınız"
          />
        </Stack>

        <TextField
          disabled
          type="password"
          variant="outlined"
          label="Ad"
          size="small"
          color="error"
          helperText="adınızı yazınız"
        />

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          type="password"
          variant="outlined"
        />
        {/* Pssword tipinde */}
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="start">TL</InputAdornment>,
          }}
          type="password"
          variant="outlined"
        />

        <Stack direction="column">
          <TextField
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="password"
            variant="outlined"
            label="Şifre"
            color="error"
            helperText={
              !value
                ? "Lütfen şifre giriniz"
                : "Şifrenizi kimse ile paylaşöayınız"
            }
          />
        </Stack>
        <TextField variant="outlined" label="Ad" type="date" />

        {/* Tüm yazılanlar büyük harfe dönüşüyor */}
        <TextField
          label="Ad"
          size="small"
          color="error"
          variant="standard"
          onChange={handleInputChange}
          value={upper}
        />
      </Stack>
    </Stack>
  );
};
