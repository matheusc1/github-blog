import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { GetIssues } from '../../api/get-issues'
import { ProfileCard } from './profile-card'
import { RepositoryCard } from './repository-card'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Input>({
    mode: 'onBlur',
  })

  const [repositorySearch, setRepositorySearch] = useState<string | null>(null)

  const { data: issues, isError } = useQuery({
    queryKey: ['get-issues', repositorySearch],
    queryFn: () => GetIssues({ repositorySearch: repositorySearch || '' }),
    enabled: !!repositorySearch,
    retry: false,
  })

  const onSubmit = (data: Input) => {
    setRepositorySearch(data.repositorySearch)
  }

  return (
    <div className="min-h-screen w-full">
      <div className="hidden h-72 w-full bg-logo bg-cover bg-center sm:block" />

      <div className="mx-auto max-w-sm px-3 sm:max-w-864 sm:px-0">
        <ProfileCard />

        <div className="mt-14 flex items-center justify-between">
          <p className="text-lg font-bold text-subtitle">Publicações</p>
          {issues && issues?.total_count > 0 && (
            <span className="text-sm text-span">
              {issues?.total_count}
              {issues?.total_count === 1 ? ' Publicação' : ' Publicações'}
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              autoComplete="off"
              placeholder="Buscar issues: username/repository"
              className="w-full rounded-md border border-border bg-input px-4 py-3 text-default outline-none placeholder:text-label focus-visible:ring-1 focus-visible:ring-blue"
              {...register('repositorySearch', {
                required: 'Este campo é obrigatório',
              })}
            />
            <button className="rounded-md bg-label px-4 py-3 font-semibold text-title hover:bg-opacity-70">
              Buscar
            </button>
          </div>

          <p
            className={`mt-2 text-xs text-red-500 ${errors.repositorySearch ? 'visible' : 'invisible'}`}
          >
            {errors.repositorySearch?.message}
          </p>
        </form>

        <div className="mb-8 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {issues && issues.items.length > 0 ? (
            issues.items.map((item) => (
              <RepositoryCard
                key={item.number}
                issue={item}
                repositoryAndUser={getValues('repositorySearch')}
              />
            ))
          ) : (
            <div className="col-span-full h-40 w-96" />
          )}
        </div>

        {isError && (
          <div className="mx-auto -mt-48 max-w-sm px-2 text-center sm:max-w-xl sm:px-0">
            <p>
              Erro ao buscar issues no repositório. Por favor, verifique se o
              formato da sua requisição está correto:{' '}
              <span className="font-bold">usuário/repositório.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
