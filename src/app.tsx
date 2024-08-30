import cover from './assets/bg.png'
import { ProfileCard } from './components/profile-card'
import { RepoCard } from './components/repo-card'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { GetIssues } from './api/get-issues'
import { useState } from 'react'

export interface Issue {
  number: number
  title: string
  created_at: string
  body: string
}

type Input = {
  repositorySearch: string
}

export function App() {
  const { register, handleSubmit ,formState: { errors }, getValues, } = useForm<Input>({
    mode: "onBlur"
  })

  const [repositorySearch, setRepositorySearch] = useState<string | null>(null)

  const { data: issues, isError } = useQuery({
    queryKey: ['get-issues', repositorySearch],
    queryFn: () => GetIssues({ repositorySearch: repositorySearch || '' }),
    enabled: !!repositorySearch
  })

  const onSubmit = (data: Input) => {
    setRepositorySearch(data.repositorySearch);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <img src={cover} className="hidden sm:block w-full" alt="logotipo" />

      <ProfileCard />

      <div className="w-full max-w-sm sm:max-w-864 px-2 sm:p-0 flex justify-between items-center mt-8">
        <p className="text-subtitle text-lg font-bold">Publicações</p>

        {issues && issues?.total_count > 0 && (
          <span className="text-span text-sm">
            {issues?.total_count}
            {issues?.total_count === 1 ? ' Publicação' : ' Publicações'}
          </span>
        )}
      </div>

      <form className='w-full max-w-sm sm:max-w-864 px-2 sm:p-0' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex mt-3 gap-3'>
          <input
            type="text"
            autoComplete="off"
            placeholder="Buscar issues: username/repository"
            className="w-full border border-border rounded-md py-3 px-4 bg-input
            text-default placeholder:text-label outline-none focus-visible:ring-1 focus-visible:ring-blue"
            {...register("repositorySearch", { required: "Este campo é obrigatório" })}
          />
          <button className='bg-label hover:bg-opacity-70 py-3 px-4 rounded-md text-title font-semibold'>
            Buscar
          </button>
        </div>

        <p className={`mt-2 text-red-500 text-xs ${errors.repositorySearch ? 'visible' : 'invisible'}`}>
          {errors.repositorySearch?.message}
        </p>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-0 gap-8 mt-10 mb-8">
        {issues && issues.items.length > 0 ? (
          issues.items.map(item => (
            <RepoCard key={item.number} issue={item} repoAndUser={(getValues('repositorySearch'))} />
          ))
        ) : (
          <div className='col-span-full w-96 h-40' />
        )}
      </div>

      {isError && (
        <div className="flex items-center justify-center max-w-sm sm:max-w-xl px-2 sm:px-0 text-center -mt-52">
          <p>
            Erro ao buscar issues no repositório. Por favor, verifique se a sua requisição está no formato correto:{' '}
            <span className="font-bold">usuário/repositório.</span>
          </p>
        </div>
      )}

    </div>
  )
}