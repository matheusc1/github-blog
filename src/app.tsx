import cover from './assets/header-cover.png'
import { Card } from './components/card'

export function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <header>
        <img src={cover} className="w-full" alt="" />
      </header>

      <Card />
    </div>
  )
}