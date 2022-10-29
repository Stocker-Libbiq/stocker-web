import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Routess from './routes/routes'

function Index (): JSX.Element {
  return <Routess />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
)
