// App.js
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Query1 from "./components/Query_1/Query_1";
import Query2 from "./components/Query_2/Query_2";
import Query3 from "./components/Query_3/Query_3";
import Query5 from "./components/Query_5/Query_5";
import Query6 from "./components/Query_6/Query_6";
import Numero from "./components/Numero/numero";
import AreaTotal from "./components/AreaTotal/Area_Total";
import Prop from "./components/Prop/Prop";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Prop />
      </Card>
      <Card>
        <Numero />
      </Card>
      <Card header="Total distribution of Areas in Los Angeles" description="
        Analysis of the Total Distribution of Areas in Los Angeles.
        ">
          <AreaTotal/>
        </Card>
      <main>
        <Card header="Crimes Mapping by Area" description="
        This plot shows a mapping of the crimes by selected area
        ">
          <Map/>
        </Card>
        <Card header="Victims by Descent and Area" description="
        This graph shows the number of victims by Descent by area.
        ">
          <Query5/>
        </Card>
        
         {/*   Querys de sexos */}
        <Card header="Sex Victims By Date" description="
        This graph shows the gender distribution of crime victims on a specific date.
        ">
          <Query2/>
        </Card>
        <Card header="Crimes by Gender and Weapon Used" description="
        This graph shows the weapon used in the commission of a crime.
        ">
          <Query6/>
        </Card>
        <Card header="Crimes by Gender and Weapon Used" description="
        User interface that displays the number of crimes and their corresponding hours in a bar graph.
        ">
          <Query3/>
        </Card>
        <Card header="Crime Map showing Incidents" description="
        A crime mapping system that uses crime data, latitude and longitude coordinates, to visualize the location of incidents on a map.
        ">
          <Query1/>
        </Card>
      </main>

      <Footer />
    </>
  );
}
export default App;
