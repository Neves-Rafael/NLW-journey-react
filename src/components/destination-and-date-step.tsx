import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps{
  isGuestsInputOpen : boolean;
  closeGuestsInput : () => void;
  openGuestsInput : () => void;
}

export function DestinationAndDateStep({isGuestsInputOpen, closeGuestsInput, openGuestsInput}:DestinationAndDateStepProps){

  return(
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
  )
}