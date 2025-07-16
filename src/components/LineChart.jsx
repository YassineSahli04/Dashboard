import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import {useState, useMemo} from  "react"
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockLineData as data } from "../data/mockData";

export default function LineChart({ isCustomLineColors = false}){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [totalPositions, setTotalPositions] = useState(0)

  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  }
  useMemo(()=>{
    let total = 0;
    data[selectedYear].forEach((category) => {
      category.data.forEach((month) => {
        total += month.y;
      });
    });
    setTotalPositions(total)
  },[selectedYear]);

  

  return (
    <>
    <Box
      mt="25px"
      p="0 30px"
      display="flex "
      justifyContent="space-between"
      alignItems="center"
    >
    <Box>
      <Typography
        variant="h3"
        fontWeight="600"
        color={colors.grey[100]}
      >
        Available positions for each field in {selectedYear}
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        color={colors.greenAccent[500]}
      >
      {totalPositions*1000} Total Positions
      </Typography>
    </Box>
<Box sx={{ mt: 2 }}>
  <select
    value={selectedYear}
    onChange={handleChange}
    style={{
      padding: "8px 12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none",
    }}
  >
    {Object.keys(data).map((year) => (
      <option value={year} key={year}>
        {year}
      </option>
    ))}
  </select>
</Box>

  </Box>
  <Box height="350px" m="-20px 0 0 0" paddingLeft="25px">
        <ResponsiveLine 
        data={data[selectedYear]}
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
                fontSize: 16,
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
              fontSize: 14,
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={ { datum: "color" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 1,
          tickRotation: 0,
          legend: undefined,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend:"Open Positions (in thousands)",
          orient: "left",
          tickValues: 10,
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,  
            itemsSpacing: 100,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        />
    </Box>
    </>

        
  );
};
