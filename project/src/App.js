// import './App.css';
import Profile from './profile/Profile';
import HandleName from './profile/HandleName';
import image from './a.jpg'
function App() {
  const fullName=" Ghabi Karim"
  const Bio=" Connaissance approfondie des technologies de développement embarqué et de développement informatique."
  const profession=" Developpeur Web"
  const alertMyInput = name => alert(name);
  return (
    <div>
    
      <Profile  fullName={fullName} Bio={Bio} profession={profession}   ><img src={image} alt="er" width="200px" height="200px"></img></Profile>
      
      <HandleName  alertMyInput={alertMyInput}  fullName={fullName}/>
  
    </div>
  );
}
export default App;
