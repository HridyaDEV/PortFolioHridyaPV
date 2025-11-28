import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <div>

    <h1 className='text-sky-400 font-["crimson"] font-semibold text-[32px] mt-25 '>
          - Get In Touch
        </h1>
    <div className="p-6 flex justify-center items-center mt-10">
      <div className="w-[380px] border border-sky-400 rounded-[20px] px-6 py-4 bg-slate-900">

        

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">

          <div className="flex flex-col">
            <label className="font-medium font-['crimson'] text-slate-200">Name</label>
            <input
              type="text"
              name="name"
              className="border p-2 rounded-xl border-sky-400 mt-4 bg-[#252C3D]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium font-['crimson'] text-slate-200">Email</label>
            <input
              type="email"
              name="email"
              className="border p-2 rounded-xl border-sky-400 mt-4 bg-[#252C3D]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium font-['crimson'] text-slate-200">Message</label>
            <textarea
              name="message"
              className="border p-2 rounded-xl border-sky-400 mt-4 bg-[#252C3D]"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* centered small button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-sky-400 text-slate-200 font-['crimson'] py-1 px-6 rounded-[10px] shadow hover:bg-sky-500 transition"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </div>
        </div>

  );
};

export default Contact;
