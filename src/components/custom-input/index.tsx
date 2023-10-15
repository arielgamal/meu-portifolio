export default function CustomInput ({ children } : 
  { children: React.ReactNode }) {
  return(
    <label>
      {children}
      <input className="border border-zinc-80 h-8 rounded-md" type="text" />
    </label>
  )
}