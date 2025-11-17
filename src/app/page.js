import Image from "next/image";
import SolutionsPage from "./Homesoloution/page";
import PanIndiaNetwork from "./Pan_India_Network/page";
import BrandPartners from "./Home_Brand_Partners/page";
import Home_Catelog from "./Home_Catalog/page";
import Newsletter_Email from "./News_Letter_Email/page";
import FullScreenYouTube from "./Home_Youtube_Video/page";
import Home_aboutus from "./Home_AboutUS/page";
import Home_Pathrecharge_conatct from "./Home_pathrecharge_contact/page";
import BackToTopButton from "./components/BacktoTop";
import EnquireButton from "./components/EnquireBtn";
import FeedbackForm from "./Home_Feedback_form/page";
import Chatbot from "./Chatbot/page";


// import SideBadge from "./components/sideBadge";
export default function Home() {
  return (
 < >
  <div className="w-full overflow-x-hidden mx-auto">
 <BackToTopButton/>

 <EnquireButton/>

 <Chatbot/>

 <FullScreenYouTube/>
 <Home_aboutus/>
 <SolutionsPage/>
 
 <PanIndiaNetwork/>
 <BrandPartners/>

 <Home_Catelog/>
   <Home_Pathrecharge_conatct/>
 <Newsletter_Email/>
<FeedbackForm/>
</div>
 </>
  );
}
