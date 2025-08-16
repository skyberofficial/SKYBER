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
import Image from "next/image";

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
                  <div className="grid grid-cols-[auto,1fr] items-center gap-2 w-full">
                    <label htmlFor="role" className="text-sm font-bold text-foreground whitespace-nowrap tracking-wide">
                      I AM A
                    </label>
                    <Select
                      value={role}
                      onValueChange={setRole}
                    >
                      <SelectTrigger className="w-full bg-background focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
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
              <Image
                src="/favicon.svg"
                alt="SKYBER Logo"
                width={120}
                height={120}
                className="text-[#17D492] mb-6"
              />
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