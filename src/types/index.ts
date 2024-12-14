export type $TSFixMe = any

export type User = {
  city?: string
  displayName: import('firebase/auth').User['displayName']
  email: import('firebase/auth').User['email']
  phoneNumber: import('firebase/auth').User['phoneNumber']
  photoURL: import('firebase/auth').User['photoURL']
  uid: import('firebase/auth').User['uid']
  pokemons: {
    name: PokemonType['name']
    id: PokemonType['id']
    image: PokemonType['sprites']['front_default']
  }[]
}
export interface UserDocument extends User {}

export interface PokemonDocument {
  uid: User['uid']
  name: PokemonType['name']
  id: PokemonType['id']
  displayName?: string
}

export type PageType = {
  pageParams: IPageParams[]
  pages: LastPageType[]
}

export interface IPageParams {
  0: string | undefined
}

export type LastPageType = {
  config: ILastConfig
  data: ILastData
  headers: IHeadersRes
  request: IRequest
  status: number
  statusText: string
}

export interface ILastData {
  count: number
  next: string | null
  previous: string | null
  results: ILastResults[]
}

export interface ILastResults {
  name: string
  url: string
}

export interface ILastConfig {
  adapter: IAdapter[]
  baseURL: string
  data: string | undefined
  env: IEnd
  headers: IHeaders
  maxBodyLength: number
  maxContentLength: number
  method: string
  params: IParams
  timeout: number
  transformRequest: void[]
  transformResponse: void[]
  transitional: ITransitional
  url: string
  validateStatus: void
  xsrfCookieName: string
  xsrfHeaderName: string
}

export interface IParams {
  limit: number
  offset: number
}

export type ResultsType = {
  data: IData
  dataUpdatedAt: number
  error: string | null
  errorUpdateCount: number
  errorUpdatedAt: number
  failureCount: number
  isError: boolean
  isFetched: boolean
  isFetchedAfterMount: boolean
  isFetching: boolean
  isIdle: boolean
  isLoading: boolean
  isLoadingError: boolean
  isPlaceholderData: boolean
  isPreviousData: boolean
  isRefetchError: boolean
  isRefetching: boolean
  isStale: boolean
  isSuccess: boolean
  refetch: void
  remove: void
  status: string
}

export interface IData {
  config: IConfig
  data: PokemonType
  headers: IHeadersRes
  request: IRequest
  status: number
  statusText: string
}

export interface IRequest {
  onabort: void
  onerror: void
  onload: string | null
  onloadend: void
  onloadstart: string | null
  onprogress: string | null
  onreadystatechange: string | null
  ontimeout: void
  readyState: number
  response: string
  responseText: string
  responseType: string
  responseURL: string
  responseXML: string | null
  status: number
  statusText: string
  timeout: number
  upload: IUpload
  withCredentials: boolean
}

export interface IUpload {
  onabort: string | null
  onerror: string | null
  onload: string | null
  onloadend: string | null
  onloadstart: string | null
  onprogress: string | null
  ontimeout: string | null
}

export interface IHeadersRes {
  'cache-control': string
  'content-length': string
  'content-type': string
  clear: void
  concat: void
  constructor: void
  delete: void
  get: void
  getAccept: void
  getAcceptEncoding: void
  getAuthorization: void
  getContentLength: void
  getContentType: void
  getUserAgent: void
  has: void
  hasAccept: void
  hasAcceptEncoding: void
  hasAuthorization: void
  hasContentLength: void
  hasContentType: void
  hasUserAgent: void
  normalize: void
  set: void
  setAccept: void
  setAcceptEncoding: void
  setAuthorization: void
  setContentLength: void
  setContentType: void
  setUserAgent: void
  toJSON: void
  toString: void
  Symbol: void
}

export interface IConfig {
  adapter: IAdapter[]
  baseURL: string
  data: string | undefined
  env: IEnd
  headers: IHeaders
  maxBodyLength: number
  maxContentLength: number
  method: string
  timeout: number
  transformRequest: void[]
  transformResponse: void[]
  transitional: ITransitional
  url: string
  validateStatus: void
  xsrfCookieName: string
  xsrfHeaderName: string
}

export interface ITransitional {
  larifyTimeoutError: boolean
  forcedJSONParsing: boolean
  silentJSONParsing: boolean
}

export interface IHeaders {
  Accept: string
  'Content-Type': undefined
  clear: void
  concat: void
  constructor: void
  delete: void
  get: void
  getAccept: void
  getAcceptEncoding: void
  getAuthorization: void
  getContentLength: void
  getContentType: void
  getUserAgent: void
  has: void
  hasAccept: void
  hasAcceptEncoding: void
  hasAuthorization: void
  hasContentLength: void
  hasContentType: void
  hasUserAgent: void
  normalize: void
  set: void
  setAccept: void
  setAcceptEncoding: void
  setAuthorization: void
  setContentLength: void
  setContentType: void
  setUserAgent: void
  toJSON: void
  toString: void
  Symbol: void
}

export interface IAdapter {
  0: string
  1: string
  2: string
}

export interface IEnd {
  Blob: void
  FormData: void
}

export type PokemonType = {
  abilities: IAbilities[]
  base_experience: number
  cries: ICries
  forms: IForms[]
  game_indices: IGameIndices[]
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: IMoves[]
  name: string
  order: number
  past_abilities: []
  past_types: []
  species: ISpecies
  sprites: ISprites
  stats: IStats[]
  types: ITypes[]
  weight: number
}

export interface IType {
  name: string
  url: string
}

export interface ITypes {
  slot: number
  type: IType
}

export interface IStat {
  name: string | null
  url: string | null
}

export interface IStats {
  base_stat: number
  effort: number
  stat: IStat
}

export interface ISprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: IOther
  versions: IVersions
}

export interface IRedBlue {
  back_default: string | null
  back_gray: string | null
  back_transparent: string | null
  front_default: string | null
  front_gray: string | null
  front_transparent: string | null
}

export interface IYellow {
  back_default: string | null
  back_gray: string | null
  back_transparent: string | null
  front_default: string | null
  front_gray: string | null
  front_transparent: string | null
}

export interface IGenerationI {
  'red-blue': IRedBlue
  yellow: IYellow
}

export interface ICrystal {
  back_default: string | null
  back_shiny: string | null
  back_shiny_transparent: string | null
  back_transparent: string | null
  front_default: string | null
  front_shiny: string | null
  front_shiny_transparent: string | null
  front_transparent: string | null
}

export interface IGold {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
  front_transparent: string | null
}

export interface ISilver {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
  front_transparent: string | null
}

export interface IGenerationII {
  crystal: ICrystal
  gold: IGold
  silver: ISilver
}

export interface IEmerald {
  front_default: string | null
  front_shiny: string | null
}

export interface IFireredLeafgreen {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

export interface IRubySapphire {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

export interface IGenerationIII {
  emerald: IEmerald
  'firered-leafgreen': IFireredLeafgreen
  'ruby-sapphire': IRubySapphire
}

export interface IDiamondPearl {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IHeartgoldSoulsilver {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IPlatinum {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IGenerationIV {
  'diamond-pearl': IDiamondPearl
  'heartgold-soulsilver': IHeartgoldSoulsilver
  platinum: IPlatinum
}

export interface IAnimated {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IBlackWhite {
  animated: IAnimated
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IGenerationV {
  'black-white': IBlackWhite
}

export interface IOmegarubyAlphasapphire {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IXY {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IGenerationVI {
  'omegaruby-alphasapphire': IOmegarubyAlphasapphire
  'x-y': IXY
}

export interface IIcons {
  front_default: string | null
  front_female: string | null
}

export interface IUltraSunUltraMoon {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IGenerationVII {
  icons: IIcons
  'ultra-sun-ultra-moon': IUltraSunUltraMoon
}

export interface IGenerationVIII {
  icons: IIcons
}

export interface IVersions {
  'generation-i': IGenerationI
  'generation-ii': IGenerationII
  'generation-iii': IGenerationIII
  'generation-iv': IGenerationIV
  'generation-v': IGenerationV
  'generation-vi': IGenerationVI
  'generation-vii': IGenerationVII
  'generation-viii': IGenerationVIII
}

export interface IOther {
  dream_world: IDreamWorld
  home: IHome
  'official-artwork': IOfficialArtwork
  showdown: IShowdown
}

export interface IShowdown {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}
export interface IOfficialArtwork {
  front_default: string | null
  front_shiny: string | null
}

export interface IHome {
  front_default: string | undefined
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface IDreamWorld {
  front_default: string
  front_female: string | null
}

export interface ISpecies {
  name: string
  url: string
}

export interface IVersionGroup {
  name: string
  url: string
}

export interface IMoveLearnMethod {
  name: string
  url: string
}

export interface IVersionGroupDetails {
  level_learned_at: number
  move_learn_method: IMoveLearnMethod
  version_group: IVersionGroup
}

export interface IMove {
  name: string
  url: string
}

export interface IMoves {
  move: IMove
  version_group_details: IVersionGroupDetails
}

export interface IAbilities {
  ability: IAbility
  is_hidden: boolean
  slot: number
}

export interface IAbility {
  name: string
  url: string
}

export interface ICries {
  latest: string
  legacy: string
}

export interface IForms {
  name: string
  url: string
}

export interface IGameIndices {
  game_index: number
  version: IVersion
}

export interface IVersion {
  name: string
  url: string
}
