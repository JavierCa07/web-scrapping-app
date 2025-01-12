import { Box } from "@mui/material"
import { useState } from "react";

const SIMILARITY_RANGES = {
  "lightgreen": [0, 50],
  "coral": [50, 80],
  "tomato": [80, 100]
};

const getSimilarityColor = (percentage: number) => {
  const rangeIndex = Object.values(SIMILARITY_RANGES).findIndex(range => percentage > range[0] && percentage <= range[1]);
  const color = Object.keys(SIMILARITY_RANGES)[rangeIndex];
  return color;
}

export const ResultList = ({ results }) => {

    const [expandedResultIndexes, setExanpedResultIndexes] = useState([]);
  
    // TODO: add support for collapsing results
    // also if posible show only the + button for overflowed texts
    const handleExpandClick = (index: number) => {
      setExanpedResultIndexes(expandedResultIndexes.concat(index));
    }

    const getHeightByResultIndex = (index: number) => expandedResultIndexes.includes(index) ? "auto" : "120px";

    return results.map((result, i) => {
      return <Box key={i} sx={{ display: "flex", border: "1px solid black", width: "clamp(600px, 50%, 800px)", margin: "10px", height: getHeightByResultIndex(i), overflowY: "hidden"}}>
        <Box sx={{ flex: 1, color: "black", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", fontSize: "2rem" }} onClick={() => handleExpandClick(i)}>
          +
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 16 }}>
          <Box sx={{ flex: 1, background: "deepskyblue" }}>
            <a href={result.source} target="_blank">{result.source}</a>
          </Box>
          <Box sx={{ flex: 10 }}>
          {result.text}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 2, alignItems: "center", justifyContent: "center", fontSize: "2rem", background: getSimilarityColor(result.percentage) }}>
          {result.percentage}
        </Box>
      </Box>
    })
}