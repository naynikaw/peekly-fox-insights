
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    
    if (success) {
      toast.success('Login successful!');
      navigate('/app/onboarding');
    } else {
      toast.error('Invalid credentials. Try admin/peekly2023');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/lovable-uploads/32c7a0ad-7bb8-437b-a840-96df303ec58c.png" alt="Peekly" className="h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Welcome to Peekly Analytics</h1>
          <p className="text-gray-500 mt-2">Sign in to access your analytics dashboard</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the platform
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username"
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </div>
              <div className="text-sm text-gray-500">
                <p>Demo credentials: admin / peekly2023</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Sign In</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
