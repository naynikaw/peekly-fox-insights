
import React, { createContext, useState, useContext } from 'react';

type AnalyticsContextType = {
  propertyId: string | null;
  accessToken: string | null;
  websiteUrl: string | null;
  setPropertyId: (id: string) => void;
  setAccessToken: (token: string) => void;
  setWebsiteUrl: (url: string) => void;
  isDataSourceConnected: (source: string) => boolean;
  connectedDataSources: string[];
  connectDataSource: (source: string) => void;
};

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState<string | null>(null);
  const [connectedDataSources, setConnectedDataSources] = useState<string[]>([]);

  const isDataSourceConnected = (source: string): boolean => {
    return connectedDataSources.includes(source);
  };

  const connectDataSource = (source: string) => {
    if (!isDataSourceConnected(source)) {
      setConnectedDataSources([...connectedDataSources, source]);
    }
  };

  return (
    <AnalyticsContext.Provider
      value={{
        propertyId,
        accessToken,
        websiteUrl,
        setPropertyId,
        setAccessToken,
        setWebsiteUrl,
        isDataSourceConnected,
        connectedDataSources,
        connectDataSource
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
