import React from 'react';
import { tokens } from "../theme";
import { useState, useMemo } from "react"
import { Box, Typography, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { mockRadarData } from "../data/mockData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedField, setSelectedField] = useState("AI Engineer");
  const chartData = mockRadarData[selectedField];

  const handleChange = (e) => {
    setSelectedField(e.target.value);
  }

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: colors.grey[300],
        },
        grid: {
          color: colors.grey[300],
        },
        pointLabels: {
          color: colors.grey[100],
          font: {
            size: 14,
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: colors.grey[100],
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: colors.grey[100],
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography
          variant="h3"
          fontWeight="600"
          margin="20px 0 0 15px"
          color={colors.grey[100]}
          fontSize='20px'
        >
          Top 6 skills in {selectedField}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <select
            value={selectedField}
            onChange={handleChange}
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              marginRight: "20px",
            }}
          >
            {Object.keys(mockRadarData).map((field) => (
              <option value={field} key={field}>
                {field}
              </option>
            ))}
          </select>
        </Box>

      </Box>
      <Box display="flex"
        flexDirection="column"
        alignItems="center"
        mt="25px"
      >
        <div style={{ height: "250px", width: "400px" }}>
          <Radar data={chartData} options={options} />
        </div>
      </Box>
    </>

  );
};
export default RadarChart;
