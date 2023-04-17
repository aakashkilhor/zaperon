import {Box, Container, TextField, Grid, InputAdornment, IconButton, Button } from "@mui/material";
import logo from "../assets/zaperon_logo.png"


const Footer = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center' ,marginTop:'90px' ,marginLeft:'25px',position: "fixed" }}maxWidth>
      <div style={{ flex: '1 1 auto', }}>Powered by <img src={logo} alt="logo" /></div>
      <Box sx={{ display: 'flex', flex: '0 1 auto' }}>
        <Box style={{ flex: '1 1 auto', fontSize: '20px',fontFamily:'sans-serif',color:'#003FB9', textAlign:'center', fontWeight:'bold' }} >Need Help?</Box>
        <Box sx={{ flex: '1 1 auto' , fontSize: '20px',fontFamily:'sans-serif',color:'#003FB9', textAlign:'center', fontWeight:'bold', marginLeft:'10px', marginRight:"30px"}}>Privacy Policy <span style={{fontWeight:"normal"}}> &</span>  Terms </Box>
      </Box>
    </Container>
  );
};
// const Footer = () => {

//   return (
//     <Container maxWidth style={{ display: 'flex', marginTop:'100px', border:"1px solid black" }}>
//       <div style={{alignContent:'flex-start', justifyContent:"flex-start"}} sx={{  }}>Powered by <img src={logo} alt="logo" /></div>
//       <div style={{textAlign:'end'}}>Need Help?</div>
//       <div sx={{ flex: '1 1 auto' }}>Privacy Policy</div>
//       <div sx={{ flex: '1 1 auto' }}>&</div>
//       <div  style={{textAlign:'right', justifyContent:"flex-end" , justifySelf:'flex-start'}}>Terms</div>
//     </Container>
//   );
// };
//   return (
//     <Container>
//       <div>Powered by <img src={logo} alt="logo" /></div>
//       <div>Need Help?</div>
//       <div>Privacy Policy</div>
//       <div>&</div>
//       <div>Terms</div>
//     </Container>
//   );
// };

export default Footer;
