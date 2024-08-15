import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps{
  openGuestsModal : () => void;
  openTripModal : () => void;
  emailsToInvite : string[];
}

export function InviteGuestsStep({openGuestsModal, emailsToInvite, openTripModal}:InviteGuestsStepProps){

  return(
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
      <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400"/>
        {emailsToInvite.length > 0 ? (
          <span className="bg-transparent text-lg text-zinc-100 outline-none">{emailsToInvite.length} pessoa(s) convidada(s)</span>
        ): (
          <span className="bg-transparent text-lg text-zinc-400 outline-none">Quem estará na viagem?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"/>

      <Button onClick={openTripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="size-5 "/>
      </Button>
      
    </div>
  )
}