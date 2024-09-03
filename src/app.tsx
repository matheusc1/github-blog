import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './lib/react-query.ts'
import { Post } from './pages/post/index.tsx'
import { SearchIssuesPage } from './pages/search-issues/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchIssuesPage />,
  },
  {
    path: "/post/:issueNumber",
    element: <Post />,
  },
])

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}