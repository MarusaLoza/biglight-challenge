import './app.css'
import { LoginDrawer } from './components/LoginDrawer'
import { Button } from './components/Button'
import { Dropdown } from './components/Dropdown'
import { Card } from './components/Card'

export function App() {
  return (
   <div className="flex gap-10 p-10 bg-gray-100 min-h-screen">
      
      {/* Стовпчик Бренду А (стандартний) */}
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-center">Brand A (Default)</h2>
        <div className="p-6 bg-white border rounded-lg">
           <Dropdown 
             label="Select Language" 
             options={[
               {label: 'English', value: 'en'}, 
               {label: 'Ukrainian', value: 'ua'}
             ]} 
           />
           <div className="mt-4">
             <Button label="Login to Brand A" />
           </div>
        </div>
      </div>

      {/* Стовпчик Бренду Б (з твоїм класом) */}
      <div className="theme-brand-b flex flex-col gap-6">
        <h2 className="font-bold text-center">Brand B (Themed)</h2>
        <div className="p-6 bg-white border rounded-lg">
           <Dropdown 
             label="Select Language" 
             options={[
               {label: 'English', value: 'en'}, 
               {label: 'Ukrainian', value: 'ua'}
             ]} 
           />
           <div className="mt-4">
             <Button label="Login to Brand B" />
           </div>
        </div>
      </div>
      <Card title="Card Title" description="This is a card description" />
    </div>
  )
}
