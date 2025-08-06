"use client";

import { useEffect } from 'react';

export function WDYRProvider() {
  useEffect(() => {
    // Only run WDYR in development mode
    if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
      try {
        const whyDidYouRender = require('@welldone-software/why-did-you-render');
        const React = require('react');
        
        const trackExtraHooks = [];
        
        // Only add hooks if the packages are available
        try {
          const reactRedux = require('react-redux');
          if (reactRedux && reactRedux.useSelector) {
            trackExtraHooks.push([reactRedux, 'useSelector']);
          }
        } catch (e) {
          // react-redux not available, skip
        }
        
        try {
          const reactQuery = require('@tanstack/react-query');
          if (reactQuery && reactQuery.useQuery) {
            trackExtraHooks.push([reactQuery, 'useQuery']);
          }
        } catch (e) {
          // @tanstack/react-query not available, skip
        }
        
        try {
          const framerMotion = require('framer-motion');
          if (framerMotion && framerMotion.useMotionValue) {
            trackExtraHooks.push([framerMotion, 'useMotionValue']);
          }
        } catch (e) {
          // framer-motion not available, skip
        }
        
        try {
          const reactIntersectionObserver = require('react-intersection-observer');
          if (reactIntersectionObserver && reactIntersectionObserver.useInView) {
            trackExtraHooks.push([reactIntersectionObserver, 'useInView']);
          }
        } catch (e) {
          // react-intersection-observer not available, skip
        }
        
        whyDidYouRender(React, {
          trackAllPureComponents: true,
          trackHooks: true,
          logOwnerReasons: true,
          collapseGroups: true,
          hotReloadBufferMs: 500,
          onlyLogs: false,
          titleColor: '#17D492',
          diffNameColor: '#17D492',
          diffPathColor: '#17D492',
          logOnDifferentValues: true,
          trackExtraHooks,
        });
        
        console.log('🔍 WDYR initialized successfully');
      } catch (error) {
        console.warn('⚠️ WDYR initialization failed:', error);
      }
    }
  }, []);

  return null;
} 