import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import DeleteTask from "./Components/DeleteTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/delete/:id" element={<DeleteTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
