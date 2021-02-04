import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"

import {
  FilterButton,
  InnerFilterButton,
  InnerSubmitButton,
  FilterIcon,
  FilterCanvas,
  FilterTypeStyled,
  SubmitIcon,
} from "./styled"
import { getPokemonByType } from "../../modules/types/action"

export default () => {
  const stateTypes = useSelector((state) => state.types)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState("")

  const onClose = () => {
    setFilter("")
    setShow(!show)
  }

  const onSubmit = () => {
    dispatch(getPokemonByType(filter))
    setShow(false)
  }

  return (
    <>
      <FilterButton className={show ? "active" : ""}>
        <InnerFilterButton onClick={onClose} className="inner-filter">
          {!show ? (
            <FilterIcon className="filter-icon" icon={faFilter} />
          ) : (
            <FilterIcon className="filter-icon" icon={faTimes} />
          )}
        </InnerFilterButton>
        <InnerSubmitButton onClick={onSubmit} className="inner-submit">
          <SubmitIcon className="submit-icon" icon={faCheck} />
        </InnerSubmitButton>
      </FilterButton>
      <FilterCanvas className={show ? "active" : ""}>
        {stateTypes.data && (
          <FilterTypeStyled>
            {stateTypes.data.map((node, i) => (
              <span
                key={i}
                onClick={() => setFilter(node.name)}
                className={`${node.name}`}
              >
                {node.name} &nbsp;
                {filter === node.name ? (
                  <FontAwesomeIcon size={5} icon={faCheck} />
                ) : (
                  <></>
                )}
              </span>
            ))}
          </FilterTypeStyled>
        )}
      </FilterCanvas>
    </>
  )
}
