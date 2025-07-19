import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";
import { Box, Typography, useTheme } from "@mui/material";
import {useState , useEffect} from "react";
import { useTranslation } from 'react-i18next';

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedField, setSelectedField] = useState("aiEngineer");
  const [processedData, setProcessedData] = useState({});
  const { t } = useTranslation();

    const legendItems = [
    {
      id: "open",
      label: t("open"),
      color: "#F47560"
    },
    {
      id: "seekers",
      label: t("seekers"),
      color: "#E8C1A0"
    }
  ];


  const handleChange = (e) => {
    setSelectedField(e.target.value);
  }

useEffect(() => {
  const processedDataTmp = {};
  Object.keys(data).forEach((key) => {
    const fieldData = data[key];
    const total = fieldData.reduce((sum, item) => sum + item.value, 0);

    processedDataTmp[key] = fieldData.map((item) => ({
      ...item,
      total,
    }));
  });

  setProcessedData(processedDataTmp);
}, []);
  return (
    <div>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent:"space-between"}}>
          <Typography variant="h4" fontWeight="600">
            { t("supplyDemandTitleStart") + t(selectedField) + t("supplyDemandTitleEnd")}
          </Typography>
          <Box>
            <select
              value={selectedField}
              onChange={handleChange}
              style={{
                padding: "8px 0",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            >
              {Object.keys(data).map((opt) => (
                <option value={opt} key={opt}>
                  {t(opt)}
                </option>
              ))}
            </select>
          </Box>
        </Box>

          
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <div style={{ height: "400px", width:"700px"}}>
                <ResponsivePie
                data={processedData[selectedField]}
                theme={{
                  axis: {
                    domain: {
                      line: {
                        stroke: colors.grey[100],
                      },
                    },
                    legend: {
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                    ticks: {
                      line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                      },
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                  },
                  legends: {
                    text: {
                      fill: colors.grey[100],
                      fontSize: 16,
                    },
                  },
                  labels: {
                    text: {
                      fontSize: 16,
                    },
                  },
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                arcLinkLabel={(d) => t(d.id)}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={colors.grey[100]}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={true}
                arcLabel={(d) => {
                  return `${((d.value / d.data.total) * 100).toFixed(1)}%`}}
                arcLabelsTextColor="#000000"
                arcLabelsRadiusOffset={0.4}
                arcLabelsSkipAngle={7}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                legends={[
                  {
                    anchor: "right",
                    direction: "column",
                    justify: false,
                    translateX: 200,
                    translateY:0,
                    itemsSpacing: 15,
                    itemWidth: 300,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    data: legendItems.map(item => ({
                      id: item.label,
                      label: item.label,
                      color: item.color
                    })),
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />

              </div>

          </Box>
        </div>
    
  );
};

export default PieChart;
