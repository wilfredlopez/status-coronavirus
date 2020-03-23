import React, { createContext, useContext, useMemo, useState } from "react"
import { CountriesApiRes, GlobalApiRes } from "../interfaces/ApiResponse"

export interface CountriesContextType {
  globalData: GlobalApiRes | null
  countries: CountriesApiRes
}

const initialContext: CountriesContextType = {
  globalData: null,
  countries: [],
}

const CountriesContext = createContext(initialContext)

const CountriesContextProvider: React.FC = props => {
  const [globalData, setGlobalData] = useState<GlobalApiRes | null>(
    initialContext.globalData,
  )
  const [countries, setCountries] = useState<CountriesApiRes>(
    initialContext.countries,
  )

  const memocountries = useMemo(
    () => ({
      countries,
      setCountries,
    }),
    [countries, setCountries],
  )

  const memoGlobalData = useMemo(
    () => ({
      globalData: globalData,
      setGlobalData: setGlobalData,
    }),
    [globalData, setGlobalData],
  )

  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => {
        return res.json()
      })
      .then(data => {
        memoGlobalData.setGlobalData(data)
      })
      .catch(e => {
        console.log(e)
      })
    //eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then(res => {
        return res.json()
      })
      .then(data => {
        memocountries.setCountries(data)
      })
      .catch(e => {
        console.log(e)
      })
    //eslint-disable-next-line
  }, [])

  return (
    <CountriesContext.Provider
      value={{
        globalData: memoGlobalData.globalData,
        countries: countries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  )
}

const useCountriesContext = () => {
  const { countries, globalData } = useContext(CountriesContext)

  return {
    countries,
    globalData,
  }
}

export { CountriesContext, CountriesContextProvider, useCountriesContext }
