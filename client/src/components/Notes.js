import React from 'react'
import Header from "./notes/Nav"
import Home from "./notes/Home"
import CreateNote from "./notes/CreateNote"
import EditNote from "./notes/EditNote"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function Notes({ setIsLogin }) {
  return (
    <Router>
      <div className="notes-page">
        <Header setIsLogin={setIsLogin} />
        <section>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/create" Component={CreateNote} exact />
            <Route path="/edit/:id" Component={EditNote} exact />
          </Routes>
        </section>
        
      </div>
    </Router>
  )
}

