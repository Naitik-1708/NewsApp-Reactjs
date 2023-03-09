import './App.css'
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      {/* {india} */}
        <Switch>
        <Route exact path="/"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/INDIA"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/INDIA/business"><News setProgress={setProgress}   key="business" pageSize={pageSize} country="in" apiKey={apiKey} category="business"/></Route> 
          <Route exact path="/INDIA/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey}  country="in" category="entertainment"/></Route> 
          <Route exact path="/INDIA/health"><News setProgress={setProgress}   key="health" pageSize={pageSize} country="in"  apiKey={apiKey} category="health"/></Route> 
          <Route exact path="/INDIA/science"><News setProgress={setProgress}   key="science" pageSize={pageSize} country="in" apiKey={apiKey} category="science"/></Route> 
          <Route exact path="/INDIA/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" apiKey={apiKey} category="sports"/></Route> 
          <Route exact path="/INDIA/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" apiKey={apiKey} category="technology"/></Route> 
        </Switch>
      {/* {USA} */}
        <Switch>
          <Route exact path="/USA"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="us" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/USA/business"><News setProgress={setProgress}   key="business" pageSize={pageSize} country="us" apiKey={apiKey} category="business"/></Route> 
          <Route exact path="/USA/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey}  country="us" category="entertainment"/></Route> 
          <Route exact path="/USA/health"><News setProgress={setProgress}   key="health" pageSize={pageSize} country="us"  apiKey={apiKey} category="health"/></Route> 
          <Route exact path="/USA/science"><News setProgress={setProgress}   key="science" pageSize={pageSize} country="us" apiKey={apiKey} category="science"/></Route> 
          <Route exact path="/USA/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" apiKey={apiKey} category="sports"/></Route> 
          <Route exact path="/USA/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" apiKey={apiKey} category="technology"/></Route> 
        </Switch>
      {/* {NEWZELAND} */}
        <Switch>
          <Route exact path="/NEWZELAND"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="nz" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/NEWZELAND/business"><News setProgress={setProgress}   key="business" pageSize={pageSize} country="nz" apiKey={apiKey} category="business"/></Route> 
          <Route exact path="/NEWZELAND/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey}  country="nz" category="entertainment"/></Route> 
          <Route exact path="/NEWZELAND/health"><News setProgress={setProgress}   key="health" pageSize={pageSize} country="nz"  apiKey={apiKey} category="health"/></Route> 
          <Route exact path="/NEWZELAND/science"><News setProgress={setProgress}   key="science" pageSize={pageSize} country="nz" apiKey={apiKey} category="science"/></Route> 
          <Route exact path="/NEWZELAND/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="nz" apiKey={apiKey} category="sports"/></Route> 
          <Route exact path="/NEWZELAND/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="nz" apiKey={apiKey} category="technology"/></Route> 
        </Switch>
      {/* {CANADA} */}
        <Switch>
          <Route exact path="/CANADA"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="ca" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/CANADA/business"><News setProgress={setProgress}   key="business" pageSize={pageSize} country="ca" apiKey={apiKey} category="business"/></Route> 
          <Route exact path="/CANADA/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey}  country="ca" category="entertainment"/></Route> 
          <Route exact path="/CANADA/health"><News setProgress={setProgress}   key="health" pageSize={pageSize} country="ca"  apiKey={apiKey} category="health"/></Route> 
          <Route exact path="/CANADA/science"><News setProgress={setProgress}   key="science" pageSize={pageSize} country="ca" apiKey={apiKey} category="science"/></Route> 
          <Route exact path="/CANADA/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="ca" apiKey={apiKey} category="sports"/></Route> 
          <Route exact path="/CANADA/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="ca" apiKey={apiKey} category="technology"/></Route> 
        </Switch>
      {/* {india} */}
        <Switch>
          <Route exact path="/SouthAfrica"><News setProgress={setProgress}   key="general" pageSize={pageSize} country="za" apiKey={apiKey} category="general"/></Route> 
          <Route exact path="/SouthAfrica/business"><News setProgress={setProgress}   key="business" pageSize={pageSize} country="za" apiKey={apiKey} category="business"/></Route> 
          <Route exact path="/SouthAfrica/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey}  country="za" category="entertainment"/></Route> 
          <Route exact path="/SouthAfrica/health"><News setProgress={setProgress}   key="health" pageSize={pageSize} country="za"  apiKey={apiKey} category="health"/></Route> 
          <Route exact path="/SouthAfrica/science"><News setProgress={setProgress}   key="science" pageSize={pageSize} country="za" apiKey={apiKey} category="science"/></Route> 
          <Route exact path="/SouthAfrica/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="za" apiKey={apiKey} category="sports"/></Route> 
          <Route exact path="/SouthAfrica/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="za" apiKey={apiKey} category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;