export function RepoCard() {
  return (
    <button className="flex flex-col text-left w-card bg-post rounded-lg h-64 p-8 overflow-hidden
    relative outline-none hover:ring-2 hover:ring-label focus-visible:ring-2 focus-visible:ring-blue">
      <div className="w-full flex justify-between">
        <p className="text-xl text-title font-bold w-60 -mt-1">
          JavaScript data types and data structures
        </p>
        <span className="text-sm text-span">Há 1 dia</span>
      </div>

      <p className="text-span mt-5 text-ellipsis max-w-[352px] line-clamp-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus laborum minima iste quaerat minus numquam veniam quasi aut dolore. Exercitationem autem amet commodi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sed, sint ipsam cupiditate praesentium tempora libero quisquam enim dolorem dolore voluptates quasi ut mollitia recusandae sapiente officia illum, dolores commodi.
      </p>
    </button>
  )
}