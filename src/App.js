import './App.css';
import Cake from './cake';
import Footer from './Footer';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

function App() {
  return (
    <div className='ot-container'>
      <Cake />
      <Ingredients />
      <Instructions />
      <Footer />
    </div>
  );
}

export default App;
