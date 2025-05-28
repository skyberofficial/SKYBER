"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import Image from "next/image";
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
  CardFooter,
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
  ArrowRight,
  Calendar,
  MessageCircle,
  Eye,
  BookOpen,
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

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Cybersecurity: AI-Powered Threat Detection",
    excerpt: "Discover how artificial intelligence is revolutionizing cybersecurity threat detection and response mechanisms.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    category: "Cybersecurity",
    author: {
      name: "Alex Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    date: "2024-03-15",
    readTime: "5 min read",
    comments: 12,
    views: 1543,
  },
  {
    id: 2,
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Learn the best practices for designing and implementing scalable cloud infrastructure solutions.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    category: "Cloud Computing",
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    date: "2024-03-14",
    readTime: "7 min read",
    comments: 8,
    views: 982,
  },
  {
    id: 3,
    title: "DevOps Automation: Streamlining Workflows",
    excerpt: "Explore how DevOps automation can improve your development pipeline and increase productivity.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    category: "DevOps",
    author: {
      name: "Mike Roberts",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    date: "2024-03-13",
    readTime: "6 min read",
    comments: 15,
    views: 2341,
  },
  {
    id: 4,
    title: "Data Privacy in the Digital Age",
    excerpt: "Understanding the importance of data privacy and implementing effective protection measures.",
    image: "https://images.pexels.com/photos/5380591/pexels-photo-5380591.jpeg",
    category: "Privacy",
    author: {
      name: "Emily Parker",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    date: "2024-03-12",
    readTime: "4 min read",
    comments: 6,
    views: 876,
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "How edge computing is transforming data processing and improving application performance.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    category: "Technology",
    author: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    date: "2024-03-11",
    readTime: "8 min read",
    comments: 19,
    views: 1876,
  },
  {
    id: 6,
    title: "Securing Microservices Architecture",
    excerpt: "Best practices for implementing security in microservices-based applications.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    category: "Architecture",
    author: {
      name: "Rachel Adams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel",
    },
    date: "2024-03-10",
    readTime: "6 min read",
    comments: 10,
    views: 1234,
  },
];

const CARD_REVEAL_DELAY = 200; // ms between each card reveal

const InsightsPage = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [blogsRef, blogsInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Latest <span className="text-[#17D492]">Insights</span> & Updates
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with our latest blogs and real-time system analytics
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section
        ref={blogsRef}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={blogsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:border-[#17D492]/50 transition-colors duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="bg-[#17D492]/10 text-[#17D492] mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-[#17D492] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center text-xs">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center text-xs">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {post.comments}
                      </div>
                      <div className="flex items-center text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-6 px-6">
                  <AnimatedButton
                    variant="ghost"
                    className="w-full group/btn"
                    showArrow
                  >
                    <span className="text-[#17D492] group-hover/btn:text-[#14c082] transition-colors">
                      Read More
                    </span>
                  </AnimatedButton>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <AnimatedButton variant="outline" showArrow>
            View All Articles
          </AnimatedButton>
        </div>
      </section>

      {/* System Insights Section */}
      <section
        ref={statsRef}
        className="container mx-auto px-4 py-12 border-t border-border"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex items-center justify-center space-x-2">
            <h2 className="text-3xl font-bold">
              System <span className="text-[#17D492]">Insights</span>
            </h2>
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
          <p className="text-muted-foreground">
            Real-time monitoring and analytics for your digital infrastructure
          </p>
        </motion.div>

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

        {/* Client Reviews Section */}
        <section ref={reviewsRef} className="py-12">
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
      </section>
    </main>
  );
};

export default InsightsPage; 