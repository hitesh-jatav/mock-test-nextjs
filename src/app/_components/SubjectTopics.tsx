"use client";

import { dataPaths } from "@/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SubjectTopics = () => {
  const [tab, setTab] = useState<string>("english");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [datasets, setDatasets] = useState([]);
  const router = useRouter();

  const subs = [
    { title: "English", value: "english" },
    { title: "Quants", value: "quant" },
    { title: "Reasoning", value: "reasoning" },
  ];

  const topics = dataPaths?.[tab] ?? {};

  function formatTitle(str: string): string {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  useEffect(() => {
    setSelectedTopic(Object.keys(topics)[0] || "");
  }, [tab]);

  useEffect(() => {
    if (tab && selectedTopic) {
      setDatasets(topics[selectedTopic] || []);
    }
  }, [selectedTopic, tab]);

  const handleSetClick = (setKey: string) => {
    router.push(`/${tab}/${selectedTopic}/${setKey}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Subject Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {subs.map((sub) => (
          <button
            key={sub.value}
            onClick={() => {
              setTab(sub.value);
              setSelectedTopic("");
            }}
            className={`px-5 py-2 rounded-full text-white font-semibold shadow-md transition-colors duration-300 ${
              tab === sub.value
                ? "bg-amber-500"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {sub.title}
          </button>
        ))}
      </div>

      {/* Dropdown for Topics */}
      <div className="mb-6">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="w-full max-w-md p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {Object.keys(topics).map((topic) => (
            <option key={topic} value={topic}>
              {formatTitle(topic)}
            </option>
          ))}
        </select>
      </div>

      {/* Dataset List */}
      <div className="space-y-4">
        {Object.keys(datasets || {}).length > 0 ? (
          Object.keys(datasets).map((setKey) => (
            <div
              key={setKey}
              onClick={() => handleSetClick(setKey)}
              className="border rounded-md p-4 bg-gray-50 hover:bg-white shadow-sm cursor-pointer transition duration-150 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {formatTitle(setKey)}
              </h3>
              <p className="text-sm text-gray-600">
                {datasets[setKey]?.length || 0} Questions
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No data found for this topic.</p>
        )}
      </div>
    </div>
  );
};

export default SubjectTopics;
