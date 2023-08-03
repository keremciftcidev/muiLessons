import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ComputerIcon from '@mui/icons-material/Computer';
export const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Button variant="text">TEXT</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <Button variant="text" color="primary">mavi</Button>
        <Button variant="text" color="secondary">mor</Button>
        <Button variant="text" color="success">yeşil</Button>
        <Button variant="text" color="primary">mavi</Button>
        <Button variant="text" color="warning">sarı</Button>
        <Button variant="text" color="info">mavi</Button>
        

        <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" color="primary">mavi</Button>
        <Button variant="outlined" color="secondary">mor</Button>
        <Button variant="outlined" color="success">yeşil</Button>
        <Button variant="outlined" color="primary">mavi</Button>
        <Button variant="outlined" color="warning">sarı</Button>
        <Button variant="outlined" color="info">mavi</Button>
        </Stack>

      

      </Stack>
      <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary">mavi</Button>
            <Button variant="contained" color="secondary">mor</Button>
            <Button variant="contained" color="success">yeşil</Button>
            <Button variant="contained" color="primary">mavi</Button>
            <Button variant="contained" color="warning">sarı</Button>
            <Button variant="contained" color="info">mavi</Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary" startIcon={<AddIcon/>}>mavi</Button>
            <Button variant="contained" color="secondary" startIcon={<AddIcon/>}>mor</Button>
            <Button variant="contained" color="success" endIcon={<ComputerIcon/>}>yeşil</Button>
            <Button variant="contained" color="primary">kerem</Button>
            <Button variant="contained" color="warning">sarı</Button>
            <Button variant="contained" color="info">mavi</Button>
        </Stack>
    </Stack>
    
  );
};
