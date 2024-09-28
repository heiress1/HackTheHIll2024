import moment from "../utils/momentLocalizer";
import momentLocalizer from "react-widgets-moment";

// Configure the localizer
momentLocalizer(moment);

// Optionally, set a default locale (e.g., 'en', 'fr')
moment.locale("en"); // Set this to your preferred locale (e.g., 'fr', 'es')
