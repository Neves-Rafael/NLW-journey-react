import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { CreateTrip } from "./pages/create-trip";
import { TripDetails } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip/>
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails/>
  }
])

export function App() {
  return <RouterProvider router={router}/>
}

//TODO: Create new components if necessary, example: Modal and Input