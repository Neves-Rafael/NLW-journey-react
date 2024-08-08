import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestModalOPen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["email.exemplo@gmail.com"]);

  function openGuestsInput(){
    setIsGuestsInputOpen(true);
  }
  
  function closeGuestsInput(){
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false);
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return console.log("Fill the email field.");
    }

    if(email && email.length < 10){
      return console.log("Email is to short to add.");
    }

    if(emailsToInvite.includes(email)){
      return console.log("Email already exist.");
    }


    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(email: string){
    const newEmailList = emailsToInvite.filter(invited => invited != email);

    setEmailsToInvite(newEmailList);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./src/assets/logo.svg" alt="plann.er"  className="m-auto"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-32 cursor-pointer outline-none"/>
            </div>

            <div className="w-px h-6 bg-zinc-800"/>

            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className="bg-zinc-800 rounded-lg px-5 py-2 text-zinc-200 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Alterar local/data
              <Settings2 className="size-5 "/>
            </button>
            ): (
            <button 
              onClick={openGuestsInput} 
              className="bg-lime-300 rounded-lg px-5 py-2 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-500 hover:text-white">
              Continuar
              <ArrowRight className="size-5 "/>
            </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400"/>
              <span className="bg-transparent text-lg text-zinc-400 outline-none">Quem estará na viagem?</span>
            </button>

            <div className="w-px h-6 bg-zinc-800"/>

            <button className="bg-lime-300 rounded-lg px-5 py-2 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-500 hover:text-white">
              Confirmar viagem
              <ArrowRight className="size-5 "/>
            </button>
          </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
        </p>
    </div>

    {isGuestModalOPen && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecionar convidados</h2>
              <button type="button" onClick={closeGuestsModal}>
                <X className="size-5 text-zinc-400"/>
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {emailsToInvite.map(email => {
              return(
                <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2" key={email}>
                  <span className="text-zinc-300">{email}</span>
                  <button type="button" onClick={() => removeEmailToInvite(email)}> 
                    <X className="size-4 text-zinc-400" />
                  </button>
                </div>
              )
            })}
          </div>
          <div className="w-full h-px bg-zinc-800"/>

          <form onSubmit={addEmailToInvite} className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-3">
            <AtSign className="text-zinc-400 size-5"/>

            <input 
              name="email"
              type="email" 
              placeholder="Digite o email do convidado" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
            <button type="submit" className="bg-lime-300 rounded-lg px-5 py-2 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-500 hover:text-white">
              convidar
              <Plus className="size-5"/>
            </button>
          </form>
        </div>
      </div>
    )}
    </div>
  )
}