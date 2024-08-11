import { User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps{
  closeTripModal : () => void;
  createTrip : (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({closeTripModal, createTrip}:ConfirmTripModalProps){

  return (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
          <button type="button" onClick={closeTripModal}>
            <X className="size-5 text-zinc-400"/>
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
        </p>
      </div>

      <form onSubmit={createTrip} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950  border-zinc-800 rounded-lg flex items-center gap-3">
          <User className="text-zinc-400 size-5"/>

          <input 
            name="name"
            type="text" 
            placeholder="Digite seu nome completo" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950  border-zinc-800 rounded-lg flex items-center gap-3">
          <User className="text-zinc-400 size-5"/>

          <input 
            name="email"
            type="email" 
            placeholder="Digite seu e-mail pessoal" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <button type="submit" className="bg-lime-300 w-full justify-center rounded-lg px-5 h-11 text-lime-950 font-semibold flex items-center gap-2 hover:bg-lime-500 hover:text-white">
          Confirmar criação da viagem
        </button>
      </form>
    </div>
  </div>
  )
}