import { CircleCheck, CircleDashed, Link2, Plus, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";

interface ParticipantsProps {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function SideBar(){

  const { tripId } = useParams();
  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);
  
  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId]);

  return (
    <div className="w-80 space-y-6">
      <h2 className="text-xl font-semibold">Links Importantes</h2>
      <div className="space-y-5">

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-zinc-100">Reserva do AirBnB</p>
            <a href="" className="text-xs text-zinc-400 truncate hover:text-zinc-100">https://www.airbnb.com.br/rooms/skapskaokspoakspoak</a>
          </div>
          <Link2 className="size-5"/>
        </div>

      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5"/>
        Cadastrar novo link
      </Button>

      <div className="h-px w-full bg-zinc-800"/>

      <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">

        <div className="flex flex-col gap-4">
          {participants.map((participant, index) => (
          <div key={participant.id} className="flex items-center gap-2 flex-1">
            <div className="flex-1">
              <p className="text-zinc-100">{participant.name ?? `Convidado ${index}`}</p>
              <span className="text-sm text-zinc-400 truncate">{participant.email}</span>
            </div>
            {participant.is_confirmed
            ?( <CircleCheck className="size-5 text-lime-300"/>)
            :( <CircleDashed className="size-5 text-zinc-400"/>)
            }
          </div>
          ))}
        </div>

      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5"/>
        Gerenciar Convidados
      </Button>
      
      </div>
    </div>
  )
}