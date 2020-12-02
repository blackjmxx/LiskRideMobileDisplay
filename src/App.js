import './App.css';
import './devices.min.css'

function App() {
  return (
    <div className="App">
      <div style={{'marginTop':'3%'}}></div>
      <div class="marvel-device nexus5">
			<div class="top-bar"></div>
			<div class="sleep"></div>
			<div class="volume"></div>
			<div class="camera"></div>
			<div class="screen">
      <iframe
            title='liskride'
            src={'https://lisk-ride.com/'}
            width='320'
            height='570'
            frameBorder='0'
            scrolling='no' />
      </div>
		</div>
    </div>
  );
}

export default App;
