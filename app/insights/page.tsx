"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  CheckCircle,
  Server,
  Users,
  Star,
  TrendingUp,
  Shield,
  Clock,
  RefreshCw,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

// Mock data for demonstration
const systemStatus = {
  uptime: 99.99,
  responseTime: 120, // ms
  activeUsers: 1243,
  completedProjects: 156,
  happyClients: 142,
  systemHealth: 98,
  securityScore: 95,
};

// Mock data for charts
const userActivityData = [
  { name: "Mon", users: 1200 },
  { name: "Tue", users: 1350 },
  { name: "Wed", users: 1500 },
  { name: "Thu", users: 1243 },
  { name: "Fri", users: 1400 },
  { name: "Sat", users: 1150 },
  { name: "Sun", users: 1000 },
];

const securityChecksData = [
  { name: "Jan", checks: 2400 },
  { name: "Feb", checks: 1398 },
  { name: "Mar", checks: 9800 },
  { name: "Apr", checks: 3908 },
  { name: "May", checks: 4800 },
  { name: "Jun", checks: 3800 },
];

const performanceData = [
  { name: "00:00", value: 95 },
  { name: "04:00", value: 98 },
  { name: "08:00", value: 92 },
  { name: "12:00", value: 96 },
  { name: "16:00", value: 97 },
  { name: "20:00", value: 94 },
];

const reviews = [
  {
    name: "John Smith",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment: "Exceptional service and outstanding security measures!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    name: "Sarah Johnson",
    company: "Digital Innovations",
    rating: 5,
    comment: "The analytics insights have been invaluable for our business.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    company: "Global Systems",
    rating: 5,
    comment: "Best-in-class cybersecurity solutions and support.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
];

const CARD_REVEAL_DELAY = 200; // ms between each card reveal

const InsightsPage = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [chartsRef, chartsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [reviewsRef, reviewsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [stats, setStats] = useState(systemStatus);
  const [chartData, setChartData] = useState({
    userActivity: userActivityData,
    securityChecks: securityChecksData,
    performance: performanceData,
  });

  const refreshData = async () => {
    setIsRefreshing(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Update stats with random variations
    setStats({
      ...stats,
      uptime: Math.min(100, stats.uptime + (Math.random() * 0.2 - 0.1)),
      responseTime: Math.max(80, Math.min(200, stats.responseTime + (Math.random() * 20 - 10))),
      activeUsers: Math.max(1000, Math.min(2000, stats.activeUsers + Math.floor(Math.random() * 200 - 100))),
      systemHealth: Math.min(100, Math.max(90, stats.systemHealth + (Math.random() * 4 - 2))),
      securityScore: Math.min(100, Math.max(90, stats.securityScore + (Math.random() * 4 - 2))),
    });

    // Update chart data with random variations
    setChartData({
      userActivity: userActivityData.map(item => ({
        ...item,
        users: Math.max(800, Math.min(2000, item.users + Math.floor(Math.random() * 300 - 150))),
      })),
      securityChecks: securityChecksData.map(item => ({
        ...item,
        checks: Math.max(1000, Math.min(10000, item.checks + Math.floor(Math.random() * 1000 - 500))),
      })),
      performance: performanceData.map(item => ({
        ...item,
        value: Math.max(90, Math.min(100, item.value + (Math.random() * 4 - 2))),
      })),
    });

    // Add a slight delay before removing loading state
    setTimeout(() => {
      setIsRefreshing(false);
    }, 100);
  };

  const renderCard = (index: number, content: React.ReactNode) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={statsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: isRefreshing ? index * 0.2 : index * 0.1 }}
      className="h-full"
    >
      <Card className="relative overflow-hidden h-full">
        <motion.div
          initial={isRefreshing ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: isRefreshing ? 1.5 + index * 0.1 : 0
          }}
        >
          {content}
        </motion.div>
        <AnimatePresence>
          {isRefreshing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10"
            >
              <Spinner size="lg" className="text-[#17D492]" />
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );

  const renderCardContent = (
    title: string,
    icon: React.ReactNode,
    description: string,
    content: React.ReactNode
  ) => (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {icon}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {content}
        </div>
      </CardContent>
    </>
  );

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Header Section */}
      <section
        ref={headerRef}
        className="container mx-auto px-4 py-12 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="flex items-center justify-center space-x-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              System <span className="text-[#17D492]">Insights</span> & Analytics
            </h1>
            <AnimatedButton
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={refreshData}
              disabled={isRefreshing}
            >
              <RefreshCw className={cn(
                "h-5 w-5 text-[#17D492]",
                isRefreshing && "animate-spin"
              )} />
            </AnimatedButton>
          </div>
          <p className="text-lg text-muted-foreground">
            Real-time monitoring and analytics for your digital infrastructure
          </p>
        </motion.div>
      </section>

      {/* System Status Grid */}
      <section
        ref={statsRef}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* System Health Card */}
          {renderCard(0, renderCardContent(
            "System Health",
            <Activity className="h-5 w-5 text-[#17D492]" />,
            "Overall system performance",
            <>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  <CountUp end={stats.systemHealth} duration={2} suffix="%" />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  Excellent
                </Badge>
              </div>
              <Progress value={stats.systemHealth} className="h-2" />
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData.performance}>
                    <defs>
                      <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#17D492" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#17D492" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#17D492"
                      fill="url(#performanceGradient)"
                    />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}

          {/* Server Status Card */}
          {renderCard(1, renderCardContent(
            "Server Status",
            <Server className="h-5 w-5 text-[#17D492]" />,
            "Current server performance",
            <>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  <CountUp end={stats.uptime} duration={2} decimals={2} suffix="%" />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  Operational
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Response Time: <CountUp end={stats.responseTime} duration={2} suffix="ms" />
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData.securityChecks}>
                    <Line
                      type="monotone"
                      dataKey="checks"
                      stroke="#17D492"
                      strokeWidth={2}
                      dot={false}
                    />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}

          {/* Security Score Card */}
          {renderCard(2, renderCardContent(
            "Security Score",
            <Shield className="h-5 w-5 text-[#17D492]" />,
            "System security status",
            <>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  <CountUp end={stats.securityScore} duration={2} suffix="%" />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  Protected
                </Badge>
              </div>
              <Progress value={stats.securityScore} className="h-2" />
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.securityChecks}>
                    <Bar dataKey="checks" fill="#17D492" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}

          {/* Active Users Card */}
          {renderCard(3, renderCardContent(
            "Active Users",
            <Users className="h-5 w-5 text-[#17D492]" />,
            "Current active users",
            <>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  <CountUp end={stats.activeUsers} duration={2} />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  Online
                </Badge>
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData.userActivity}>
                    <defs>
                      <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#17D492" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#17D492" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#17D492"
                      fill="url(#userGradient)"
                    />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}

          {/* Projects Card */}
          {renderCard(4, renderCardContent(
            "Completed Projects",
            <CheckCircle className="h-5 w-5 text-[#17D492]" />,
            "Total completed projects",
            <>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  <CountUp end={stats.completedProjects} duration={2} />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  Success
                </Badge>
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData.performance}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#17D492"
                      strokeWidth={2}
                      dot={false}
                    />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}

          {/* Happy Clients Card */}
          {renderCard(5, renderCardContent(
            "Happy Clients",
            <Star className="h-5 w-5 text-[#17D492]" />,
            "Satisfied customers",
            <>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  <CountUp end={stats.happyClients} duration={2} />
                </span>
                <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492]">
                  5.0 Rating
                </Badge>
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.userActivity}>
                    <Bar dataKey="users" fill="#17D492" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Client Reviews Section */}
      <section
        ref={reviewsRef}
        className="container mx-auto px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Reviews</h2>
          <p className="text-muted-foreground">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#17D492] text-[#17D492]"
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-sm">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <AnimatedButton variant="outline" showArrow>
            View All Reviews
          </AnimatedButton>
        </motion.div>
      </section>
    </main>
  );
};

export default InsightsPage; 