import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Layouts from "./layouts"

import Home from "./pages/Home"

export const Routes = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" exact component={Home} />
    </Layouts>
  </BrowserRouter>
)
