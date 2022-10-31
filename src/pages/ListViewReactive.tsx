import reactiveLocalStorage from '../@types/types'
import RowReactive from '../components/RowReactive'

function ListViewReactive (): JSX.Element {
  const items = JSON.parse(localStorage.getItem('reactive') as string)
  const listReactive = items.map((reactive: reactiveLocalStorage) => {
    return <RowReactive key={reactive.id} reactive={reactive} />
  })
  return (
    <div>
      {listReactive}
    </div>
  )
}

export default ListViewReactive
