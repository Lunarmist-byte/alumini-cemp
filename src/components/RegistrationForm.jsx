import { useState } from 'react';

export default function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    phone: '',
    email: '',
    job: '',
    workplace: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col bg-input-bg border-2 border-ink shadow-[8px_8px_0_0_var(--text-ink)] relative">
      
      {/* Decorative staple/clip mark */}
      <div className="absolute -top-4 left-8 w-12 h-6 border-2 border-ink/40 rounded-full transform -rotate-12 bg-gray-400/20 shadow-sm z-20"></div>
      
      <div className="p-8 border-b-2 border-ink bg-paper text-ink transition-colors duration-300">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-serif font-black uppercase tracking-tighter">Registration Form</h2>
          <span className="font-mono text-xs border border-ink px-2 py-1 transform rotate-3">REV. 2</span>
        </div>
        <p className="text-xs font-mono mt-4 font-bold border-t border-ink pt-2 w-max">PLEASE FILL OUT ALL FIELDS IN BLOCK CAPITALS.</p>
      </div>

      <div className="flex flex-col bg-input-bg transition-colors duration-300">
        
        {/* Full Name */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Full Name
          </label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="John Doe"
          />
        </div>

        {/* Grad Year */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Graduation Year
          </label>
          <input type="number" name="year" required min="1990" max="2030" value={formData.year} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="2023"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Phone (WhatsApp)
          </label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="+91 XXXXXXXXXX"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Email Address
          </label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="john@example.com"
          />
        </div>

        {/* Job */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Current Title
          </label>
          <input type="text" name="job" required value={formData.job} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="Software Engineer"
          />
        </div>

        {/* Workplace */}
        <div className="flex flex-col md:flex-row border-b-2 border-ink">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Company
          </label>
          <input type="text" name="workplace" required value={formData.workplace} onChange={handleChange}
            className="w-full md:w-2/3 bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 border-t-2 md:border-t-0 border-ink"
            placeholder="Tech Corp Inc."
          />
        </div>

        {/* Department */}
        <div className="flex flex-col md:flex-row">
          <label className="w-full md:w-1/3 p-4 md:p-6 text-sm font-bold uppercase md:border-r-2 border-ink bg-paper flex items-center transition-colors duration-300">
            Department
          </label>
          <div className="w-full md:w-2/3 relative border-t-2 md:border-t-0 border-ink transition-colors duration-300">
            <select name="department" required value={formData.department} onChange={handleChange}
              className="w-full bg-input-bg text-ink font-mono text-xl p-4 md:p-6 focus:bg-accent focus:text-white transition-colors duration-150 cursor-pointer appearance-none"
            >
              <option value="" disabled>SELECT DEPARTMENT...</option>
              <option value="Computer Science">COMPUTER SCIENCE</option>
              <option value="Electronics & Communication">ELECTRONICS & COMMUNICATION</option>
              <option value="Electrical & Electronics">ELECTRICAL & ELECTRONICS</option>
              <option value="Mechanical">MECHANICAL</option>
              <option value="Civil">CIVIL</option>
              <option value="Other">OTHER</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-ink">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>
        </div>

      </div>

      <button type="submit" 
        className="w-full p-6 border-t-2 border-ink bg-accent text-white font-bold text-2xl uppercase tracking-wider hover:bg-ink transition-colors duration-200">
        Submit Document
      </button>
    </form>
  );
}
