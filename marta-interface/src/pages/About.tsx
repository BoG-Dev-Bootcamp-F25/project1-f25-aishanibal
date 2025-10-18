export default function About() {
    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-gray-400 mb-4">About</h1>
            
            <div className="max-w-6xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                    This MARTA Train System interface provides real-time information about train arrivals, 
                    schedules, and station details for the Metropolitan Atlanta Rapid Transit Authority. 
                    Users can select from four different train lines (Gold, Red, Blue, and Green) and 
                    filter trains by station, direction, and arrival status to find the information 
                    they need quickly and efficiently.
                </p>
            </div>

            <div className="flex justify-center mt-8">
                <img src="/src/assets/marta.jpg" alt="MARTA" className="w-180 h-auto object-contain" />
            </div>
        </div>
    )
}