import Navbar from "./Navbar";
import Mountains from "./Mountainss";

function App() {
  return (
    <div>
      <Navbar />
      <Mountains />

      <div style={{ height: "200vh", padding: "20px", background: "#f5f5f5" }}>
        <h2>Scroll down and up to see the navbar effect!</h2>
        <p>Keep adding more content here...</p>
      </div>
    </div>
  );
}

export default App;