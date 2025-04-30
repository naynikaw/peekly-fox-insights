
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../App';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, 
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { BarChart3, Grid, LogOut, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/app/login');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        {/* Sidebar */}
        <Sidebar>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <Link to="/">
                <img src="/lovable-uploads/peekly-logo.png" alt="Peekly" className="h-8" />
              </Link>
            </div>
            
            <SidebarContent className="flex-1">
              <SidebarGroup>
                <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/app/insights" className={`flex items-center py-2 px-4 rounded-md ${location.pathname === '/app/insights' ? 'bg-peekly-orange/10 text-peekly-orange' : ''}`}>
                          <Grid className="mr-3 h-5 w-5" />
                          <span>Insights</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/app/analytics" className={`flex items-center py-2 px-4 rounded-md ${location.pathname === '/app/analytics' ? 'bg-peekly-orange/10 text-peekly-orange' : ''}`}>
                          <MessageSquare className="mr-3 h-5 w-5" />
                          <span>Analytics Chat</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <div className="p-4 border-t">
              <Button onClick={handleLogout} variant="ghost" className="w-full flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </Button>
            </div>
          </div>
        </Sidebar>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
