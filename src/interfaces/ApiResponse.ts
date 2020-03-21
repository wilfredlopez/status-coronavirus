export interface GlobalApiRes {
  cases: number
  deaths: number
  recovered: number
}

export type CountriesApiRes = Array<Country>

export interface Country {
  country: string
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  active: number
  critical: number
  casesPerOneMillion: number
}
