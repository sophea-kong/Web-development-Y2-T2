import Stat from "./stat";


export default function Scores({courseName, data}){
    return (
        <>
        <div className="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) => (
                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td className={(item.score < 50) ? "warning" : "normal"}>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Stat dataSet={data}/>
        </div>
        </>
    )
}

