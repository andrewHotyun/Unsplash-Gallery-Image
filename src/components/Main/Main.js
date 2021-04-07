import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import Toolbar from "../Toolbar/Toolbar"

import Routes from "../Routes/Routes"

const Main = ({ menus, session }) => {
  return (
    <>
      <Toolbar />
      <Routes menus={menus} session={session} />
    </>
  )
}

const mapStateToProps = (state) => ({})

export default withRouter(connect(mapStateToProps)(Main))
