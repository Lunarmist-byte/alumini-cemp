export default function SuccessMessage() {
  // Generate a random transaction ID
  const transactionId = Math.random().toString(36).substring(2, 12).toUpperCase();
  const date = new Date().toLocaleDateString();

  return (
    <div className="w-full bg-input-bg border-2 border-ink shadow-[8px_8px_0_0_var(--text-ink)] relative transform rotate-1 transition-transform duration-500 ease-out hover:rotate-0">
      
      {/* Receipt zig-zag top edge */}
      <div className="receipt-edge w-full h-4 absolute top-[-10px] left-0"></div>

      {/* The Red Stamp */}
      <div className="absolute top-8 right-8 z-20 transform rotate-12 opacity-90 pointer-events-none">
        <div className="border-4 border-stamp text-stamp px-4 py-1 text-3xl font-black font-sans tracking-widest uppercase shadow-sm">
          APPROVED
        </div>
      </div>

      <div className="p-8 md:p-12 text-ink">
        <div className="border-b-2 border-dashed border-ink pb-6 mb-6">
          <h2 className="text-3xl font-serif font-black uppercase tracking-tighter mb-2">
            CEMP ALUMNI
          </h2>
          <p className="font-mono text-sm uppercase">Transaction Receipt</p>
        </div>
        
        <div className="space-y-4 font-mono text-sm uppercase tracking-widest text-ink mt-8">
          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span>Date:</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span>Status:</span>
            <span>Recorded</span>
          </div>
          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span>Ref ID:</span>
            <span>{transactionId}</span>
          </div>
          
          <div className="pt-8 text-center text-xs opacity-70">
            <p>WE ARE TRYING TO CONNECT WITH OUR SENIORS AND DO MORE EVENTS.</p>
            <p className="mt-2">WITH LOVE, YOUR JUNIORS &lt;3</p>
          </div>

          {/* Fake Barcode */}
          <div className="pt-8 text-center flex justify-center">
             <div className="font-barcode text-5xl tracking-widest">
                *{transactionId}*
             </div>
          </div>
        </div>
      </div>
      
      {/* Receipt zig-zag bottom edge */}
      <div className="receipt-edge w-full h-4 absolute bottom-[-10px] left-0 rotate-180"></div>
    </div>
  );
}
