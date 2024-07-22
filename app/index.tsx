import { useSession } from '@/hooks/useSession';
import { Redirect } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const { isAuthenticated } = useSession();

  return <Redirect href={isAuthenticated ? "/host" : "/guest"} />
}