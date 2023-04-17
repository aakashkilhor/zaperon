import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/myMage.png"
import {Box, Container, TextField, Grid, InputAdornment, IconButton, Button } from "@mui/material";

const Page = ()=>{
 const [name, setName] = useState("")
const navigate = useNavigate();
    axios
    .get("http://localhost:3000/dashboard", {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        setName(response.data);
        console.log(response.data)})
      .catch(()=>{
        navigate("/login")
      })
    return(
      
      <Grid  justify="center" alignItems="center" style={{marginTop:'170px'}} >
        <Container justify = "center" style={{ width: '200px',padding:'50px',backgroundColor:"#EFEFEF",borderRadius:"100px" }}>
        <img src={myImage} alt="Alt text for my image" />
        </Container>
        <Container style={{color:'#0B3558', fontFamily:'', fontSize:'48px'}}>
          <div style={{fontSize: '95px',fontFamily:'sans-serif',fontWeight:'bold', textAlign:'center',marginTop:"80px"}}>Welcome, {name}!</div>
          <div style={{fontSize: '32px',fontFamily:'sans-serif', textAlign:'center', marginTop:'100px'}}> Let's connect to your workspace.</div>
        </Container>
      <Container spacing={5} justify="center" alignItems="center">
      
      
       
      </Container>
      </Grid>
    
    )
}
export default Page;