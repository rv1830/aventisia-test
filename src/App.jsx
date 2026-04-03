import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import KnowledgeBase from './components/knowledge-base/KBGrid';
import CreateKBModal from './components/modals/CreateKBModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen bg-[#F0F2F5] font-sans selection:bg-primary selection:text-white transition-opacity duration-300">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col relative z-0">
          <KnowledgeBase onCreateNew={openModal} />
        </main>
      </div>

      <CreateKBModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
