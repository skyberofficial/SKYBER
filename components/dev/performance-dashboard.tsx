"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Zap, 
  Clock, 
  Cpu, 
  Network, 
  X,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  renderCount: number;
  lastRenderTime: number;
  averageRenderTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkRequests: number;
}

interface WDYRLog {
  componentName: string;
  reason: string;
  timestamp: number;
  propsChanged: boolean;
  stateChanged: boolean;
}

export const PerformanceDashboard = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderCount: 0,
    lastRenderTime: 0,
    averageRenderTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkRequests: 0
  });
  const [wdyrLogs, setWdyrLogs] = useState<WDYRLog[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Only show in development with WDYR enabled
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      setIsVisible(true);
      
      // Simulate performance monitoring
      const interval = setInterval(() => {
        setMetrics(prev => ({
          renderCount: prev.renderCount + Math.floor(Math.random() * 5),
          lastRenderTime: Math.random() * 100,
          averageRenderTime: prev.averageRenderTime + Math.random() * 2,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100,
          networkRequests: prev.networkRequests + Math.floor(Math.random() * 3)
        }));
      }, 2000);

      // Simulate WDYR logs
      const logInterval = setInterval(() => {
        const newLog: WDYRLog = {
          componentName: ['Hero', 'Services', 'About', 'Contact'][Math.floor(Math.random() * 4)],
          reason: ['Props changed', 'State changed', 'Parent re-render', 'Context update'][Math.floor(Math.random() * 4)],
          timestamp: Date.now(),
          propsChanged: Math.random() > 0.5,
          stateChanged: Math.random() > 0.5
        };
        setWdyrLogs(prev => [newLog, ...prev.slice(0, 9)]);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }
  }, []);

  const getPerformanceColor = (value: number) => {
    if (value < 30) return 'text-green-500';
    if (value < 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceStatus = (value: number) => {
    if (value < 30) return { icon: CheckCircle, color: 'text-green-500', text: 'Excellent' };
    if (value < 70) return { icon: AlertTriangle, color: 'text-yellow-500', text: 'Good' };
    return { icon: AlertTriangle, color: 'text-red-500', text: 'Needs Attention' };
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 w-80"
      >
        <Card className="bg-background/95 backdrop-blur-md border-border shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#17D492]" />
                <CardTitle className="text-lg">Performance Monitor</CardTitle>
                <Badge variant="secondary" className="text-xs">WDYR</Badge>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 p-0"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CardContent className="space-y-4">
                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Performance Metrics
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Render Count</span>
                          <span className={getPerformanceColor(metrics.renderCount)}>
                            {metrics.renderCount}
                          </span>
                        </div>
                        <Progress value={Math.min(metrics.renderCount / 10, 100)} className="h-1" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Avg Render Time</span>
                          <span className={getPerformanceColor(100 - metrics.averageRenderTime)}>
                            {metrics.averageRenderTime.toFixed(1)}ms
                          </span>
                        </div>
                        <Progress value={100 - metrics.averageRenderTime} className="h-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-muted rounded">
                        <Cpu className="w-3 h-3 mx-auto mb-1" />
                        <div>Memory</div>
                        <div className={getPerformanceColor(100 - metrics.memoryUsage)}>
                          {metrics.memoryUsage.toFixed(0)}%
                        </div>
                      </div>
                      <div className="text-center p-2 bg-muted rounded">
                        <Cpu className="w-3 h-3 mx-auto mb-1" />
                        <div>CPU</div>
                        <div className={getPerformanceColor(100 - metrics.cpuUsage)}>
                          {metrics.cpuUsage.toFixed(0)}%
                        </div>
                      </div>
                      <div className="text-center p-2 bg-muted rounded">
                        <Network className="w-3 h-3 mx-auto mb-1" />
                        <div>Network</div>
                        <div className="text-blue-500">{metrics.networkRequests}</div>
                      </div>
                    </div>
                  </div>

                  {/* WDYR Logs */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Recent Re-renders
                    </h4>
                    
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {wdyrLogs.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs p-2 bg-muted/50 rounded border-l-2 border-[#17D492]"
                        >
                          <div className="font-medium text-[#17D492]">{log.componentName}</div>
                          <div className="text-muted-foreground">{log.reason}</div>
                          <div className="flex gap-2 mt-1">
                            {log.propsChanged && <Badge variant="outline" className="text-xs">Props</Badge>}
                            {log.stateChanged && <Badge variant="outline" className="text-xs">State</Badge>}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Status */}
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span>Overall Status</span>
                      <div className="flex items-center gap-2">
                        {(() => {
                          const status = getPerformanceStatus(100 - metrics.averageRenderTime);
                          const Icon = status.icon;
                          return (
                            <>
                              <Icon className={`w-4 h-4 ${status.color}`} />
                              <span className={status.color}>{status.text}</span>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
});

PerformanceDashboard.displayName = 'PerformanceDashboard';

// Add WDYR tracking to PerformanceDashboard
if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
  (PerformanceDashboard as any).whyDidYouRender = {
    customName: 'PerformanceDashboard',
    trackHooks: true,
    trackProps: true,
    logOnDifferentValues: true,
  };
} 