"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClientLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [role, setRole] = useState("client");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // This is a placeholder for actual authentication logic
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo validation - in production this would be replaced with a real API call
      if (email === "demo@skyber.com" && password === "password") {
        // Validate department ID for employees
        if (role === "employee" && !departmentId) {
          setError("Department ID is required for employee login");
          setLoading(false);
          return;
        }
        
        // Redirect based on role
        if (role === "employee") {
          router.push("/employee/dashboard");
        } else {
          router.push("/client/dashboard");
        }
      } else {
        setError(`Invalid email or password. Try demo@skyber.com / password as ${role}`);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background pt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column: Login Form */}
        <div className="w-full max-w-md mx-auto lg:ml-0 lg:mr-auto order-2 lg:order-1">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                    {error}
                  </div>
                )}
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="role" className="text-sm font-bold text-foreground whitespace-nowrap tracking-wide">
                      I AM A
                    </label>
                    <Select
                      value={role}
                      onValueChange={setRole}
                    >
                      <SelectTrigger className="bg-background focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="client">Client</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {role === "employee" && (
                  <div className="space-y-1">
                    <label htmlFor="departmentId" className="block text-sm font-medium text-foreground">
                      Department ID
                    </label>
                    <div className="flex">
                      <div className="bg-muted/50 text-foreground text-sm flex items-center px-3 border border-r-0 rounded-l-md border-input">
                        SKBB9
                      </div>
                      <Input
                        id="departmentId"
                        name="departmentId"
                        type="text"
                        required
                        value={departmentId}
                        onChange={(e) => setDepartmentId(e.target.value)}
                        className="bg-background focus:ring-0 focus:border-[#17D492] focus:border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none rounded-l-none"
                        placeholder="Enter department code"
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background focus:ring-0 focus:border-[#17D492] focus:border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background pr-10 focus:ring-0 focus:border-[#17D492] focus:border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-border text-primary focus:ring-primary/50"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/client/forgot-password" className="text-primary hover:text-primary/90">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#17D492] hover:bg-[#17D492]/90 text-white"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : `Sign in as ${role === 'client' ? 'Client' : 'Employee'}`}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-border pt-4">
              <div className="text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link href="/client/contact" className="text-primary hover:text-primary/90">
                  Contact us
                </Link>
              </div>
              <div className="text-xs text-center text-muted-foreground">
                Protected by SKYBER security. &copy; {new Date().getFullYear()} SKYBER
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Right column: Logo and brand info */}
        <div className="flex flex-col items-center justify-center space-y-6 order-1 lg:order-2">
          <Link href="/" className="inline-block">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 375 375"
                className="text-[#17D492] mb-6"
              >
                <path
                  fill="currentColor"
                  d="M328.512 185.605h-54.512c-10.031 0-18.168 8.141-18.168 18.172v54.512c0 .324.07.629.094.945l-47.399 47.399h-26.312l-33.18-33.18c.535-1.984.899-4.031.899-6.188v-72.683c0-2.157-.376-4.204-.899-6.192l18.122-18.121c.316.012.62.098.945.098h54.512c10.03 0 18.172-8.14 18.172-18.172V97.684c0-10.028-8.141-18.169-18.172-18.169h-54.512c-.324 0-.629.07-.945.094l-28.551-28.551V19.723c0-6.688-5.426-12.117-12.114-12.117H90.152c-6.687 0-12.113 5.43-12.113 12.117v36.34c0 6.687 5.426 12.113 12.113 12.113h31.325l28.55 28.55c-.011.317-.093.633-.093.946v54.511c0 .328.07.63.094.946l-18.121 18.121c-1.985-.532-4.047-.895-6.203-.895H53.035c-13.387 0-24.226 10.84-24.226 24.227v72.684c0 13.383 10.84 24.226 24.226 24.226h72.684c2.156 0 4.203-.375 6.199-.898l33.168 33.168v31.328c0 6.684 5.426 12.114 12.114 12.114h36.344c6.683 0 12.113-5.43 12.113-12.114v-31.328l47.41-47.414c.316.015.621.097.945.097h54.512c10.031 0 18.172-8.14 18.172-18.168v-54.512c0-10.031-8.141-18.172-18.172-18.172z"
                />
              </svg>
              <span className="text-4xl font-bold text-foreground">SKYBER</span>
            </div>
          </Link>
          <div className="text-center max-w-md space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground">Client Portal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Secure access to your projects and services with our dedicated portal. Monitor progress, access files, and communicate with your team all in one place.
            </p>
            <div className="pt-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#17D492]"></div>
                <div className="w-2 h-2 rounded-full bg-[#17D492]/70"></div>
                <div className="w-2 h-2 rounded-full bg-[#17D492]/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 