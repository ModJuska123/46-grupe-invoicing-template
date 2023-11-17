import "./App.css";
import Header from "./Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const handleNameChange = () => {
    const name = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() *3);
    return name[int];
  }

   return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
     
    </div>
  )
}

export default App;
