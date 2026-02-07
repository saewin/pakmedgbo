"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, BookOpen, CheckCircle, AlertCircle, FileJson, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CoursePublisherPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [result, setResult] = useState<{ success: boolean; courseId?: number; error?: string } | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setLogs([]);
            setResult(null);
        }
    };

    const handlePublish = async () => {
        if (!file) return;

        setIsProcessing(true);
        setLogs(['🚀 Starting upload...']);
        setResult(null);

        try {
            const text = await file.text();
            let json;
            try {
                json = JSON.parse(text);
            } catch (e) {
                throw new Error("Invalid JSON file format");
            }

            setLogs(prev => [...prev, `📖 Reading file: "${file.name}"...`]);
            setLogs(prev => [...prev, `📚 Found book title: "${json.title}"`]);

            const res = await fetch('/api/publish-course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            });

            const data = await res.json();

            if (data.logs) {
                setLogs(prev => [...prev, ...data.logs]);
            }

            if (data.success) {
                setResult({ success: true, courseId: data.courseId });
            } else {
                throw new Error(data.error || "Unknown error occurred");
            }

        } catch (err: any) {
            setLogs(prev => [...prev, `❌ Error: ${err.message}`]);
            setResult({ success: false, error: err.message });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 flex items-center justify-between">
                    <div>
                        <Link href="/healthscale" className="text-slate-400 hover:text-white flex items-center gap-2 mb-2 text-sm">
                            <ArrowRight className="rotate-180" size={14} /> Back to HealthScale
                        </Link>
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <BookOpen className="text-blue-500" />
                            Course Publisher Studio
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Convert E-book JSON exports directly into LearnPress Courses.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Input */}
                    <div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Upload size={20} className="text-purple-400" />
                                1. Upload E-book JSON
                            </h2>

                            <div className="relative border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-slate-800/80 transition-all cursor-pointer group">
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center justify-center gap-3 pointer-events-none">
                                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FileJson className="text-slate-400 group-hover:text-blue-400" />
                                    </div>
                                    <p className="text-slate-300 font-medium">Click to upload JSON</p>
                                    <p className="text-xs text-slate-500">From E-book Creator Studio Export</p>
                                </div>
                            </div>

                            {file && (
                                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center gap-3">
                                    <FileJson size={16} className="text-blue-400" />
                                    <span className="text-sm truncate flex-1">{file.name}</span>
                                    <span className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</span>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handlePublish}
                            disabled={!file || isProcessing}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg
                        ${!file || isProcessing
                                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20'}
                    `}
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" /> Processing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <BookOpen size={20} /> Publish to LearnPress
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Right Column: Console/Logs */}
                    <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-6 flex flex-col h-[500px]">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Operation Logs</h2>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2 p-2">
                            {logs.length === 0 && (
                                <div className="text-slate-600 italic text-center mt-20">
                                    Waiting for input...
                                </div>
                            )}
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`p-2 rounded border-l-2 ${log.includes('✅') ? 'bg-green-500/5 border-green-500 text-green-400' :
                                            log.includes('❌') ? 'bg-red-500/5 border-red-500 text-red-400' :
                                                log.includes('🚀') ? 'bg-blue-500/5 border-blue-500 text-blue-300' :
                                                    'border-slate-700 text-slate-300'
                                        }`}
                                >
                                    {log}
                                </motion.div>
                            ))}
                            {result?.success && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center"
                                >
                                    <CheckCircle className="mx-auto text-emerald-400 mb-2" size={32} />
                                    <h3 className="text-lg font-bold text-emerald-400">Success!</h3>
                                    <p className="text-emerald-200/70 mb-3">Course has been created successfully.</p>
                                    <a
                                        href={`https://selfpreneur.club/wp-admin/post.php?post=${result.courseId}&action=edit`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Edit in WordPress
                                    </a>
                                </motion.div>
                            )}
                            {result?.error && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
                                >
                                    <AlertCircle className="mx-auto text-red-400 mb-2" size={32} />
                                    <h3 className="text-lg font-bold text-red-400">Failed</h3>
                                    <p className="text-red-200/70">{result.error}</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
