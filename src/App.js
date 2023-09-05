import { Avatar, Button, } from "@mui/material";
import Img from "./components/baki.jpg";

function App(){
    
    return (
      <>
        <h1>Home</h1>
        <Button variant="contained">Contained</Button>
        <Button variant= "outlined">Vazio</Button>
        <Avatar alt="Remy Sharp" src={Img} />
      </>
  );}

export default App;
