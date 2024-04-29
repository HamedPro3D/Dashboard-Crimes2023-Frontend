import React from 'react';
import './Prop.css'; // Importar los estilos CSS

const CrimeDashboard = () => {
  return (
    <div className="crime-dashboard-container">
      <p>This dataset provides a detailed insight into reported crimes in Los Angeles from 2020 to the present. With the implementation of a new records management system by the Los Angeles Police Department (LAPD) in response to the FBI's mandate to exclusively collect data from the National Incident-Based Reporting System (NIBRS), improvements in data quality and accuracy are expected. However, during the transition to the new system, users may temporarily have access only to incidents reported in the previous system, while the LAPD works on generating new NIBRS datasets for a more efficient reporting system. It's important to note that due to the nature of original crime reports, which are often manually entered, there may be some inaccuracies in the data. Additionally, some location fields may contain incomplete or rounded data for privacy reasons. Despite these challenges, the primary goal is to provide an accurate representation of criminal activity in the city and address any questions or concerns that may arise in the comments.</p>
    </div>
  );
}

export default CrimeDashboard;
