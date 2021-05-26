// import './App.css';
import Profile from './profile/Profile';
import HandleName from './profile/HandleName';
import image from './a.jpg'
function App() {
  const fullName="Nom et prénom: Ghabi Karim"
  const Bio="Bio: Connaissance approfondie des technologies de développement embarqué et de développement informatique."
  const profession=" Profession: Developpeur Web"
  const alertMyInput = name => alert(name);
  return (
    <div>
      <header>
      <Profile><img src={image} alt="er" width="200px" height="200px"></img></Profile>
      <Profile fullName={fullName} Bio={Bio} profession={profession} />
      <HandleName  alertMyInput={alertMyInput} />
      </header>
    </div>
  );
}
export default App;
