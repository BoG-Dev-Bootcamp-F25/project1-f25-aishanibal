type Props = {
    color: string | null;
    data?: any;
    setColor: (color: string) => void;
    stationList: string[] | null
    setStation: (station: string) => void;
    bound: number
    setBound: (bound: number) => void;
    arrival: string | null
    setArrival: (arrival: string) => void;
  }

export default function NavBar({color, data, setColor, stationList, setStation, bound, setBound, arrival, setArrival}: Props) {
    const value1 = (color === 'gold' || color === 'red' ? "Northbound" : "Eastbound")
    const value2 = (color === 'gold' || color === 'red' ? "Southbound" : "Westbound")
    return(
        <div>
        <div id="nav-container" className="relative z-30">
            <div className="w-full p-4 bg-gray-500 flex justify-center space-x-4">
                <button className='top px-4 py-2 bg-yellow-500 text-white rounded' onClick={() => setColor('gold')}>Gold</button>
                <button className='top px-4 py-2 bg-red-500 text-white rounded' onClick={() => setColor('red')}>Red</button>
                <button className='top px-4 py-2 bg-blue-600 text-white rounded' onClick={() => setColor('blue')}>Blue</button>
                <button className='top px-4 py-2 bg-green-500 text-white rounded' onClick={() => setColor('green')}>Green</button>
            </div>
            
            <div className="w-full p-4 bg-gray-400 flex justify-center space-x-4">
                <button className='top2 px-4 py-2 bg-gray-600 text-white rounded' onClick={() => setBound(bound === 1 ? 0 : 1)}>
                    {bound === 1 ? "✓ " + value1 : value1}
                </button>
                <button className='top2 px-4 py-2 bg-gray-600 text-white rounded' onClick={() => setBound(bound === 2 ? 0 : 2)}>
                    {bound === 2 ? "✓ " + value2 : value2}
                </button>
                <button className='top2 px-4 py-2 bg-gray-600 text-white rounded' onClick={() => setArrival(arrival === 'arriving' ? 'all' : 'arriving')}>
                    {arrival === 'arriving' ? "✓ Arriving" : "Arriving"}
                </button>
                <button className='top2 px-4 py-2 bg-gray-600 text-white rounded' onClick={() => setArrival(arrival === 'scheduled' ? 'all' : 'scheduled')}>
                    {arrival === 'scheduled' ? "✓ Scheduled" : "Scheduled"}
                </button>
            </div>
        </div>

        <div className="fixed left-0 w-64 bg-black p-4 overflow-y-auto z-20" style={{top: '170px', height: 'calc(100vh - 170px)'}}>
            <h3 className="text-gray-200 font-bold mb-4">Stations</h3>
            <button className='side block w-full mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={() => setStation('all')}>All Stations</button>
            {stationList && stationList.map(s => (
                <button className='side block w-full mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600' key={s} onClick={() => setStation(s)}>{s}</button>
            ))}
        </div>


    </div>
    );
    


}