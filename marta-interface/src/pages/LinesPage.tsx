import { useState, useEffect} from 'react';
import NavBar from '../components/Navbar';
import TrainList from '../components/TrainList';
import Stations from '../components/Stations';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';


export default function LinesPage() {
  const location = useLocation();
  const routeColor = location.state?.color;
  
  // initialize some currColor state
  const [color, setColor] = useState<string | null>(routeColor || null);
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [stationList, setStationList] = useState<string[] | null>(null);
  const [station, setStation] = useState('all');
  const [bound, setBound] = useState(0); //0 = both, 1 = N/E, 2 = S/W
  const [arrival, setArrival] = useState('all');

  useEffect(() => {
    if (!color) {
      return;
    }
    setLoading(true)
    fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${color}`)
    .then(res => res.json())
    .then((res) => {
        const unique = new Map();
        const stations = new Set<string>();
        res.forEach((t: any) => {
          const key = `${t.TRAIN_ID}-${t.STATION}`;
          if (!unique.has(key)) {
          unique.set(key, t);
          }
          stations.add(t.STATION);
        })
        setStationList(Array.from(stations));
        return Array.from(unique.values());
      })
    .then(processedData => setData(processedData))
    .catch(error => {
      console.error('arrivals error:', error)
    })
    .finally(() => setLoading(false))
    setData(null) 
  },[color])

  // useEffect(() => {
  //   if (!color) {
  //     return;
  //   }
  //   fetch(`https://midsem-bootcamp-api.onrender.com/stations/${color}`)
  //   .then(res => res.json())
  //   .then(stationsList => setStationList(stationsList))
  //   .catch(error => {
  //     console.error('station error ', error)
  //   })
  // }, [color])

  return (
    <div className = "w-full">
      <NavBar color={color} data={data} setColor ={setColor} stationList={stationList} setStation = {setStation} bound = {bound} setBound = {setBound} arrival = {arrival} setArrival = {setArrival}/>
      {loading ? (
        <div className="ml-64 mt-0 p-6 pr-6 h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-600">Loading trains...</p>
          </div>
        </div>
      ) : (
        <TrainList color={color} data={data} station={station} bound={bound} arrival={arrival} />
      )}
    </div>
  );
}