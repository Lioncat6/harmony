// Borrowed from https://github.com/Lioncat6/SAMBL-React/blob/main/lib/providers/volumo.ts
// License TBD

export interface VolumoItemList<T> {
  items: T[];
}

export interface VolumoPartialAlbum {
  id: number
  icpn: string
  title: string
  exclusive: boolean
  artwork_uuid: string
  volumo_direct: boolean
  catalog_number?: string
  release_start_at: string
}

export interface VolumoAlbum extends VolumoPartialAlbum {
  hot: boolean
  price: number
  genres: number[]
  tracks: VolumoTrack[]
  artists: VolumoPartialArtist[]
  charted: boolean
  curated: boolean
  formats: VolumoFormats
  duration: number
  featured: boolean
  purchased: boolean
  downloaded: boolean
  first_live: string
  genres_ids: number[]
  description: string
  recordlabel: VolumoPartialLabel
  published_at: string
  tracks_total: number
  volumo_direct: boolean
  original_release_date: string
}

export interface VolumoTrack {
  id: number
  bpm: number
  isrc: string
  album: VolumoPartialAlbum
  genre: number
  price: number
  title: string
  artists: VolumoPartialArtist[]
  curated: boolean
  formats: VolumoFormats
  keysign: string
  version: string
  duration: number
  featured: boolean
  genre_id: number
  listened: boolean
  remixers: VolumoPartialArtist[]
  purchased: boolean
  album_only: boolean
  downloaded: boolean
  playlisted: number
  recordlabel: VolumoPartialLabel
  composed_title: string
  featured_artists: VolumoPartialArtist[]
  release_start_at: string
}

export interface VolumoPartialContributor {
  id: number
  name: string
  type: "recordlabel" | "artist"
  followed: unknown
}

export interface VolumoPartialArtist extends VolumoPartialContributor {
    type: "artist"
}

export interface VolumoPartialLabel extends VolumoPartialContributor {
    type: "recordlabel"
}

export interface VolumoFormats {
  mp3: VolumoFilesize
  wav: VolumoFilesize
  aiff: VolumoFilesize
  flac: VolumoFilesize
}

export interface VolumoFilesize {
  filesize: number
}

export interface VolumoContributor extends VolumoPartialContributor {
  rank: number
  genres: number[]
  parent: unknown
  public: boolean
  claimed: boolean
  is_public: boolean
  genres_ids: number[]
  description: string
  albums_total: number
  artwork_uuid: string | null
  charts_total: number
  country_code: string
  social_links: string[]
  tracks_total: number
  playlists_total: number
  embed_youtube_ids: unknown[]
  pick_of_the_month: unknown
  my_user_contributor_id: unknown
  contributor_direct_message: boolean
}

export interface VolumoArtist extends VolumoContributor {
    type: "artist"
}

export interface VolumoLabel extends VolumoContributor {
    type: "recordlabel"
}

export interface VolumoSearchResponse {
  albums: VolumoSearchAlbum[] | Record<PropertyKey, never> // {}
  charts: unknown[]
  genres: unknown
  tracks: VolumoSearchTrack[]
  artists: VolumoSearchArtist[]
  playlists: unknown[]
  albums_total: number
  charts_total: number
  genres_total: number
  recordlabels: VolumoSearchLabel[]
  tracks_total: number
  artists_total: number
  playlists_total: number
  recordlabels_total: number
}

export interface VolumoSearchContributor extends VolumoPartialContributor {
    artwork_uuid: string | null
    country_code: string | null
    pick_of_the_month: unknown
}

export interface VolumoSearchArtist extends VolumoSearchContributor {
    type: "artist"
}

export interface VolumoSearchLabel extends VolumoSearchContributor {
    type: "recordlabel"
}

export interface VolumoSearchAlbum extends VolumoPartialAlbum {
    artists: VolumoPartialArtist[]
    listened: boolean
    genres_ids: number[]
    tracks_ids: number[]
    recordlabel: VolumoPartialLabel
    published_at: string
}

export interface VolumoSearchTrack {
    id: number
    isrc: string
    album: VolumoPartialAlbum
    title: string
    artists: VolumoPartialArtist[]
    version?: string
    remixers: VolumoPartialArtist[]
    recordlabel: VolumoPartialLabel
    composed_title: string
    featured_artists: VolumoPartialArtist[]
    release_start_at: string
}
