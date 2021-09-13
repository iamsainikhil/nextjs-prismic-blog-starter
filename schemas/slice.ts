export interface ISlice<T=any,D=any> {
  slice_type: string
  slice_label: string
  items: T[]
  primary: D
}
