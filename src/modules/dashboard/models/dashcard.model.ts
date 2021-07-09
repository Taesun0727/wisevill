export interface company {
  name : string,
  mserver_status : boolean,
  mserver_link : string,
  tserver_status : boolean,
  tserver_link : string,
  on_device : string,
  off_device : string,
  monitor_link : string
}

export interface device {
  name : string,
  img : string,
  ex : string, //기기에서 뱉는 데이터값 이름 대충 지음 나중에 수정
  status : boolean,
}

export interface Notice {
  name: string,
  title: string,
}

export interface Eventlog {
  date: string,
  time: string,
  company: string,
  log: string,
}

export interface Servervalidity {
  company: string,
  title: string,
}