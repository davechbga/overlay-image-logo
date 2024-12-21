import "./App.css";
import Form from "./components/Form";
import Canvas from "./components/Canvas";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [overlayOptions, setOverlayOptions] = useState(null);

  return (
    <div className="App">
      <Header />
      <main className="container my-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Form onOverlay={setOverlayOptions} />
          </div>
          <div className="col-lg-8">
            {overlayOptions && <Canvas {...overlayOptions} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
