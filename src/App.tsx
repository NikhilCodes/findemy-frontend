import "./App.css";
import { AppShell } from "./components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./providers/user.provider";

const queryClient = new QueryClient()

function App() {
  const routes = createBrowserRouter([
    {
      path: '/*',
      element: <AppShell/>
    }
  ])
  return <QueryClientProvider client={queryClient}>
    <UserProvider>
      <RouterProvider router={routes}/>
    </UserProvider>
  </QueryClientProvider>;
}

export default App;
