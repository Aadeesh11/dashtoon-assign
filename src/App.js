import { useEffect, useRef, useState } from 'react';
import './App.css';
import ComicStrip from './components/ComicStrip';
// import Comics from './components/Comics';

function App() {  

  const refInfo = useRef(null)
  const [showInfo, setShowInfo] = useState(true)

  const handleClick = () => {
    refInfo.current.style.display = 'none'
  }

  useEffect(() => {
    if(showInfo) {
      refInfo.current.style.display = 'block'
    } else {
      refInfo.current.style.display = 'none'
    }
  
    return () => {
    }
  }, [showInfo])
  

  return (
    <div className="App">
      <div id='information' ref={refInfo} >
        <button id='infoClose' onClick={() => setShowInfo(!showInfo)}></button>
        <ul>
          <li>In Nav section there are two button</li>
          <li>Edit or Read button to toggle between edit and read mode</li>
          <li>In read mode you can zoom image by hovering over it</li>
          <li>In Edit mode you you can make changes in the available 10 panels</li>
          <li>There are 10 image boxes for each panel</li>
          <li>In each image there is + (add) button to open prompt and load image from api</li>
          <li>when you open propmt you also get a option to edit image (speech bubble functionality) in the to p right corner</li>
          <li>press arrow button in bottom right to load image from api</li>
          <li>once the request is sent a loading GIF appears</li>
          <li>And once the image is loaded image is shown in place of loading GIF</li>
          <li>Using edit mode you can add speech bubble as stated earlier</li>
        </ul>
      </div>
      {/* <Comics /> */}
      <ComicStrip setShowInfo={setShowInfo} />
    </div>
  );
}

export default App;
