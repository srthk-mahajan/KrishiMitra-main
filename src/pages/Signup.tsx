
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, User, Mail, Smartphone, Key, ChevronDown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { toast } from '@/hooks/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would handle registration
    toast({
      title: "Account created successfully!",
      description: "You can now login with your credentials",
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
                  <h2 className="text-2xl font-bold text-gray-800">Join KrishiMitra Today</h2>
                  <p className="text-gray-600 text-sm mt-1">Create your account to get personalized recommendations</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="input-label">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                  
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
                  
                  <div className="mb-4">
                    <label htmlFor="userType" className="input-label">I am a</label>
                    <div className="relative">
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        required
                        className="input-field appearance-none pr-10"
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="farmer">Farmer</option>
                        <option value="expert">Agricultural Expert</option>
                        <option value="researcher">Researcher</option>
                        <option value="student">Student</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="input-label">Password</label>
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
                        placeholder="Create a strong password"
                        required
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="krishi-btn w-full mb-4"
                  >
                    Create Account
                  </button>
                  
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-krishi-600 hover:underline">
                      Log in
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

export default Signup;
