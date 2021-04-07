import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faSpinner, faArrowDown } from "@fortawesome/free-solid-svg-icons"

import { SpinnerWrap } from "./styles"

export const Bell = (props) => <FontAwesomeIcon icon={faBell} className={`icon ${props.customClass}`} />

export const Spinner = (props) => (
  <SpinnerWrap>
    <FontAwesomeIcon icon={faSpinner} className={`icon ${props.customClass}`} size={props.size} spin />
  </SpinnerWrap>
)

export const ArrowDown = (props) => <FontAwesomeIcon icon={faArrowDown} className={`${props.customClass}`} />
