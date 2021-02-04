import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonTypes } from "../../modules/types/action"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFilter,
  faTimes,
  faCheck,
  faUndo,
} from "@fortawesome/free-solid-svg-icons"

import {
  FilterButton,
  InnerFilterButton,
  InnerSubmitButton,
  InnerResetButton,
  FilterIcon,
  FilterCanvas,
  FilterTypeStyled,
  SubmitIcon,
  ResetIcon,
} from "./styled"
import { getPokemonByType } from "../../modules/types/action"
import { getPokemonList, resetPokemonList } from "../../modules/pokemon/action"

export default () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState("")

  const onClose = () => {
    setFilter("")
    setShow(!show)
  }

  useEffect(() => {
    dispatch(getPokemonTypes())
  }, [])

  const onSubmit = () => {
    dispatch(getPokemonByType(filter))
    setShow(false)
  }

  const onReset = () => {
    dispatch(resetPokemonList())
    dispatch(getPokemonList())
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
        <InnerResetButton onClick={onReset} className="inner-reset">
          <ResetIcon className="reset-icon" icon={faUndo} />
        </InnerResetButton>
      </FilterButton>
      <FilterCanvas className={show ? "active" : ""}>
        {state.types.data && (
          <FilterTypeStyled>
            {state.types.data.map((node, i) => (
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
