
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { SearchIcon, LoaderIcon } from 'lucide-react';
import { toast } from 'sonner';

const Onboarding: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const navigate = useNavigate();
  const { setWebsiteUrl: setContextWebsiteUrl } = useAnalytics();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isAnalyzing) {
      timer = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setIsAnalyzing(false);
              setContextWebsiteUrl(websiteUrl);
              toast.success('Website analysis complete!');
              navigate('/app/insights');
            }, 500);
            return 100;
          }
          return prev + 5;
        });
      }, 150);
    }
    
    return () => clearInterval(timer);
  }, [isAnalyzing, navigate, websiteUrl, setContextWebsiteUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // URL validation
    if (!websiteUrl || !websiteUrl.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/)) {
      toast.error('Please enter a valid website URL');
      return;
    }
    
    setIsAnalyzing(true);
    toast.info('Starting website analysis...');
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pt-10 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Peekly</h1>
          <p className="text-gray-600 text-lg">
            Let's get started by analyzing your website
          </p>
        </div>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            {!isAnalyzing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="websiteUrl" className="text-sm font-medium">
                    Enter your website URL
                  </label>
                  <div className="flex space-x-2">
                    <div className="relative flex-grow">
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="websiteUrl"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="pl-10"
                        placeholder="https://example.com"
                      />
                    </div>
                    <Button type="submit">Analyze Website</Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    We'll analyze your website to provide personalized insights
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-10">
                <div className="flex justify-center mb-6">
                  <LoaderIcon className="animate-spin h-10 w-10 text-peekly-orange" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Analyzing {websiteUrl}
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="h-2 bg-gray-200 rounded-full mb-2">
                    <div 
                      className="h-full bg-peekly-orange rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${analysisProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    {analysisProgress < 20 && 'Crawling website content...'}
                    {analysisProgress >= 20 && analysisProgress < 40 && 'Analyzing keywords and SEO...'}
                    {analysisProgress >= 40 && analysisProgress < 60 && 'Checking competitors...'}
                    {analysisProgress >= 60 && analysisProgress < 80 && 'Evaluating traffic patterns...'}
                    {analysisProgress >= 80 && 'Generating insights...'}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">Want to see how Peekly works with demo data?</p>
          <Button
            variant="outline"
            onClick={() => {
              setContextWebsiteUrl('demo-site.com');
              navigate('/app/insights');
            }}
          >
            Skip to Demo Insights
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Onboarding;
