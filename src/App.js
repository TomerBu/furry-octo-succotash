import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <div className='my-grid'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;