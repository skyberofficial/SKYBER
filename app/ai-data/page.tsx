'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Database, 
  Shield, 
  Code, 
  Globe,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DataEntry {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  priority: 'low' | 'medium' | 'high';
  lastUpdated: Date;
  isActive: boolean;
}

const categories = [
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'bg-red-500' },
  { id: 'web-development', name: 'Web Development', icon: Code, color: 'bg-blue-500' },
  { id: 'app-development', name: 'App Development', icon: Code, color: 'bg-green-500' },
  { id: 'tech-consultancy', name: 'Tech Consultancy', icon: Users, color: 'bg-purple-500' },
  { id: 'ui-ux', name: 'UI/UX Design', icon: Globe, color: 'bg-yellow-500' },
  { id: 'general', name: 'General Tech', icon: Database, color: 'bg-gray-500' }
];

export default function AIDataPage() {
  const [dataEntries, setDataEntries] = useState<DataEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingEntry, setEditingEntry] = useState<DataEntry | null>(null);
  const [entryCounter, setEntryCounter] = useState(0);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    category: 'general',
    tags: '',
    priority: 'medium' as const
  });

  useEffect(() => {
    const sampleData: DataEntry[] = [
      {
        id: '1',
        title: 'Cybersecurity Best Practices',
        content: 'Implement multi-factor authentication, regular security updates, employee training, and incident response planning.',
        category: 'cybersecurity',
        tags: ['security', 'authentication', 'training'],
        priority: 'high',
        lastUpdated: new Date(),
        isActive: true
      },
      {
        id: '2',
        title: 'Modern Web Development Stack',
        content: 'Use Next.js for server-side rendering, TypeScript for type safety, Tailwind CSS for styling.',
        category: 'web-development',
        tags: ['nextjs', 'typescript', 'tailwind'],
        priority: 'high',
        lastUpdated: new Date(),
        isActive: true
      }
    ];
    setDataEntries(sampleData);
  }, []);

  const filteredEntries = dataEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addNewEntry = () => {
    if (!newEntry.title || !newEntry.content) return;

    const entry: DataEntry = {
      id: `entry-${entryCounter}-${Date.now()}`,
      title: newEntry.title,
      content: newEntry.content,
      category: newEntry.category,
      tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      priority: newEntry.priority,
      lastUpdated: new Date(),
      isActive: true
    };

    setEntryCounter(prev => prev + 1);
    setDataEntries(prev => [...prev, entry]);
    setNewEntry({ title: '', content: '', category: 'general', tags: '', priority: 'medium' });
    setIsAddingNew(false);
  };

  const updateEntry = () => {
    if (!editingEntry) return;
    setDataEntries(prev => prev.map(entry => 
      entry.id === editingEntry.id 
        ? { ...editingEntry, lastUpdated: new Date() }
        : entry
    ));
    setEditingEntry(null);
  };

  const deleteEntry = (id: string) => {
    setDataEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const toggleEntryStatus = (id: string) => {
    setDataEntries(prev => prev.map(entry => 
      entry.id === id ? { ...entry, isActive: !entry.isActive } : entry
    ));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Knowledge Base
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Manage the knowledge base that powers LUMI AI responses
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="flex-1 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search knowledge base..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900/50 border-[#17D492]/20 text-white placeholder-gray-400"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-[#17D492]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#17D492]/50"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-[#17D492] hover:bg-[#14c082] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Entry
          </Button>
        </motion.div>

        {/* Add New Entry Modal */}
        {isAddingNew && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl p-6 w-full max-w-2xl border border-[#17D492]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Add New Knowledge Entry</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAddingNew(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Entry title..."
                  value={newEntry.title}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Textarea
                  placeholder="Detailed content..."
                  value={newEntry.content}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={newEntry.category}
                    onChange={(e) => setNewEntry(prev => ({ ...prev, category: e.target.value }))}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                  <select
                    value={newEntry.priority}
                    onChange={(e) => setNewEntry(prev => ({ ...prev, priority: e.target.value as any }))}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <Input
                  placeholder="Tags (comma-separated)"
                  value={newEntry.tags}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, tags: e.target.value }))}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <div className="flex gap-2 pt-4">
                  <Button onClick={addNewEntry} className="bg-[#17D492] hover:bg-[#14c082] text-white flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Save Entry
                  </Button>
                  <Button variant="outline" onClick={() => setIsAddingNew(false)} className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className={`bg-gray-900/50 border-[#17D492]/20 ${!entry.isActive ? 'opacity-60' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${categories.find(cat => cat.id === entry.category)?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                        {React.createElement(categories.find(cat => cat.id === entry.category)?.icon || Database, { className: 'w-5 h-5 text-white' })}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={`${entry.priority === 'high' ? 'bg-red-100 text-red-800' : entry.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                            {entry.priority}
                          </Badge>
                          <Badge variant="outline" className="border-[#17D492]/20 text-[#17D492]">
                            {categories.find(cat => cat.id === entry.category)?.name}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingEntry(entry)}
                        className="text-gray-400 hover:text-[#17D492]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleEntryStatus(entry.id)}
                        className="text-gray-400 hover:text-green-400"
                      >
                        {entry.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteEntry(entry.id)}
                        className="text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{entry.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">
                      Updated: {entry.lastUpdated.toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
