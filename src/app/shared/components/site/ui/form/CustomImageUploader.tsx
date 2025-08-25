"use client";

import { useState } from "react";
import { FiTrash2, FiUpload } from "react-icons/fi";
import Image from "next/image";

const CustomImageUploader: React.FC<{
  id?: string;
  label?: string;
  onChange?: (file: File | null) => void;
}> = ({ id = "imageUploader", label = "Upload Image", onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-black mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative border border-dashed border-gray-400 rounded-md p-4 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-[#337ab7]">
        {!preview ? (
          <>
            <FiUpload className="text-2xl mb-2" />
            <span className="text-sm">Click to upload</span>
            <input
              id={id}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </>
        ) : (
          <div className="relative">
            <Image
              src={preview}
              alt="Preview"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-md border"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 cursor-pointer"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomImageUploader;
