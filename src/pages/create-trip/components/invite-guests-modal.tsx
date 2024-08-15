import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface InviteGuestsModalProps{
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export function InviteGuestsModal( {closeGuestsModal,addEmailToInvite,emailsToInvite,removeEmailToInvite}:InviteGuestsModalProps){
  return (
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

            <Button type="submit" variant="primary">
              convidar
              <Plus className="size-5"/>
            </Button>
            
          </form>
        </div>
      </div>
  )
}