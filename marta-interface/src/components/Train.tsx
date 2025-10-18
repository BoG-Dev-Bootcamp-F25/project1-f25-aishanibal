type Props = {
    TRAIN_ID: any;
    DESTINATION?: string;
    DIRECTION?: string;
    STATION?: string;
    LINE?: string;
    WAITING_TIME?: string;
    DELAY?: string; // "T0S" => on time
  };

export default function Train(props: Props) {
    const onTime = props.DELAY === "T0S";

    return(
        <div className="bg-gray-300 border border-gray-200 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">

                    <h3 className="text-lg font-semibold text-gray-800">{props.TRAIN_ID}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    onTime ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {onTime ? "On Time" : "Delayed"}
                </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <span className="text-gray-500">Destination:</span>
                    <p className="font-medium text-gray-800">{props.DESTINATION}</p>
                </div>
                <div>
                    <span className="text-gray-500">Direction:</span>
                    <p className="font-medium text-gray-800">{props.DIRECTION}</p>
                </div>
                <div>
                    <span className="text-gray-500">Station:</span>
                    <p className="font-medium text-gray-800">{props.STATION}</p>
                </div>
                <div>
                    <span className="text-gray-500">Waiting Time:</span>
                    <p className="font-medium text-gray-800">{props.WAITING_TIME}</p>
                </div>
            </div>
        </div>
    )
}