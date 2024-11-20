/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as todoUsersImport } from './routes/(todo)/users'
import { Route as todoUsersDashboardImport } from './routes/(todo)/users/dashboard'
import { Route as todoUsersPostIndexImport } from './routes/(todo)/users/post/index'
import { Route as todoUsersPostUserIdImport } from './routes/(todo)/users/post/$userId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const todoUsersRoute = todoUsersImport.update({
  id: '/(todo)/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const todoUsersDashboardRoute = todoUsersDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => todoUsersRoute,
} as any)

const todoUsersPostIndexRoute = todoUsersPostIndexImport.update({
  id: '/post/',
  path: '/post/',
  getParentRoute: () => todoUsersRoute,
} as any)

const todoUsersPostUserIdRoute = todoUsersPostUserIdImport.update({
  id: '/post/$userId',
  path: '/post/$userId',
  getParentRoute: () => todoUsersRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(todo)/users': {
      id: '/(todo)/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof todoUsersImport
      parentRoute: typeof rootRoute
    }
    '/(todo)/users/dashboard': {
      id: '/(todo)/users/dashboard'
      path: '/dashboard'
      fullPath: '/users/dashboard'
      preLoaderRoute: typeof todoUsersDashboardImport
      parentRoute: typeof todoUsersImport
    }
    '/(todo)/users/post/$userId': {
      id: '/(todo)/users/post/$userId'
      path: '/post/$userId'
      fullPath: '/users/post/$userId'
      preLoaderRoute: typeof todoUsersPostUserIdImport
      parentRoute: typeof todoUsersImport
    }
    '/(todo)/users/post/': {
      id: '/(todo)/users/post/'
      path: '/post'
      fullPath: '/users/post'
      preLoaderRoute: typeof todoUsersPostIndexImport
      parentRoute: typeof todoUsersImport
    }
  }
}

// Create and export the route tree

interface todoUsersRouteChildren {
  todoUsersDashboardRoute: typeof todoUsersDashboardRoute
  todoUsersPostUserIdRoute: typeof todoUsersPostUserIdRoute
  todoUsersPostIndexRoute: typeof todoUsersPostIndexRoute
}

const todoUsersRouteChildren: todoUsersRouteChildren = {
  todoUsersDashboardRoute: todoUsersDashboardRoute,
  todoUsersPostUserIdRoute: todoUsersPostUserIdRoute,
  todoUsersPostIndexRoute: todoUsersPostIndexRoute,
}

const todoUsersRouteWithChildren = todoUsersRoute._addFileChildren(
  todoUsersRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/users': typeof todoUsersRouteWithChildren
  '/users/dashboard': typeof todoUsersDashboardRoute
  '/users/post/$userId': typeof todoUsersPostUserIdRoute
  '/users/post': typeof todoUsersPostIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/users': typeof todoUsersRouteWithChildren
  '/users/dashboard': typeof todoUsersDashboardRoute
  '/users/post/$userId': typeof todoUsersPostUserIdRoute
  '/users/post': typeof todoUsersPostIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/(todo)/users': typeof todoUsersRouteWithChildren
  '/(todo)/users/dashboard': typeof todoUsersDashboardRoute
  '/(todo)/users/post/$userId': typeof todoUsersPostUserIdRoute
  '/(todo)/users/post/': typeof todoUsersPostIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/users'
    | '/users/dashboard'
    | '/users/post/$userId'
    | '/users/post'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/users'
    | '/users/dashboard'
    | '/users/post/$userId'
    | '/users/post'
  id:
    | '__root__'
    | '/'
    | '/(todo)/users'
    | '/(todo)/users/dashboard'
    | '/(todo)/users/post/$userId'
    | '/(todo)/users/post/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  todoUsersRoute: typeof todoUsersRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  todoUsersRoute: todoUsersRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(todo)/users"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/(todo)/users": {
      "filePath": "(todo)/users.tsx",
      "children": [
        "/(todo)/users/dashboard",
        "/(todo)/users/post/$userId",
        "/(todo)/users/post/"
      ]
    },
    "/(todo)/users/dashboard": {
      "filePath": "(todo)/users/dashboard.tsx",
      "parent": "/(todo)/users"
    },
    "/(todo)/users/post/$userId": {
      "filePath": "(todo)/users/post/$userId.tsx",
      "parent": "/(todo)/users"
    },
    "/(todo)/users/post/": {
      "filePath": "(todo)/users/post/index.tsx",
      "parent": "/(todo)/users"
    }
  }
}
ROUTE_MANIFEST_END */
