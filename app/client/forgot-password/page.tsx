"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import forgotPasswordAnimation from "./forgot-password.json";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "success">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("otp");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("success");
    } catch (err) {
      setError("Invalid verification code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background pt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column: Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto lg:ml-0 lg:mr-auto order-2 lg:order-1"
        >
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Link
                  href="/client"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <div>
                  <CardTitle>Reset Password</CardTitle>
                  <CardDescription>
                    {step === "email" && "Enter your email to reset your password"}
                    {step === "otp" && "Enter the verification code sent to your email"}
                    {step === "success" && "Password reset instructions sent"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4"
                >
                  {error}
                </motion.div>
              )}

              {step === "email" && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmitEmail}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-background focus:ring-0 focus:border-[#17D492] focus:border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#17D492] hover:bg-[#17D492]/90 text-white"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Instructions"}
                  </Button>
                </motion.form>
              )}

              {step === "otp" && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleVerifyOTP}
                  className="space-y-4"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Verification Code
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Enter the 6-digit code sent to {email}
                      </p>
                    </div>
                    <InputOTP
                      value={otp}
                      onChange={setOtp}
                      maxLength={6}
                      render={({ slots }) => (
                        <InputOTPGroup className="gap-2 justify-center">
                          {slots.map((slot, i) => (
                            <InputOTPSlot
                              key={i}
                              {...slot}
                              index={i}
                              className={cn(
                                "w-12 h-12 text-lg",
                                slot.char && "border-[#17D492]"
                              )}
                            />
                          ))}
                        </InputOTPGroup>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#17D492] hover:bg-[#17D492]/90 text-white"
                    disabled={loading || otp.length !== 6}
                  >
                    {loading ? "Verifying..." : "Verify Code"}
                  </Button>
                </motion.form>
              )}

              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-4"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#17D492]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#17D492]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Check Your Email</h3>
                    <p className="text-sm text-muted-foreground">
                      We've sent password reset instructions to {email}
                    </p>
                  </div>
                  <Button
                    onClick={() => window.location.href = "/client"}
                    className="w-full bg-[#17D492] hover:bg-[#17D492]/90 text-white"
                  >
                    Return to Login
                  </Button>
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-border pt-4">
              <div className="text-xs text-center text-muted-foreground">
                Protected by SKYBER security. &copy; {new Date().getFullYear()} SKYBER
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Right column: Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center space-y-6 order-1 lg:order-2"
        >
          <div className="w-[300px] h-[300px] flex items-center justify-center bg-background/5 rounded-xl backdrop-blur-sm">
            <Lottie
              animationData={forgotPasswordAnimation}
              loop={true}
              style={{
                width: '100%',
                height: '100%',
              }}
              className="scale-105"
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice'
              }}
            />
          </div>
          <div className="text-center max-w-md space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground">
              {step === "email" && "Forgot Your Password?"}
              {step === "otp" && "Verify Your Identity"}
              {step === "success" && "Almost There!"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {step === "email" && "Don't worry! It happens. Please enter your email address linked with your account."}
              {step === "otp" && "We've sent a verification code to your email. Please enter it to continue."}
              {step === "success" && "Check your email for instructions to reset your password and secure your account."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 