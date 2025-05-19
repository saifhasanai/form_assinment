// 'use client';
//
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
//
// export default function Home() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     age: '',
//     gender: '',
//     feedback: ''
//   });
//
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };
//
//   const validate = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email format';
//     const age = Number(formData.age);
//     if (!formData.age || isNaN(age) || age < 10 || age > 100) newErrors.age = 'Age must be between 10 and 100';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       const query = new URLSearchParams(formData).toString();
//       router.push(`/success?${query}`);
//     }
//   };
//
//   const handleReset = () => {
//     setFormData({ fullName: '', email: '', age: '', gender: '', feedback: '' });
//     setErrors({});
//   };
//
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
//
//         <label className="block mb-2">Full Name</label>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="w-full border border-gray-300 p-2 mb-1"
//         />
//         {errors.fullName && <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>}
//
//         <label className="block mb-2">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border border-gray-300 p-2 mb-1"
//         />
//         {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
//
//         <label className="block mb-2">Age</label>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           className="w-full border border-gray-300 p-2 mb-1"
//         />
//         {errors.age && <p className="text-red-500 text-sm mb-2">{errors.age}</p>}
//
//         <label className="block mb-2">Gender</label>
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="w-full border border-gray-300 p-2 mb-1"
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         {errors.gender && <p className="text-red-500 text-sm mb-2">{errors.gender}</p>}
//
//         <label className="block mb-2">Feedback</label>
//         <textarea
//           name="feedback"
//           value={formData.feedback}
//           onChange={handleChange}
//           className="w-full border border-gray-300 p-2 mb-4"
//         ></textarea>
//
//         <div className="flex justify-between">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//           <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
//         </div>
//       </form>
//     </div>
//   );
// }
//
// 'use client';
//
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
//
// export default function Home() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     age: '',
//     gender: '',
//     feedback: ''
//   });
//
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };
//
//   const validate = () => {
//     const newErrors: { [key: string]: string } = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^[\w-.]+@([\w-]+\\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email format';
//     const age = Number(formData.age);
//     if (!formData.age || isNaN(age) || age < 10 || age > 100) newErrors.age = 'Age must be between 10 and 100';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       const query = new URLSearchParams(formData).toString();
//       router.push(`/success?${query}`);
//     }
//   };
//
//   const handleReset = () => {
//     setFormData({ fullName: '', email: '', age: '', gender: '', feedback: '' });
//     setErrors({});
//   };
//
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl space-y-4">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Feedback Form</h2>
//
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//           </div>
//
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>
//
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Age</label>
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
//           </div>
//
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
//           </div>
//         </div>
//
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Feedback</label>
//           <textarea
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             rows={4}
//             className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//         </div>
//
//         <div className="flex justify-between mt-6">
//           <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
//             Submit
//           </button>
//           <button type="button" onClick={handleReset} className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded shadow">
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    feedback: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email format';
    const age = Number(formData.age);
    if (!formData.age || isNaN(age) || age < 10 || age > 100) newErrors.age = 'Age must be between 10 and 100';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const query = new URLSearchParams(formData).toString();
      router.push(`/success?${query}`);
    }
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', age: '', gender: '', feedback: '' });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
    >
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">Feedback Form</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Feedback</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={4}
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
