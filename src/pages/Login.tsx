
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Key, Smartphone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    otp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    toast({
      title: "Login successful!",
      description: "Redirecting to your dashboard...",
    });
  };

  const handleSendOTP = () => {
    if (!formData.phone) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number to receive OTP",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "OTP sent!",
      description: `A verification code has been sent to ${formData.phone}`,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="pt-28 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-2">
                    <div className="h-12 w-12 rounded-full bg-krishi-50 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-krishi-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Welcome Back to KrishiMitra</h2>
                  <p className="text-gray-600 text-sm mt-1">Login to access your farming insights</p>
                </div>
                
                <div className="flex mb-6">
                  <button
                    className={`flex-1 py-2 text-center text-sm font-medium ${
                      loginMethod === 'password'
                        ? 'text-krishi-600 border-b-2 border-krishi-500'
                        : 'text-gray-500 border-b border-gray-200'
                    }`}
                    onClick={() => setLoginMethod('password')}
                  >
                    Password Login
                  </button>
                  <button
                    className={`flex-1 py-2 text-center text-sm font-medium ${
                      loginMethod === 'otp'
                        ? 'text-krishi-600 border-b-2 border-krishi-500'
                        : 'text-gray-500 border-b border-gray-200'
                    }`}
                    onClick={() => setLoginMethod('otp')}
                  >
                    OTP Login
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {loginMethod === 'password' ? (
                    <>
                      <div className="mb-4">
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            required
                            className="input-field pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="input-label">Password</label>
                          <a href="#" className="text-xs text-krishi-600 hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Key size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            required
                            className="input-field pl-10"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="phone" className="input-label">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Smartphone size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            required
                            className="input-field pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between">
                          <label htmlFor="otp" className="input-label">OTP</label>
                          <button 
                            type="button" 
                            onClick={handleSendOTP}
                            className="text-xs text-krishi-600 hover:underline"
                          >
                            Send OTP
                          </button>
                        </div>
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          placeholder="Enter 6-digit OTP"
                          maxLength={6}
                          className="input-field"
                        />
                      </div>
                    </>
                  )}
                  
                  <button
                    type="submit"
                    className="krishi-btn w-full mb-4"
                  >
                    Log In
                  </button>
                  
                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-krishi-600 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Login;
