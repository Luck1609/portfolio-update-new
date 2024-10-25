import { StringObject } from '@/shared/types'
import _ from 'lodash'

export type SearchComponentProps = {
  show: boolean,
  updateQuery: (data: StringObject) => void
}

export default function SearchComponent(props: SearchComponentProps) {
  const handleChange = _.debounce((value) => props.updateQuery({search: value}), 300)

  return (
    <form action="" className="form-field" onSubmit={(event) => event.preventDefault()}>
      <input 
        type="text" 
        className="w-full p-2 h-12 border dark:bg-transparent dark:border-dark-border rounded-lg" 
        placeholder="Search..." 
        onChange={(event) => handleChange(event.target.value)} 
      />
    </form>
  )
}
