export interface Item {
  id?: number,
  name?: string,
  title: string,
  price?: number,
  basket?: boolean,
  number?: number,
  url: string
}


export interface PostHome {
  url: string,
  title?: string,
  desc?: string,
  another?: string
}

export interface Story {
  url: string,
  title?: string,
  desc?: string,

}
