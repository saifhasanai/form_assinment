'use client';

import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const fullName = searchParams.get('fullName');
  const email = searchParams.get('email');
  const age = searchParams.get('age');
  const gender = searchParams.get('gender');
  const feedback = searchParams.get('feedback');

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Submitted Information</h2>
        <div className="space-y-2">
          <p><strong>Full Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Feedback:</strong> {feedback}</p>
        </div>
      </div>
    </div>
  );
}