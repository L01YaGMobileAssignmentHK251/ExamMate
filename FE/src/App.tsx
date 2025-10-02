import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './navigation/AppNavigator';
import { queryClient } from './components/providers/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}