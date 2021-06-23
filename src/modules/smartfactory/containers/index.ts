import { CompanyComponent } from './company/company.component'
import { ServerComponent } from './server/server.component'
import { DbComponent } from './db/db.component'
import { MonitoringComponent } from './monitoring/monitoring.component'
import { IotComponent } from './iot/iot.component'

export const containers = [CompanyComponent, ServerComponent, DbComponent, MonitoringComponent, IotComponent];

export * from './company/company.component'
export * from './server/server.component'
export * from './db/db.component'
export * from './monitoring/monitoring.component'
export * from './iot/iot.component'