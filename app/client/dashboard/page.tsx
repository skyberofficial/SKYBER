"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  CheckCircle, 
  Clock, 
  FileText, 
  Home, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  User 
} from "lucide-react";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  
  // To handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 375 375"
              className="text-[#17D492]"
            >
              <path
                fill="currentColor"
                d="M328.512 185.605h-54.512c-10.031 0-18.168 8.141-18.168 18.172v54.512c0 .324.07.629.094.945l-47.399 47.399h-26.312l-33.18-33.18c.535-1.984.899-4.031.899-6.188v-72.683c0-2.157-.376-4.204-.899-6.192l18.122-18.121c.316.012.62.098.945.098h54.512c10.03 0 18.172-8.14 18.172-18.172V97.684c0-10.028-8.141-18.169-18.172-18.169h-54.512c-.324 0-.629.07-.945.094l-28.551-28.551V19.723c0-6.688-5.426-12.117-12.114-12.117H90.152c-6.687 0-12.113 5.43-12.113 12.117v36.34c0 6.687 5.426 12.113 12.113 12.113h31.325l28.55 28.55c-.011.317-.093.633-.093.946v54.511c0 .328.07.63.094.946l-18.121 18.121c-1.985-.532-4.047-.895-6.203-.895H53.035c-13.387 0-24.226 10.84-24.226 24.227v72.684c0 13.383 10.84 24.226 24.226 24.226h72.684c2.156 0 4.203-.375 6.199-.898l33.168 33.168v31.328c0 6.684 5.426 12.114 12.114 12.114h36.344c6.683 0 12.113-5.43 12.113-12.114v-31.328l47.41-47.414c.316.015.621.097.945.097h54.512c10.031 0 18.172-8.14 18.172-18.168v-54.512c0-10.031-8.141-18.172-18.172-18.172z"
              />
            </svg>
            <span className="font-bold text-xl text-foreground">SKYBER</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/client/dashboard" className="flex items-center px-4 py-3 text-foreground bg-primary/10 rounded-lg">
            <LayoutDashboard className="mr-3 h-5 w-5 text-primary" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
            <FileText className="mr-3 h-5 w-5" />
            Projects
          </Link>
          <Link href="#" className="flex items-center px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
            <MessageSquare className="mr-3 h-5 w-5" />
            Messages
          </Link>
          <Link href="#" className="flex items-center px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
            <BarChart className="mr-3 h-5 w-5" />
            Analytics
          </Link>
          <Link href="#" className="flex items-center px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Demo User</p>
              <p className="text-xs text-muted-foreground">demo@skyber.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Top navigation */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Site
                </Button>
              </Link>
              <Link href="/client">
                <Button variant="destructive" size="sm">Sign Out</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
                <div className="text-2xl font-bold">3</div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary inline-flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" /> All on track
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Milestones</CardTitle>
                <div className="text-2xl font-bold">5</div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-amber-500 inline-flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 2 due this week
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
                <div className="text-2xl font-bold">7</div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 3 new today
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Tabs defaultValue="projects">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                  <TabsTrigger value="files">Files</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Projects</CardTitle>
                    <CardDescription>Overview of your current projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {['Website Redesign', 'Mobile App Development', 'Security System Implementation'].map((project, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                          <div>
                            <h3 className="font-medium">{project}</h3>
                            <p className="text-sm text-muted-foreground">Last updated: Today</p>
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        'Document uploaded: project_requirements.pdf',
                        'Meeting scheduled for Friday, 2:00 PM',
                        'Invoice #1234 paid',
                        'Comment added to Website Redesign project'
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center p-3 border-b border-border last:border-0">
                          <div className="mr-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm">{activity}</p>
                            <p className="text-xs text-muted-foreground">2 hours ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="files">
                <Card>
                  <CardHeader>
                    <CardTitle>Files</CardTitle>
                    <CardDescription>Your recent files and documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        'project_brief.docx', 
                        'design_mockups.zip', 
                        'budget_estimation.xlsx', 
                        'contract.pdf'
                      ].map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border-b border-border last:border-0">
                          <div className="flex items-center">
                            <div className="mr-4 h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                              <FileText className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm">{file}</p>
                              <p className="text-xs text-muted-foreground">Added on Jun 15, 2023</p>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost">Download</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
} 