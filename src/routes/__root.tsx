import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Root } from 'postcss'
import React from 'react'

// export const Route = createRootRouteWithContext<{
//   queryClient: QueryClient;
// }>()({
//   beforeLoad: async ({ context }) => {
//     const userSession = await context.queryClient.fetchQuery(
//       authQueries.user()
//     );
//     return { userSession };
//   },
//   head: () => ({
//     meta: [
//       {
//         charSet: "utf-8",
//       },
//       {
//         name: "viewport",
//         content: "width=device-width, initial-scale=1",
//       },
//       ...seo({
//         title:
//           "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
//         description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
//       }),
//     ],
//     links: [
//       { rel: "stylesheet", href: appCss },
//       {
//         rel: "apple-touch-icon",
//         sizes: "180x180",
//         href: "/apple-touch-icon.png",
//       },
//       {
//         rel: "icon",
//         type: "image/png",
//         sizes: "32x32",
//         href: "/favicon-32x32.png",
//       },
//       {
//         rel: "icon",
//         type: "image/png",
//         sizes: "16x16",
//         href: "/favicon-16x16.png",
//       },
//       { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
//       { rel: "icon", href: "/favicon.ico" },
//     ],
//   }),
//   errorComponent: (props) => {
//     return (
//       <RootDocument>
//         <DefaultCatchBoundary {...props} />
//       </RootDocument>
//     );
//   },
//   notFoundComponent: () => <NotFound />,
//   component: RootComponent,
// });

export const Route = createRootRoute({
  component: () => (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />
    </RootDocument>
  ),
})

interface rootDocumentProps {
  children: React.ReactNode
}

const RootDocument = (children: rootDocumentProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      <body className='bg-amber-100'>
        {children.children}
      </body>
    </html>
  )
}