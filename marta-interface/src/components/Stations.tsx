type Props = {
    color: string | null; 
    data?: any;
    setData: (data: any) => void;
  }
export default function Stations({color, data, setData}: Props) {
    if (!color || !data) {
        return (
            <p>choose a line</p>
        )
    }
    // filtered = data.filter(t => )
    return(
        <div>



    </div>
    );
    


}