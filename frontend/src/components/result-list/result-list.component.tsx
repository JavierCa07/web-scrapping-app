import { Box } from "@mui/material"
import { useState } from "react";

const SIMILARITY_RANGES = {
  "#adf3ad": [0, 50],
  "#eca55e": [50, 80],
  "#ee7964": [80, 100]
};

const getSimilarityColor = (percentage: number) => {
  const rangeIndex = Object.values(SIMILARITY_RANGES).findIndex(range => percentage > range[0] && percentage <= range[1]);
  const color = Object.keys(SIMILARITY_RANGES)[rangeIndex];
  return color;
}

export const ResultList = ({ results }) => {

    const [expandedResultIndexes, setExanpedResultIndexes] = useState([]);
  
  
    const handleExpandClick = (index: number) => {
      setExanpedResultIndexes(expandedResultIndexes.concat(index));
    }

    const getHeightByResultIndex = (index: number) => expandedResultIndexes.includes(index) ? "auto" : "120px";

    return results.map((result, i) => {
      return <Box key={i} sx={{ display: "flex", border: "1px solid grey", width: "clamp(600px, 50%, 800px)", margin: "10px", height: getHeightByResultIndex(i), overflowY: "hidden"}}>
        <Box sx={{ flex: 1, color: "black", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", fontSize: "2rem" }} onClick={() => handleExpandClick(i)}>
          +
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 16 }}>
          <Box sx={{ flex: 1, background: "#98beca", minHeight: "24px", overflow: "hidden", paddingLeft: "10px" }}>
            <a href={result.source} target="_blank" rel="noopener noreferrer">{result.source}</a>
          </Box>
          <Box sx={{ flex: 10 }}>
          {result.text}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 2, alignItems: "center", justifyContent: "center", fontSize: "2rem", background: getSimilarityColor(result.percentage) }}>
          <div style={{ color: "#222222", fontSize: "8px"}}>similarity</div>
          {result.percentage}
        </Box>
      </Box>
    })
}