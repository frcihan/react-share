import Navbar from "./components/Navbar";
import Signup from "./pages/Signup"

function App() {
  {
    console.log(process.env)
  }
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
