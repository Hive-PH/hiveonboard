import React, { useState } from "react";

export function IframeRenderer() {
  const [url, setUrl] = useState<string>('');
  const [iframeUrl, setIframeUrl] = useState<string>('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleRender = () => {
    setIframeUrl(url);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">URL Renderer</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
            className="border border-gray-300 text-gray-700 rounded px-4 py-2 w-full"
          />
          <button
            onClick={handleRender}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Open
          </button>
        </div>
      </div>
      {iframeUrl && (
        <div className="flex-grow">
          <iframe
            src={iframeUrl}
            title="Rendered Content"
            className="w-full h-full border border-gray-300"
          ></iframe>
        </div>
      )}
    </div>
  );
};
