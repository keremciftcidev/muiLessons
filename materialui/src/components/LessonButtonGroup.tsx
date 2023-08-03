import { Button, Stack,ButtonGroup } from "@mui/material";

export const LessonButtonGroup = () => {
  return (
    <Stack>
    <Stack direction="row">
        <ButtonGroup variant="contained">
            <Button>Butonum</Button>
            <Button>Butonum</Button>
            <Button>Butonum</Button>
        </ButtonGroup>

    </Stack>
     <Stack direction="row">
     <ButtonGroup variant="outlined" orientation="vertical" size="small">
         <Button>Butonum</Button>
         <Button>Butonum</Button>
         <Button>Butonum</Button>
     </ButtonGroup>

 </Stack>
 <Stack direction="row">
     <ButtonGroup variant="outlined" orientation="vertical" size="large">
         <Button>Butonum</Button>
         <Button>Butonum</Button>
         <Button>Butonum</Button>
     </ButtonGroup>

 </Stack>
 </Stack>
  )
}
