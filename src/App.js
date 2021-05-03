import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Student from './Student';

function App() {
  const sayHello = (name) => {
    console.log(`Hello, I'm ${name}`);
  }
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />

      <div className="students-container">
        <Student sayHello={sayHello} studentAge={Math.floor(Math.random() * 30)} studentName="Laia" studentDescription="Soy Laia" studentImage="https://picsum.photos/seed/picsum/200/300" />
        <Student sayHello={sayHello} studentAge={16} studentName="Jesi" studentDescription="Soy Jesi" surveyDone={true}/>
        <Student sayHello={sayHello} studentAge={Math.floor(Math.random() * 30)} studentName="Joao" studentDescription="Soy Joao" />
      </div>
    </div>
  );
}

export default App;
