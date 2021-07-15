export interface Notice {
  $key: string
  type: string
  title: string
  writer: string
  date: string
  content: string
  addfile: string
  modify: string
  checked?: boolean;
}