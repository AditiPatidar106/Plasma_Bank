import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import How_it_works from "./pages/How_it_works";
import Doubts from "./pages/Doubts";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import DonorForm1 from "./pages/donorform1";
import DoneeForm1 from "./pages/doneeform1";

function App() {
  return (
    <div>
      <Router>
        <Header />
        
         <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/DonorForm1">
               <DonorForm1 />
            </Route>

            <Route exact path="/DoneeForm1">
              <DoneeForm1 />
            </Route>
             <Route exact path="/How_it_works" component={How_it_works} />

            <Route exact path="/Doubt" component={Doubts} />
          </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
