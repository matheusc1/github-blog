import { 
  LucideArrowLeft,
  LucideArrowUpRightFromSquare,
  LucideCalendarDays,
  LucideGithub,
  LucideMessageCircle,
} from 'lucide-react'
import cover from '../assets/header-cover.png'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

const markdown = `
**Programming languages all have built-in data structures,
but these often differ from one language to another.**
This article attempts to list the built-in data structures available in JavaScript and what properties they have.
These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.  
&nbsp;  

[Dynamic Typing](https://github.com/matheusc1)  
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly 
associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:  
&nbsp;  
~~~js
let foo = 42;       //   foo is now a number  
foo = 'bar';        //   foo is now a string  
foo = true;         //   foo is now a boolean
~~~
`

export function Post() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <header>
        <img src={cover} className="w-full" alt="" />
      </header>

      <div className="flex flex-col justify-start bg-profile rounded-[10px] p-8 w-full max-w-864 -mt-24 gap-5 shadow-md">

        <div className="flex gap-2 items-center justify-between">
          <Link to="/">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <LucideArrowLeft strokeWidth={3} className="size-3 text-blue" />
              <span className="uppercase text-blue font-bold text-xs">Voltar</span>
            </button>
          </Link>

          <Link to="https://github.com/matheusc1">
            <button className='flex items-center justify-center gap-2 cursor-pointer border-b border-transparent hover:border-blue hover:border-b'>
              <span className="uppercase text-blue font-bold text-xs">Github</span>
              <LucideArrowUpRightFromSquare strokeWidth={3} className="size-3 text-blue" />
            </button>
          </Link>
        </div>

        <p className='font-bold text-2xl text-title'>JavaScript data types and data structures</p>

        <div className="flex flex-col justify-between w-full">
          <div className="flex space-x-8">
            <div className="flex items-center gap-1">
              <LucideGithub className="size-4 text-label" />
              <span className="text-subtitle">matheusc1</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideCalendarDays className="size-4 text-label" />
              <span className="text-subtitle">Há 1 dia</span>
            </div>

            <div className="flex items-center gap-1">
              <LucideMessageCircle fill='#3A536B' className="size-4 text-label" />
              <span className="text-subtitle">5 comentários</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-864 p-8 flex flex-col">
        <Markdown  components={{
          a: ({...props}) => <a className="text-blue underline decoration-blue" {...props} />,
          code: ({ inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <pre className={`p-4 bg-post rounded ${className}`} {...props}>
              <code className={`${match[1]}`}>{children}</code>
            </pre>
          ) : (
            <code>{children}</code>
          );
        }
        }}>{markdown}</Markdown>
      </div>
    </div>
  )
}
