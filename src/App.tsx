import { GlobalStyles } from "./styles/globalstyles"

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyles />
    </div>
  )
}
