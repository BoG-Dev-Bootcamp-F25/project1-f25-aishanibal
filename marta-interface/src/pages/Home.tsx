
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-gray-400 mb-12">MARTA Train System</h1>
            
            <div className="flex justify-center space-x-4 mb-12">
                <Link to="/lines" state={{ color: 'gold' }}>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Gold Line</button>
                </Link>
                <Link to="/lines" state={{ color: 'red' }}>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Red Line</button>
                </Link>
                <Link to="/lines" state={{ color: 'blue' }}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Blue Line</button>
                </Link>
                <Link to="/lines" state={{ color: 'green' }}>
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Green Line</button>
                </Link>
            </div>

            <div className="flex justify-center">
                <img src="/src/assets/marta.jpg" alt="MARTA" className="w-180 h-auto object-contain" />
            </div>
        </div>
    )
}