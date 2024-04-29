import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import redMarker from './marker.png';
const redIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const CrimeMap = () => {
  const [selectedCrimeType, setSelectedCrimeType] = useState('');
  const [crimeLocations, setCrimeLocations] = useState([]);

  useEffect(() => {
    fetchCrimeLocations();
  }, [selectedCrimeType]);

  const fetchCrimeLocations = async () => {
    try {
      if (!selectedCrimeType) return;

      const response = await fetch(`http://localhost:5000/get_crime_location/${selectedCrimeType}`);
      const data = await response.json();
      setCrimeLocations(data);
    } catch (error) {
      console.error('Error fetching crime locations:', error);
    }
  };

  const handleCrimeTypeSelect = (crimeType) => {
    setSelectedCrimeType(crimeType);
  };

  return (
    <>
      <div>
        
        <select id="crimeType" value={selectedCrimeType} onChange={(e) => handleCrimeTypeSelect(e.target.value)}>
         <option value="crimeType">Select Crime Type</option>
          <option value="ASSAULT WITH DEADLY WEAPON ON POLICE OFFICER">Assault with Deadly Weapon on Police Officer</option>
          <option value="ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT">Assault with Deadly Weapon, Aggravated Assault</option>
          <option value="ATTEMPTED ROBBERY">Attempted Robbery</option>
          <option value="BATTERY - SIMPLE ASSAULT">Battery - Simple Assault</option>
          <option value="BATTERY ON A FIREFIGHTER">Battery on a Firefighter</option>
          <option value="BATTERY POLICE (SIMPLE)">Battery Police (Simple)</option>
          <option value="BATTERY WITH SEXUAL CONTACT">Battery with Sexual Contact</option>
          <option value="BEASTIALITY, CRIME AGAINST NATURE SEXUAL ASSLT WITH ANIM">Beastiality, Crime Against Nature Sexual Assault with Animal</option>
          <option value="BIGAMY">Bigamy</option>
          <option value="BIKE - ATTEMPTED STOLEN">Bike - Attempted Stolen</option>
          <option value="BIKE - STOLEN">Bike - Stolen</option>
          <option value="BLOCKING DOOR INDUCTION CENTER">Blocking Door Induction Center</option>
          <option value="BOAT - STOLEN">Boat - Stolen</option>
          <option value="BOMB SCARE">Bomb Scare</option>
          <option value="BRANDISH WEAPON">Brandish Weapon</option>
          <option value="BRIBERY">Bribery</option>
          <option value="BUNCO, ATTEMPT">Bunco, Attempt</option>
          <option value="BUNCO, GRAND THEFT">Bunco, Grand Theft</option>
          <option value="BUNCO, PETTY THEFT">Bunco, Petty Theft</option>
          <option value="BURGLARY">Burglary</option>
          <option value="BURGLARY FROM VEHICLE">Burglary from Vehicle</option>
          <option value="BURGLARY FROM VEHICLE, ATTEMPTED">Burglary from Vehicle, Attempted</option>
          <option value="BURGLARY, ATTEMPTED">Burglary, Attempted</option>
          <option value="CHILD ABANDONMENT">Child Abandonment</option>
          <option value="CHILD ABUSE (PHYSICAL) - AGGRAVATED ASSAULT">Child Abuse (Physical) - Aggravated Assault</option>
          <option value="CHILD ABUSE (PHYSICAL) - SIMPLE ASSAULT">Child Abuse (Physical) - Simple Assault</option>
          <option value="CHILD ANNOYING (17YRS & UNDER)">Child Annoying (17 years & under)</option>
          <option value="CHILD NEGLECT (SEE 300 W.I.C.)">Child Neglect (See 300 W.I.C.)</option>
          <option value="CHILD PORNOGRAPHY">Child Pornography</option>
          <option value="CHILD STEALING">Child Stealing</option>
          <option value="CONSPIRACY">Conspiracy</option>
          <option value="CONTEMPT OF COURT">Contempt of Court</option>
          <option value="CONTRIBUTING">Contributing</option>
          <option value="COUNTERFEIT">Counterfeit</option>
          <option value="CREDIT CARDS, FRAUD USE ($950 & UNDER)">Credit Cards, Fraud Use ($950 & under)</option>
          <option value="CREDIT CARDS, FRAUD USE ($950.01 & OVER)">Credit Cards, Fraud Use ($950.01 & over)</option>
          <option value="CRIMINAL HOMICIDE">Criminal Homicide</option>
          <option value="CRIMINAL THREATS - NO WEAPON DISPLAYED">Criminal Threats - No Weapon Displayed</option>
          <option value="CRM AGNST CHLD (13 OR UNDER) (14-15 & SUSP 10 YRS OLDER)">Crime Against Child (13 or under) (14-15 & suspended 10 years older)</option>
          <option value="CRUELTY TO ANIMALS">Cruelty to Animals</option>
          <option value="DEFRAUDING INNKEEPER/THEFT OF SERVICES, $950 & UNDER">Defrauding Innkeeper/Theft of Services, $950 & under</option>
          <option value="DEFRAUDING INNKEEPER/THEFT OF SERVICES, OVER $950.01">Defrauding Innkeeper/Theft of Services, over $950.01</option>
          <option value="DISCHARGE FIREARMS/SHOTS FIRED">Discharge Firearms/Shots Fired</option>
          <option value="DISHONEST EMPLOYEE - GRAND THEFT">Dishonest Employee - Grand Theft</option>
          <option value="DISHONEST EMPLOYEE - PETTY THEFT">Dishonest Employee - Petty Theft</option>
          <option value="DISHONEST EMPLOYEE ATTEMPTED THEFT">Dishonest Employee Attempted Theft</option>
          <option value="DISRUPT SCHOOL">Disrupt School</option>
          <option value="DISTURBING THE PEACE">Disturbing the Peace</option>
          <option value="DOCUMENT FORGERY / STOLEN FELONY">Document Forgery / Stolen Felony</option>
          <option value="DOCUMENT WORTHLESS ($200 & UNDER)">Document Worthless ($200 & under)</option>
          <option value="DOCUMENT WORTHLESS ($200.01 & OVER)">Document Worthless ($200.01 & over)</option>
          <option value="DRIVING WITHOUT OWNER CONSENT (DWOC)">Driving Without Owner Consent (DWOC)</option>
          <option value="DRUGS, TO A MINOR">Drugs, to a Minor</option>
          <option value="DRUNK ROLL">Drunk Roll</option>
          <option value="EMBEZZLEMENT, GRAND THEFT ($950.01 & OVER)">Embezzlement, Grand Theft ($950.01 & over)</option>
          <option value="EMBEZZLEMENT, PETTY THEFT ($950 & UNDER)">Embezzlement, Petty Theft ($950 & under)</option>
          <option value="EXTORTION">Extortion</option>
          <option value="FAILURE TO DISPERSE">Failure to Disperse</option>
          <option value="FAILURE TO YIELD">Failure to Yield</option>
          <option value="FALSE IMPRISONMENT">False Imprisonment</option>
          <option value="FALSE POLICE REPORT">False Police Report</option>
          <option value="FIREARMS EMERGENCY PROTECTIVE ORDER (FIREARMS EPO)">Firearms Emergency Protective Order (Firearms EPO)</option>
          <option value="FIREARMS RESTRAINING ORDER (FIREARMS RO)">Firearms Restraining Order (Firearms RO)</option>
          <option value="GRAND THEFT / AUTO REPAIR">Grand Theft / Auto Repair</option>
          <option value="GRAND THEFT / INSURANCE FRAUD">Grand Theft / Insurance Fraud</option>
          <option value="HUMAN TRAFFICKING - COMMERCIAL SEX ACTS">Human Trafficking - Commercial Sex Acts</option>
          <option value="HUMAN TRAFFICKING - INVOLUNTARY SERVITUDE">Human Trafficking - Involuntary Servitude</option>
          <option value="ILLEGAL DUMPING">Illegal Dumping</option>
          <option value="INCEST (SEXUAL ACTS BETWEEN BLOOD RELATIVES)">Incest (Sexual Acts Between Blood Relatives)</option>
          <option value="INCITING A RIOT">Inciting a Riot</option>
          <option value="INDECENT EXPOSURE">Indecent Exposure</option>
          <option value="INTIMATE PARTNER - AGGRAVATED ASSAULT">Intimate Partner - Aggravated Assault</option>
          <option value="INTIMATE PARTNER - SIMPLE ASSAULT">Intimate Partner - Simple Assault</option>
          <option value="KIDNAPPING">Kidnapping</option>
          <option value="KIDNAPPING - GRAND ATTEMPT">Kidnapping - Grand Attempt</option>
          <option value="LETTERS, LEWD  -  TELEPHONE CALLS, LEWD">Letters, Lewd - Telephone Calls, Lewd</option>
          <option value="LEWD CONDUCT">Lewd Conduct</option>
          <option value="LEWD/LASCIVIOUS ACTS WITH CHILD">Lewd/Lascivious Acts with Child</option>
          <option value="LYNCHING">Lynching</option>
          <option value="LYNCHING - ATTEMPTED">Lynching - Attempted</option>
          <option value="MANSLAUGHTER, NEGLIGENT">Manslaughter, Negligent</option>
          <option value="ORAL COPULATION">Oral Copulation</option>
          <option value="OTHER ASSAULT">Other Assault</option>
          <option value="OTHER MISCELLANEOUS CRIME">Other Miscellaneous Crime</option>
          <option value="PANDERING">Pandering</option>
          <option value="PEEPING TOM">Peeping Tom</option>
          <option value="PETTY THEFT - AUTO REPAIR">Petty Theft - Auto Repair</option>
          <option value="PICKPOCKET">Pickpocket</option>
          <option value="PICKPOCKET, ATTEMPT">Pickpocket, Attempt</option>
          <option value="PIMPING">Pimping</option>
          <option value="PROWLER">Prowler</option>
          <option value="PURSE SNATCHING">Purse Snatching</option>
          <option value="PURSE SNATCHING - ATTEMPT">Purse Snatching - Attempt</option>
          <option value="RAPE, ATTEMPTED">Rape, Attempted</option>
          <option value="RAPE, FORCIBLE">Rape, Forcible</option>
          <option value="RECKLESS DRIVING">Reckless Driving</option>
          <option value="REPLICA FIREARMS(SALE,DISPLAY,MANUFACTURE OR DISTRIBUTE)">Replica Firearms(Sale,Display,Manufacture or Distribute)</option>
          <option value="RESISTING ARREST">Resisting Arrest</option>
          <option value="ROBBERY">Robbery</option>
          <option value="SEX OFFENDER REGISTRANT OUT OF COMPLIANCE">Sex Offender Registrant Out of Compliance</option>
          <option value="SEX,UNLAWFUL(INC MUTUAL CONSENT, PENETRATION W/ FRGN OBJ">Sex, Unlawful(Incl. Mutual Consent, Penetration w/ Foreign Object)</option>
          <option value="SEXUAL PENETRATION W/FOREIGN OBJECT">Sexual Penetration with Foreign Object</option>
          <option value="SHOPLIFTING - ATTEMPT">Shoplifting - Attempt</option>
          <option value="SHOPLIFTING - PETTY THEFT ($950 & UNDER)">Shoplifting - Petty Theft ($950 & under)</option>
          <option value="SHOPLIFTING-GRAND THEFT ($950.01 & OVER)">Shoplifting-Grand Theft ($950.01 & over)</option>
          <option value="SHOTS FIRED AT INHABITED DWELLING">Shots Fired at Inhabited Dwelling</option>
          <option value="SHOTS FIRED AT MOVING VEHICLE, TRAIN OR AIRCRAFT">Shots Fired at Moving Vehicle, Train or Aircraft</option>
          <option value="SODOMY/SEXUAL CONTACT B/W PENIS OF ONE PERS TO ANUS OTH">Sodomy/Sexual Contact Between Penis of One Person to Anus of Other</option>
          <option value="STALKING">Stalking</option>
          <option value="TELEPHONE PROPERTY - DAMAGE">Telephone Property - Damage</option>
          <option value="THEFT FROM MOTOR VEHICLE - ATTEMPT">Theft from Motor Vehicle - Attempt</option>
          <option value="THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)">Theft from Motor Vehicle - Grand ($950.01 and over)</option>
          <option value="THEFT FROM MOTOR VEHICLE - PETTY ($950 & UNDER)">Theft from Motor Vehicle - Petty ($950 & under)</option>
          <option value="THEFT FROM PERSON - ATTEMPT">Theft from Person - Attempt</option>
          <option value="THEFT OF IDENTITY">Theft of Identity</option>
          <option value="THEFT PLAIN - ATTEMPT">Theft Plain - Attempt</option>
          <option value="THEFT PLAIN - PETTY ($950 & UNDER)">Theft Plain - Petty ($950 & under)</option>
          <option value="THEFT, COIN MACHINE - ATTEMPT">Theft, Coin Machine - Attempt</option>
          <option value="THEFT, COIN MACHINE - GRAND ($950.01 & OVER)">Theft, Coin Machine - Grand ($950.01 & over)</option>
          <option value="THEFT, COIN MACHINE - PETTY ($950 & UNDER)">Theft, Coin Machine - Petty ($950 & under)</option>
          <option value="THEFT, PERSON">Theft, Person</option>
          <option value="THEFT-GRAND ($950.01 & OVER)EXCPT,GUNS,FOWL,LIVESTK,PROD">Theft-Grand ($950.01 & over) except, guns, fowl, livestock, prod</option>
          <option value="THREATENING PHONE CALLS/LETTERS">Threatening Phone Calls/Letters</option>
          <option value="THROWING OBJECT AT MOVING VEHICLE">Throwing Object at Moving Vehicle</option>
          <option value="TILL TAP - GRAND THEFT ($950.01 & OVER)">Till Tap - Grand Theft ($950.01 & over)</option>
          <option value="TILL TAP - PETTY ($950 & UNDER)">Till Tap - Petty ($950 & under)</option>
          <option value="TRAIN WRECKING">Train Wrecking</option>
          <option value="TRESPASSING">Trespassing</option>
          <option value="UNAUTHORIZED COMPUTER ACCESS">Unauthorized Computer Access</option>
          <option value="VANDALISM - FELONY ($400 & OVER, ALL CHURCH VANDALISMS)">Vandalism - Felony ($400 & over, all church vandalisms)</option>
          <option value="VANDALISM - MISDEAMEANOR ($399 OR UNDER)">Vandalism - Misdemeanor ($399 or under)</option>
          <option value="VEHICLE - ATTEMPT STOLEN">Vehicle - Attempt Stolen</option>
          <option value="VEHICLE - STOLEN">Vehicle - Stolen</option>
          <option value="VEHICLE, STOLEN - OTHER (MOTORIZED SCOOTERS, BIKES, ETC)">Vehicle, Stolen - Other (Motorized Scooters, Bikes, etc)</option>
          <option value="VIOLATION OF COURT ORDER">Violation of Court Order</option>
          <option value="VIOLATION OF RESTRAINING ORDER">Violation of Restraining Order</option>
          <option value="VIOLATION OF TEMPORARY RESTRAINING ORDER">Violation of Temporary Restraining Order</option>
          <option value="WEAPONS POSSESSION/BOMBING">Weapons Possession/Bombing</option>
        </select>
      </div>
      <div>
        <MapContainer center={[34.0522, -118.2437]} zoom={12} style={{ height: '600px', width: '900px' }}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            id="mapbox/streets-v11"
            accessToken="pk.eyJ1IjoibXlzdGljMjMiLCJhIjoiY2x2aG11OTFwMTdvNTJpb3ppdGgyenRnNCJ9.3tmaMtmoEHwZtX_mEztE8Q"
          />
          {crimeLocations.map((crimeLocation, index) => (
            <Marker
              key={index}
              position={[parseFloat(crimeLocation.LAT), parseFloat(crimeLocation.LON)]}
              icon={redIcon} 
            >
              <Popup>
                <div>
                  <h3>Crime Location</h3>
                  <p>Latitude: {crimeLocation.LAT}</p>
                  <p>Longitude: {crimeLocation.LON}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default CrimeMap;
