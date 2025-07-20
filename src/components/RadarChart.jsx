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
import { useTranslation } from 'react-i18next';


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
  const { t } = useTranslation();

  const tickLabelMap = {
      "AI Engineer": t("aiEngineer"),
      "Cybersecurity Analyst": t("cybersecurityEngineer"),
      "Fullstack Developer": t("fullstackEngineer"),
    };

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
          boxWidth: 12,
          maxWidth: 120,
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
          {t('topSkills') + tickLabelMap[selectedField]}
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
                {tickLabelMap[field]}
              </option>
            ))}
          </select>
        </Box>

      </Box>
      <Box display="flex"
        flexDirection="column"
        alignItems="center"
        mt="25px"
      position="relative"
      overflow="hidden"
      width="100%"
      height="100%"
      >
        
  <div style={{  width: "50%", height: "50%", position: "relative" }}>
    <Radar data={chartData} options={options} />
  </div>

      </Box>
    </>

  );
};
export default RadarChart;
