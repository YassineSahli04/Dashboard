import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import Report from "../../components/Report/Report";
import PieChart from "../../components/PieChart";
import { mockLineData as lineData } from "../../data/mockData";
import { mockReportData as reportData } from "../../data/mockData";
import { mockPieData as pieData } from "../../data/mockData";
import { mockBarData as barData } from "../../data/mockData";
import {useMemo, useState} from "react";
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalPositions, setTotalPositions] =useState(0);
  const [increasePositionNumPerc, setIncreasePositionNumPerc] = useState(0);
  const [increasePayPerc, setIncreasePayPerc] = useState(0);
  const [meanPay, setMeanPay] = useState(0);
  const [numItJobSeekers, setNumItJobSeekers] = useState(0);
  const [numItJobsInCities, setNumItJobsInCities] = useState(0);
  const { t } = useTranslation();


  useMemo(()=>{
    let total2025 = 0;
    let total2024 = 0;
    lineData["2025"].forEach((category) => {
      category.data.forEach((month) => {
        total2025 += month.y;
      });
    });
    setTotalPositions(total2025);
    lineData["2024"].forEach((category) => {
      category.data.forEach((month) => {
        total2024 += month.y;
      });
    });
    setIncreasePositionNumPerc(((total2025-total2024)/total2024)*100);
  },[]);

  useMemo(()=>{
    let meanPay2024 = 0;
    let meanPay2025 = 0;

    reportData.forEach(element => {
      meanPay2024+=element.value1;
      meanPay2025+=element.value2;

    });
    meanPay2024 = meanPay2024/ reportData.length;
    meanPay2025 = meanPay2025/ reportData.length;
    setIncreasePayPerc(((meanPay2025-meanPay2024)/meanPay2024)*100);
    setMeanPay(meanPay2025);
  },[]);

  useMemo(()=>{
    let numJobSeekers = 0;
    const itFields = ["aiEngineer","cybersecurityEngineer","fullstackEngineer"];

    itFields.forEach((field) => {
      const seekerEntry = pieData[field].find((o) => o.id === "seekers");
      if (seekerEntry) {
        numJobSeekers += seekerEntry.value;
      }
    });
    setNumItJobSeekers(numJobSeekers);
  },[]);

  useMemo(()=>{
    let numJobInCities = 0;
    const itCities = ["San Francisco", "New York", "Seattle", "Toronto", "Austin"];

    barData.forEach(element => {
      itCities.forEach(e => {
        numJobInCities += element[e];
      });
    });
    console.log(numJobInCities);
    
    setNumItJobsInCities(numJobInCities);

  },[totalPositions]);



  return (
    <Box m="20px">


      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totalPositions*1000}
            subtitle={t("totalPositions2025")}
            progress={1-(increasePositionNumPerc.toFixed(2)/100)}
            increase={`+${increasePositionNumPerc.toFixed(2)}%`}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={meanPay.toFixed(5)*1000}
            subtitle={t("meanSalary2025")}
            progress={1-(increasePayPerc.toFixed(2)/100)}
            increase={`+${increasePayPerc.toFixed(2)}%`}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numItJobSeekers}
            subtitle={t("jobSeekersIT")}
            isProgressDisplayed={false}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={numItJobsInCities}
            subtitle={t("topCitiesJobs")}
            isProgressDisplayed={false}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}

        >
          <LineChart />  
        </Box>


        {/* ROW 3 */}
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        > 
        <PieChart/>
        </Box>
                    
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            {t("topCitiesTitle")}
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
                <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            {t("annualSalaryTitle")}
          </Typography>
          <Box height="250px" mt="-20px">
            <Report/>
          </Box>
        </Box>
        

      </Box>
    </Box>
  );
};

export default Dashboard;
