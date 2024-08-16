import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../../lib/axios";

export function DestinationHeader(){

  const { tripId } = useParams()
  
  console.log(tripId)

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => console.log(response.data))
  }, [tripId])

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400"/>
        <span className="text-lg text-zinc-100">Florianópolis, Brazil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400"/>
          <span className="text-lg text-zinc-100">17 a 23 de Agosto</span>
        </div>
        <div className="w-px h-6 bg-zinc-600"/>
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5"/>
        </Button>
      </div>
    </div>
  )
}