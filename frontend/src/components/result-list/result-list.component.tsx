import { Box } from "@mui/material"

export const ResultList = ({ results }) => {
    return results.map((result) => {
      return <Box sx={{ display: "flex", border: "1px solid black", width: "clamp(600px, 50%, 800px)", margin: "10px"}}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 4 }}>
          <Box sx={{ flex: 1, background: "deepskyblue" }}>
            <a href={result.source} target="_blank">{result.source}</a>
          </Box>
          <Box sx={{ flex: 4 }}>
          {result.text}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", fontSize: "2rem", background: "lightblue" }}>
          {result.percentage}
        </Box>
        </Box>
      
    })
}