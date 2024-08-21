import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components'
import { Home, Whoweare, Whowehelp, Resources, Contact } from './containers'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="whoweare" element={<Whoweare />} />
          <Route path="whowehelp" element={<Whowehelp />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
