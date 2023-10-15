import BlackLink from "../black-link";
export default function Header () {
  return(
    <section className="px-16 flex items-center justify-between w-full h-14 text-white border border-[#424242] fixed bg-zinc-950/10 backdrop-filter backdrop-blur-sm">
      <div>
        <p>( Logo )</p>
      </div>

      <div className="flex gap-3">
        <BlackLink href="">About</BlackLink>
        <BlackLink href="#contact">Contato</BlackLink>
        <BlackLink href="">Conhecimentos</BlackLink>
      </div>
    </section>
  )
}