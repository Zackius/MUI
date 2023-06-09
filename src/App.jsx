
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Feeds from "./Components/Feeds"
import Navbar from "./Components/Navbar"
import Rightbar from "./Components/Rightbar"
import Sidebar from "./Components/Sidebar"
import Add from "./Components/Add"
import { useState } from "react"


function App() {
  const [mode, setMode] =useState("light")

  const darkTheme = createTheme({
    palette: {
    mode: mode
  }
})
  return (
    <ThemeProvider theme={darkTheme}  >
  <Box  bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2}>
          <Sidebar setMode={setMode} mode={mode}  />
      <Feeds/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  
  )
}

export default App
