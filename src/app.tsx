import axios from 'axios'
import cover from './assets/bg.png'
import { ProfileCard } from './components/profile-card'
import { RepoCard } from './components/repo-card'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export interface Issue {
  number: number
  title: string
  created_at: string
  body: string
}

interface SearchIssuesResponse {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

type Input = {
  searchText: string
}

export function App() {
  const [issues, setIssues] = useState<SearchIssuesResponse | null>(null)

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<Input>({
    mode: "onBlur"
  })

  async function onSubmit(data: Input) {
    try {
      const response = await axios.get('https://api.github.com/search/issues', {
        params: {
          q: `repo:${data.searchText}`,
        }
      })

      setIssues(response.data)
    } catch (error) {
      console.error('Erro na requisição:', error)
      setIssues(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <img src={cover} className="hidden sm:block" alt="logotipo" />
      </div>

      <ProfileCard />

      <div className="w-full max-w-sm sm:max-w-864 flex justify-between items-center mt-8 sm:mt-19">
        <p className="text-subtitle text-lg font-bold">Publicações</p>

        {issues && issues?.total_count > 0 && (
          <span className="text-span text-sm">
            {issues?.total_count}
            {issues?.total_count === 1 ? ' Publicação' : ' Publicações'}
          </span>
        )}
      </div>

      <form className='w-full max-w-sm sm:max-w-864' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex mt-3 gap-3'>
          <input
            type="text"
            autoComplete="off"
            placeholder="Buscar conteúdo: username/repository"
            className="w-full border border-border rounded-md py-3 px-4 bg-input
            text-text placeholder:text-label outline-none focus-visible:ring-1 focus-visible:ring-blue"
            {...register("searchText", { required: "Este campo é obrigatório" })}
          />
          <button className='bg-label hover:bg-opacity-70 py-3 px-4 rounded-md text-title font-semibold'>
            Pesquisar
          </button>
        </div>

        <p className={`mt-2 text-red-500 text-xs ${errors.searchText ? '' : 'invisible'}`}>
          Este campo é obrigatório
        </p>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-20">
        {issues && issues.items.length > 0 ? (
          issues.items.map(item => (
            <RepoCard key={item.number} issue={item} repoAndUser={(getValues('searchText'))} />
          ))
        ) : (
          <div className='col-span-full' />
        )}
      </div>

    </div>
  )
}