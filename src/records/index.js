import { Record, Set } from 'immutable'
import transit from 'transit-immutable-js'

export const StoreRecord = Record(
  {
    posts: Set(),
    postFilter: undefined
  }
, "StoreRecord")

export const PostRecord = Record(
  {
    id: "",
    height: 300,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    textColor: "#000",
    title: "",
    imageURL: "",
    link: "",
  }
, "PostRecord")

export const recordTransit = transit.withRecords([StoreRecord, PostRecord])
