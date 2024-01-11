import { Box, Container } from "@mui/material";



const Hero = () => {
  return (
    <Container sx={{mt:2.5 ,justifyContent:"space-between", display:"flex" , alignItems:"center"}}>
      <Box>
        slider
      </Box>

      <Box>

        <Box>img1</Box>
        <Box>img2</Box>

      </Box>
    </Container>
  );
}

export default Hero;
