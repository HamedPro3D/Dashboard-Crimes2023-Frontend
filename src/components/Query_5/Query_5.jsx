import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Query_5.css';

const VictimsByDescentAndArea = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [victimData, setVictimData] = useState([]);

  useEffect(() => {
    if (selectedArea) {
      fetchVictimData(selectedArea);
    }
  }, [selectedArea]);

  const fetchVictimData = async (areaName) => {
    try {
      const response = await fetch(`http://localhost:5000/get_victims_by_descent_and_area/${encodeURIComponent(areaName)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setVictimData(data);
    } catch (error) {
      console.error('Error fetching victim data:', error);
    }
  };

  const renderApexChart = (data) => {
    const options = {
      chart: {
        type: 'bar',
        width: '100%',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: data.map(item => getCodeLabel(item.Vict_Descent))
      },
      colors: ['#950101']
    };

    const series = [{
      data: data.map(item => item.Cantidad)
    }];

    return <ReactApexChart options={options} series={series} type="bar"  height={460} width={860}/>;
  };

  const getCodeLabel = (code) => {
    switch (code) {
      case 'A':
        return 'Other Asian';
      case 'B':
        return 'Black';
      case 'C':
        return 'Chinese';
      case 'D':
        return 'Cambodian';
      case 'F':
        return 'Filipino';
      case 'G':
        return 'Guamanian';
      case 'H':
        return 'Hispanic/Latin/Mexican';
      case 'I':
        return 'American Indian/Alaskan Native';
      case 'J':
        return 'Japanese';
      case 'K':
        return 'Korean';
      case 'L':
        return 'Laotian';
      case 'O':
        return 'Other';
      case 'P':
        return 'Pacific Islander';
      case 'S':
        return 'Samoan';
      case 'U':
        return 'Hawaiian';
      case 'V':
        return 'Vietnamese';
      case 'W':
        return 'White';
      case 'X':
        return 'Unknown';
      case 'Z':
        return 'Asian Indian';
      default:
        return code;
    }
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <select value={selectedArea} onChange={(e) => handleAreaSelect(e.target.value)}>
        <option value="">Select area</option>
        <option value="77th Street">77th Street</option>
        <option value="Central">Central</option>
        <option value="Devonshire">Devonshire</option>
        <option value="Foothill">Foothill</option>
        <option value="Harbor">Harbor</option>
        <option value="Hollywood">Hollywood</option>
        <option value="Hollenbeck">Hollenbeck</option>
        <option value="Mission">Mission</option>
        <option value="N Hollywood">N Hollywood</option>
        <option value="Newton">Newton</option>
        <option value="Northeast">Northeast</option>
        <option value="Olympic">Olympic</option>
        <option value="Pacific">Pacific</option>
        <option value="Rampart">Rampart</option>
        <option value="Southeast">Southeast</option>
        <option value="Southwest">Southwest</option>
        <option value="Topanga">Topanga</option>
        <option value="Van Nuys">Van Nuys</option>
        <option value="West LA">West LA</option>
        <option value="West Valley">West Valley</option>
        <option value="Wilshire">Wilshire</option>
      </select>
      {renderApexChart(victimData)} 
    </div>
  );
};

export default VictimsByDescentAndArea;
