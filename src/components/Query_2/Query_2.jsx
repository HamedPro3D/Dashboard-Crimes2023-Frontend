import React, { useState, useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Query_2.css'

function CrimeVictimsChart() {
  const [selectedDate, setSelectedDate] = useState('');
  const [victimData, setVictimData] = useState([]);
  const chartOptions = useRef({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    xaxis: {
      categories: ['Female', 'Male', 'Other']
    },
    yaxis: {
      title: {
        text: 'Quantity',
        style: {
          fontSize: '16px',
          color: '#950101'
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 14,
          columnWidth: '50%',
        }
      },
      axisBorder: {
        show: true,
        color: '#950101'
      },
      axisTicks: {
        show: true,
        color: '#950101'
      }
    },
    colors: ['#950101', '#28264C', '#605C5C'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
    }
  });
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      fetchData(selectedDate);
    }
  }, [selectedDate]);

  const fetchData = async (selectedDate) => {
    try {
      const response = await fetch(`http://localhost:5000/get_victims_by_sex/${selectedDate}`);
      const data = await response.json();
      setVictimData(data);
      const seriesData = [
        data.find(victim => victim.Vict_Sex === 'F').Cantidad,
        data.find(victim => victim.Vict_Sex === 'M').Cantidad,
        data.find(victim => victim.Vict_Sex === 'X').Cantidad
      ];
      setChartSeries([{ data: seriesData }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  }

  return (
    <>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="datePicker" style={{ fontSize: '25px', color: '#950101' }}>Select Date:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          min="2020-01-01"
          max="2024-03-31"
          onChange={handleDateChange}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div>
        <ReactApexChart
          options={chartOptions.current}
          series={chartSeries}
          type="bar"
          height={400}
        />
      </div>
    </>
  );
}

export default CrimeVictimsChart;
