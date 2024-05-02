import cover from './assets/header-cover.png'
import { ProfileCard } from './components/profile-card'
import { RepoCard } from './components/repo-card'
import { useForm, SubmitHandler } from 'react-hook-form'

type Input = {
  searchText: string
}

export function App() {
  const { 
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

  console.log(watch("searchText"))

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <header>
        <img src={cover} className="w-full" alt="" />
      </header>

      <ProfileCard />

      <div className="w-full max-w-864 flex justify-between items-center mt-19">
        <p className="text-subtitle text-lg font-bold">Publicações</p>
        <span className="text-span text-sm">6 publicações</span>
      </div>

      <form className='w-full max-w-864' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="mt-3 w-full border border-border rounded-md py-3 px-4 bg-input
          text-text placeholder:text-label outline-none focus-visible:ring-1 focus-visible:ring-blue"
          {...register("searchText")}
        />
        {errors.searchText && <span className='text-red-500 text-xs'>Este campo é obrigatório</span>}
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-20">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>

    </div>
  )
}