import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./components/invite-guests-modal";
import { ConfirmTripModal } from "./components/confirm-trip-modal";
import { DestinationAndDateStep } from "./components/destination-and-date-step";
import { InviteGuestsStep } from "./components/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTrip() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestModalOPen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModal, setIsConfirmTripModal] = useState(false);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartDate, setEventStartDate] = useState<DateRange | undefined>()
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

  function openTripModal(){
    setIsConfirmTripModal(true)
  }

  function closeTripModal(){
    setIsConfirmTripModal(false)
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

  async function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    console.log(destination, eventStartDate, emailsToInvite, ownerEmail, ownerName)

    if(!destination || !eventStartDate?.from || !eventStartDate?.to){
      return
    }

    if(emailsToInvite.length === 0){
      return
    }

    if(!ownerName || !ownerEmail){
      return
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: eventStartDate?.from,
      ends_at: eventStartDate?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { trip_id } = response.data;
    console.log(response.data)

    navigate(`/trips/${trip_id}`)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./src/assets/logo.svg" alt="plann.er"  className="m-auto"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            setEventStartDate={setEventStartDate}
            eventStartDate={eventStartDate}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openTripModal={openTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
        </p>
    </div>

    {isGuestModalOPen && (
      <InviteGuestsModal 
        addEmailToInvite={addEmailToInvite}
        closeGuestsModal={closeGuestsModal}
        emailsToInvite={emailsToInvite}
        removeEmailToInvite={removeEmailToInvite}
      />
    )}

    {isConfirmTripModal && (
    <ConfirmTripModal
      closeTripModal={closeTripModal}
      createTrip={createTrip}
      setOwnerName={setOwnerName}
      setOwnerEmail={setOwnerEmail}
    />
    )}

  </div>
)}