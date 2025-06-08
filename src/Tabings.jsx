import react, { useState } from 'react';

const Tabings = () => {
    const tabs =  ["All", "UI/UX", "Branding", "Apps"];
    const [activeTab, setActiveTab] = useState('All');

    const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <p className="text-white">This is about me.</p>;
      case "UI/UX":
        return <p className="text-white">These are my projects.</p>;
      case "Branding":
        return <p className="text-white">These are my skills.</p>;
      case "Apps":
        return <p className="text-white">Contact me here.</p>;
      default:
        return null;
    }
  };

    return (
        <div className="tabing-container">
            <div className="space-x-4 flex justify-center">
              <div className="button-container">
                  {tabs.map((tab) => (
                      <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 ${activeTab === tab ? "active" : ""}`}>{tab}</button>
                  ))}
                </div>
                <p>{renderContent}</p>
            </div>
        </div>
    )
}

export default Tabings