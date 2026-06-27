import { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import SuccessMessage from './components/SuccessMessage';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleFormSubmit = async (data) => {
    const newTransactionId = Math.random().toString(36).substring(2, 12).toUpperCase();
    
    const submissionData = {
      ...data,
      ref_id: newTransactionId
    };

    if (!supabase) {
      console.warn("Supabase keys not found in environment variables. Simulating submission:");
      console.log(submissionData);
      setTransactionId(newTransactionId);
      setIsSubmitted(true);
      return;
    }

    try {
      const { error } = await supabase
        .from('alumni_registrations')
        .insert([submissionData]);

      if (error) {
        console.error("Supabase Insertion Error:", error);
        alert("Failed to record submission. Please check the database connection.");
        return;
      }
      
      setTransactionId(newTransactionId);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink selection:bg-accent selection:text-white transition-colors duration-300 relative">
      
      <div className="bg-noise"></div>

      <header className="border-b-2 border-ink py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-baseline gap-4 relative z-10 bg-paper">
        <h1 className="text-4xl font-serif font-black text-ink tracking-tighter uppercase">
          CEMP Alumni
        </h1>
        <div className="flex items-center gap-6">
          <div className="text-sm font-mono text-ink tracking-widest hidden md:block uppercase font-bold">
            DOC_REF: ALM-2026
          </div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-xs font-mono font-bold border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            {isDark ? 'LIGHT MODE' : 'DARK MODE'}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-16 relative z-10">
        <div className="w-full max-w-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
          {!isSubmitted ? (
            <RegistrationForm onSubmit={handleFormSubmit} />
          ) : (
            <SuccessMessage transactionId={transactionId} />
          )}
        </div>
      </main>

      <footer className="border-t-2 border-ink py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono font-bold uppercase relative z-10 bg-paper">
        <div className="flex flex-col">
          <span>ARCHIVE NO: <span className="text-ink">77X-B</span></span>
          <span>AUTHOR: <span className="text-ink">LUNARMIST-BYTE</span></span>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/Lunarmist-byte" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/amal-s-kumar-ba69a1290/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
