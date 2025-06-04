'use client';

import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Textify</h1>
        
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer text-blue-500 hover:text-blue-600"
            >
              {image ? 'Change Image' : 'Upload Image'}
            </label>
          </div>

          {image && (
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-w-full h-auto rounded-lg"
                />
                {text && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-4xl font-bold text-white drop-shadow-lg">
                      {text}
                    </p>
                  </div>
                )}
              </div>

              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to display"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}