import './App.css';

function App() {
  const environment = process.env.REACT_APP_ENVIRONMENT;
  const gatewayIp = process.env.REACT_APP_GATEWAY_IP;

  const handleGetPhotos = () => {
    alert(`Getting photos from ${gatewayIp} in ${environment} environment`);
  };

  const handleGetMetadata = () => {
    alert(`Getting metadata from ${gatewayIp} in ${environment} environment`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Web App</h1>
        
        <div className="config-info">
          <h2>Configuration</h2>
          <p><strong>Environment:</strong> {environment}</p>
          <p><strong>Gateway IP:</strong> {gatewayIp}</p>
        </div>

        <div className="links-section">
          <h2>Actions</h2>
          <button onClick={handleGetPhotos} className="action-button">
            Get Photos
          </button>
          <button onClick={handleGetMetadata} className="action-button">
            Get Metadata
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
