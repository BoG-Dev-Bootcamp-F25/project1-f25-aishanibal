import { useState, useEffect } from 'react'
import Train from '../components/Train'

type Props = {
    color: string | null;
    data?: any;
    station: string;
    bound: number;
    arrival: string;
}

export default function TrainList({color, data, station, bound, arrival}: Props) {
    if (!color || !data) {
        return (
            <p>pick a line</p>
        );
    }
    console.log(data)
    const filtered = data.filter((t: any) => {
        const stationMatch = (station === 'all') || t.STATION.toUpperCase() === station.toUpperCase();
        const boundMatch = (bound === 0 || 
            (bound === 1 && (t.DIRECTION === 'N' || t.DIRECTION === 'E')) ||
            (bound === 2 && (t.DIRECTION === 'S' || t.DIRECTION === 'W')));
        const arrivalMatch = (arrival === 'all') || (arrival === 'arriving' ? parseInt(t.WAITING_TIME) <= 5 : parseInt(t.WAITING_TIME) > 5);
        return stationMatch && boundMatch && arrivalMatch;
    });

    
    return (
        <div className="ml-64 mt-0 p-6 pr-6 h-screen overflow-y-auto">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-400 mb-2">Train Schedule</h2>
                <p className="text-gray-500">Showing {filtered.length} trains</p>
            </div>
            <div className="space-y-4">
                {filtered.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No trains match your current filters</p>
                        <p className="text-gray-400 text-sm mt-2">Try adjusting your station or filter selections</p>
                    </div>
                ) : (
                    filtered.map((t: any) => (
                        <Train key={`${t.TRAIN_ID}-${t.STATION}`} {...t} />
                    ))
                )}
            </div>
        </div>
    );
}

