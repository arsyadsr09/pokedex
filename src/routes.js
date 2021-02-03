import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Layouts from "./layouts"

import Home from "./pages/Home"
import Detail from "./pages/Detail"

export const Routes = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} />
    </Layouts>
  </BrowserRouter>
)
