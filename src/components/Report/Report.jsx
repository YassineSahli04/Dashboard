import "./Report.css";
import { mockReportData as reportData } from "../../data/mockData";
import {useEffect, useState} from "react"

const Report = () => {
    const [maxChartVal,setMaxChartVal] = useState(0);
    const [yAxisList, setYAxisList] = useState([]);
    const [processedData,setProcessedData] = useState([]);
    const numTicks = 5;

    useEffect(()=>{
        let maxValue = 0;
        let yAxisListTmp = [];
        reportData.forEach(element => {
            if(element.value1 > maxValue || element.value2 > maxValue){
                maxValue = element.value1>element.value2 ? element.value1 : element.value2;
            }      
        });
        const step = Math.round(maxValue / numTicks);
        for (let i = 0; i <= numTicks; i++) {
            yAxisListTmp.unshift(step*i)
            
        }
        setMaxChartVal(yAxisListTmp[0]);
        setYAxisList(yAxisListTmp);
        

    },[]);

    useEffect(()=>{
        const processedDataTmp = [];
        let i = 0;
        reportData.forEach(element => {
            const percVal1 = Math.round((element.value1*100)/maxChartVal);
            const percVal2 = Math.round((element.value2*100)/maxChartVal);
            processedDataTmp.push({
                ...element,
                percVal1,
                percVal2,
        });
        });
        setProcessedData(processedDataTmp);
    },[maxChartVal])


    

  return (
    <div className="grid-one-item grid-common grid-c3">
        <div className="grid-c3-content">
            <div className="grid-chart">
                <div className="chart-vert-value">
                    {yAxisList.map((elem) => (
                        <span key={elem}>{elem}</span>
                        ))}
                </div>
                {
                    processedData.map((report) => (
                        <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper">
                                <div className="bar-item2" style={{ height: report.percVal1 }}></div>
                                <div className="bar-item1" style={{ height:report.percVal2}}></div>
                            </div>
                            <span className="grid-hortz-value">{report.id}</span>
                        </div>
                    ))
                }
                
            </div>
            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#1100ff" }}></span>
                    <span>2025</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#87a5feb4" }}></span>
                    <span>2024</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Report
