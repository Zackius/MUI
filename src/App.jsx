
import { Box, Stack } from "@mui/material"
import Feeds from "./Components/Feeds"
import Navbar from "./Components/Navbar"
import Rightbar from "./Components/Rightbar"
import Sidebar from "./Components/Sidebar"
import Add from "./Components/Add"


function App() {


  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2}>
      <Sidebar />
      <Feeds/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
  )
}

export default App
