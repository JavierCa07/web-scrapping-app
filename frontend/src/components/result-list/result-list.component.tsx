import { Box } from "@mui/material"
import { useState } from "react";

// dictionary for color ranges
// for ex: from 0% to 50% the color is #adf3ad
const SIMILARITY_RANGES = {
  "#adf3ad": [0, 50],
  "#eca55e": [50, 80],
  "#ee7964": [80, 100]
};

// get the color of the similarity box based on the percentage
const getSimilarityColor = (percentage: number) => {
  const rangeIndex = Object.values(SIMILARITY_RANGES).findIndex(range => percentage > range[0] && percentage <= range[1]);
  const color = Object.keys(SIMILARITY_RANGES)[rangeIndex];
  return color;
}

export const ResultList = ({ results }) => {

    const [expandedResultIndexes, setExanpedResultIndexes] = useState([]); // state for rendering the expanded results (the ones where we clicked "+")
  
  
    const handleExpandClick = (index: number) => {
      // add the new index to the list of expanded indexes
      setExanpedResultIndexes(expandedResultIndexes.concat(index));
    }

    // get the height of the result line based on the index
    // if the index is in the list of expanded indexes, the height is "auto" otherwise it is 120 pixels
    const getHeightByResultIndex = (index: number) => expandedResultIndexes.includes(index) ? "auto" : "120px";

    return results.map((result, i) => {
      return <Box key={i} sx={{ display: "flex", border: "1px solid grey", width: "clamp(600px, 50%, 800px)", margin: "10px", height: getHeightByResultIndex(i), overflowY: "hidden"}}>
        {/* to the left we have the expand button "+" */}
        <Box sx={{ flex: 1, color: "black", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", fontSize: "2rem" }} onClick={() => handleExpandClick(i)}>
          +
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 16 }}>
          {/* to the top we have the link to the paper source */}
          <Box sx={{ flex: 1, background: "#98beca", minHeight: "24px", overflow: "hidden", paddingLeft: "10px" }}>
            <a href={result.source} target="_blank" rel="noopener noreferrer">{result.source}</a>
          </Box>
          {/* to the bottom we have the text of the full paper abstract */}
          <Box sx={{ flex: 10 }}>
          {result.text}
          </Box>
        </Box>
        {/* to the right we have the similarity percentage with a background color that depends on the percentage */}
        <Box sx={{ display: "flex", flexDirection: "column", flex: 2, alignItems: "center", justifyContent: "center", fontSize: "2rem", background: getSimilarityColor(result.percentage) }}>
          <div style={{ color: "#222222", fontSize: "8px"}}>similarity</div>
          {result.percentage}
        </Box>
      </Box>
    })
}