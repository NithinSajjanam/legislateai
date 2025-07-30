import React, { useState, useEffect } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { FileText, Search, Upload, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [jurisdiction, setJurisdiction] = useState('India');
  const [results, setResults] = useState(null);
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSearch = async () => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, jurisdiction })
    });
    const data = await res.json();
    setResults(data);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setFile(file);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/analyze', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    setAnalysis(data);
  };

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-navy-900 dark:text-yellow-400">LegislateAI Dashboard</h1>
        <Button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Legal Query Section */}
        <Card className="shadow-lg dark:bg-gray-800 rounded-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Ask a Legal Question</h2>
            <div className="relative">
              <Input
                placeholder="e.g. What are my rights as a tenant in Delhi?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-10"
              />
              <Search size={18} className="absolute right-3 top-3 text-gray-400" />
            </div>
            <select
              className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
              value={jurisdiction}
              onChange={(e) => setJurisdiction(e.target.value)}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
            <Button onClick={handleSearch} className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              <Search size={18} /> Search
            </Button>
            {results && (
              <motion.div
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <h3 className="font-bold text-lg mb-2">Answer:</h3>
                <p className="text-sm">{results.simple_summary}</p>
                <details className="mt-2">
                  <summary className="cursor-pointer">Detailed Explanation</summary>
                  <p className="text-sm mt-1">{results.detailed_summary}</p>
                </details>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Document Upload Section */}
        <Card className="shadow-lg dark:bg-gray-800 rounded-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Upload Legal Document</h2>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-navy-900 dark:border-yellow-400 p-4 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <Upload size={20} />
              <input type="file" accept=".pdf" hidden onChange={handleFileUpload} />
              <span className="text-sm">Click or drag PDF here</span>
            </label>
            {file && <p className="text-sm mt-2">Uploaded: {file.name}</p>}
            {analysis && (
              <motion.div
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <h3 className="font-bold text-lg mb-2">Document Analysis:</h3>
                <ul className="text-sm list-disc ml-4">
                  {analysis.clauses.map((clause, i) => (
                    <li key={i}>{clause.summary}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
