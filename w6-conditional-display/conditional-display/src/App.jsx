import Header from './components/header'
import Scores from './components/scores'
import { HTML_RESULTS,JAVA_RESULTS,PYTHON_RESULTS,ENGLISH_RESULTS } from './data';


function App() {
  return (
    <>
      <Header batch_name="HEE HEE" />
      <main className="scores-container">
        <Scores courseName="HTML" data={HTML_RESULTS}/>
        <Scores courseName="PYTHON" data={PYTHON_RESULTS}/>
        <Scores courseName="JAVA" data={JAVA_RESULTS}/>
        <Scores courseName="ENGLISH" data={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
