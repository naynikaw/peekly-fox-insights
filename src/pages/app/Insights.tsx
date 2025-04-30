
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, TrendingUp, LineChart, PieChart, ArrowUpRight, Link as LinkIcon, 
  ShoppingBag, BarChart2, Layers, MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';

// Mock data
const mockInsights = {
  monthlyVisits: 24789,
  trafficValue: 62450,
  topKeywords: [
    { keyword: 'analytics dashboard', volume: 5400, position: 3 },
    { keyword: 'marketing metrics', volume: 3200, position: 5 },
    { keyword: 'data visualization tools', volume: 2800, position: 7 },
    { keyword: 'website traffic analysis', volume: 1900, position: 2 },
    { keyword: 'seo performance metrics', volume: 1500, position: 9 }
  ],
  competitors: [
    { name: 'competitor1.com', overlap: 68 },
    { name: 'competitor2.com', overlap: 52 },
    { name: 'competitor3.com', overlap: 41 },
    { name: 'competitor4.com', overlap: 33 }
  ],
  trafficSources: [
    { source: 'Organic Search', percentage: 62 },
    { source: 'Direct', percentage: 18 },
    { source: 'Referral', percentage: 11 },
    { source: 'Social', percentage: 9 }
  ]
};

const dataSources = [
  { id: 'ga4', name: 'Google Analytics', icon: BarChart3, description: 'Connect your GA4 account for website traffic insights' },
  { id: 'shopify', name: 'Shopify', icon: ShoppingBag, description: 'Pull sales and customer data from your store' },
  { id: 'ads', name: 'Google Ads', icon: TrendingUp, description: 'Integrate your ad campaign performance metrics' },
  { id: 'gsc', name: 'Search Console', icon: LineChart, description: 'Get organic search performance data' },
  { id: 'stripe', name: 'Stripe', icon: BarChart2, description: 'Analyze transaction and revenue data' }
];

const Insights: React.FC = () => {
  const { websiteUrl, isDataSourceConnected, connectDataSource } = useAnalytics();
  const [isConnecting, setIsConnecting] = useState<string | null>(null);

  const handleConnectDataSource = (sourceId: string) => {
    setIsConnecting(sourceId);
    
    // Simulate connection process
    setTimeout(() => {
      connectDataSource(sourceId);
      setIsConnecting(null);
      toast.success(`Connected to ${dataSources.find(s => s.id === sourceId)?.name}!`);
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Website Insights</h1>
            <p className="text-gray-500">{websiteUrl || 'demo-site.com'}</p>
          </div>
          <Link to="/app/analytics">
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Open Analytics Chat
            </Button>
          </Link>
        </div>
        
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-peekly-orange" />
                  <span className="font-medium text-gray-600">Monthly Traffic</span>
                </div>
                <span className="text-sm text-gray-500">Last 30 days</span>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-3xl font-bold">{mockInsights.monthlyVisits.toLocaleString()}</h3>
                <span className="ml-2 text-sm px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> 12%
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-peekly-orange" />
                  <span className="font-medium text-gray-600">Traffic Value</span>
                </div>
                <span className="text-sm text-gray-500">Last 30 days</span>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-3xl font-bold">${mockInsights.trafficValue.toLocaleString()}</h3>
                <span className="ml-2 text-sm px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> 8%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Keywords and Competitors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="mr-2 h-5 w-5" /> Top Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 text-sm border-b">
                      <th className="pb-2 font-medium">Keyword</th>
                      <th className="pb-2 font-medium text-right">Volume</th>
                      <th className="pb-2 font-medium text-right">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInsights.topKeywords.map((keyword, i) => (
                      <tr key={i} className="border-b last:border-0 border-gray-100">
                        <td className="py-3 font-medium">{keyword.keyword}</td>
                        <td className="py-3 text-right">{keyword.volume.toLocaleString()}</td>
                        <td className="py-3 text-right">
                          <span className={`px-2 py-0.5 rounded-full text-sm ${
                            keyword.position <= 3 ? 'bg-green-100 text-green-800' : 
                            keyword.position <= 6 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {keyword.position}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 h-5 w-5" /> Competing Websites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInsights.competitors.map((competitor, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-32 flex-shrink-0">
                      <span className="text-sm font-medium flex items-center">
                        <LinkIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {competitor.name}
                      </span>
                    </div>
                    <div className="flex-1 ml-2">
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className="h-full bg-peekly-orange rounded-full"
                          style={{ width: `${competitor.overlap}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium">{competitor.overlap}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Traffic Sources & Connect Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-5 w-5" /> Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInsights.trafficSources.map((source, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm font-medium">
                        {source.source}
                      </span>
                    </div>
                    <div className="flex-1 ml-2">
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${source.percentage}%`,
                            backgroundColor: i === 0 ? '#F97316' : 
                                          i === 1 ? '#3B82F6' : 
                                          i === 2 ? '#10B981' : '#8B5CF6'
                          }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm font-medium">{source.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Connect Your Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dataSources.map((source) => {
                  const Icon = source.icon;
                  const isConnected = isDataSourceConnected(source.id);
                  
                  return (
                    <div 
                      key={source.id}
                      className="border rounded-lg p-4 flex flex-col"
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <Icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <h3 className="font-medium">{source.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-3 flex-1">{source.description}</p>
                      <Button
                        variant={isConnected ? "outline" : "default"}
                        className="w-full"
                        onClick={() => !isConnected && handleConnectDataSource(source.id)}
                        disabled={isConnecting !== null || isConnected}
                      >
                        {isConnecting === source.id ? (
                          <span className="flex items-center">
                            <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-20 border-t-white rounded-full"></span>
                            Connecting...
                          </span>
                        ) : isConnected ? (
                          <span>Connected</span>
                        ) : (
                          <span>Connect</span>
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Insights;
