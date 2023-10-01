import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { adminJsResources } from './resources'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { brandingOptions } from './branding'
import { authenticateOptions } from './authentication'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminjs = new AdminJs({
    databases: [sequelize],
    rootPath: '/admin',
    resources: adminJsResources,
    branding: brandingOptions,
    locale: locale,
    dashboard: dashboardOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminjs, 
    authenticateOptions, 
    null, 
    {
        resave: false,
        saveUninitialized: false
    }
)