
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
// import { Routes ,Route,Router } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route path="/:searchTerm">
            {/* <h1>SearchPage</h1> */}
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/" >
            <div className="app__page" >
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
