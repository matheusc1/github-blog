import { ProfileCard } from './profile-card'
import { RepositoryCard } from './repository-card'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { GetIssues } from '../../api/get-issues'
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

export function SearchIssuesPage() {
  const { register, handleSubmit, formState: { errors }, getValues, } = useForm<Input>({
    mode: "onBlur"
  })

  const [repositorySearch, setRepositorySearch] = useState<string | null>(null)

  const { data: issues, isError } = useQuery({
    queryKey: ['get-issues', repositorySearch],
    queryFn: () => GetIssues({ repositorySearch: repositorySearch || '' }),
    enabled: !!repositorySearch,
    retry: false
  })

  const onSubmit = (data: Input) => {
    setRepositorySearch(data.repositorySearch);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="hidden sm:block w-full bg-center bg-cover bg-logo h-72" />

      <div className="max-w-sm sm:max-w-864 mx-auto px-3 sm:px-0">
        <ProfileCard />

      <div className="flex justify-between items-center mt-14">
        <p className="text-subtitle text-lg font-bold">Publicações</p>
        {issues && issues?.total_count > 0 && (
          <span className="text-span text-sm">
            {issues?.total_count}
            {issues?.total_count === 1 ? ' Publicação' : ' Publicações'}
          </span>
        )}
      </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mt-3 gap-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-8">
          {issues && issues.items.length > 0 ? (
            issues.items.map(item => (
              <RepositoryCard key={item.number} issue={item} repositoryAndUser={(getValues('repositorySearch'))} />
            ))
          ) : (
            <div className='col-span-full w-96 h-40' />
          )}
        </div>

        {isError && (
          <div className="mx-auto max-w-sm sm:max-w-xl px-2 sm:px-0 text-center -mt-48">
            <p>
              Erro ao buscar issues no repositório. Por favor, verifique se a sua requisição está no formato correto:{' '}
              <span className="font-bold">usuário/repositório.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}