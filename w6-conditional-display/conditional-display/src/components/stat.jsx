export default function Stat({dataSet}){
    let min = Infinity;
    let total = 0;
    let max = 0;
    let i = 0;
    for (const item of dataSet){
        total += item.score;
        i+=1;
        if(item.score < min){
            min = item.score;
        }
        if(item.score > max){
            max = item.score;
        }
    }
    console.log(min,max,total);
    return (
    <>
    <div className="stat-con">
        <div className="stat-items">
            <p>Average</p>
            <p> {(total/i).toFixed(2)} </p>
        </div>
        <div className="stat-items">
            <p>Minimun</p>
            <p> {min} </p>
        </div>
        <div className="stat-items">
            <p>Maximun</p>
            <p> {max} </p>
        </div>
    </div>
    </>)
}

