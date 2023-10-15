import CustomInput from "../custom-input";

export default function ContactPart () {
  return(
    <section id="contact" className="bg-white px-16">
      <div className="w-full flex items-center justify-center">
      CONTATO
      <CustomInput> Nome </CustomInput>
      <CustomInput> Email </CustomInput>
      <CustomInput> Mensagem </CustomInput>
      </div>
    </section>
  )
}