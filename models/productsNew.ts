export interface Product {
    data: Daum[]
    links: Links
    meta: Meta
  }
  
  export interface Daum {
    id: number
    slug: string
    url: string
    rubric_id: number
    name: string
    price: number
    old_price: number
    image: string
  }
  
  export interface Links {
    first: string
    last: string
    prev: any
    next: any
  }
  
  export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }