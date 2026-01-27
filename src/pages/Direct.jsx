import DirectHeader from "../components/DirectComponents/DirectHeader";
import DirectSearch from "../components/DirectComponents/DirectSearch";
import DirectStories from "../components/DirectComponents/DirectStories";
import DirectMessagesHeader from "../components/DirectComponents/DirectMessagesHeader";
import DirectItem from "../components/DirectComponents/DirectItem";
import TrialBannerDirect from "../components/TrialComponents/TrialBannerDirect";
import "./Direct.css";

export default function Direct() {
  return (
    <>
      <div className="direct-page">
        <DirectHeader />
        <DirectSearch />
        <DirectStories />
        <DirectMessagesHeader />

        <div className="direct-items-container">
          <DirectItem />
        </div>
      </div>

      {/* BANNER FORA DO SCROLL */}
      <TrialBannerDirect position="bottom" />
    </>
  );
}
