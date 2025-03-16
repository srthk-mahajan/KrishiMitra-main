
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Leaf } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { toast } from '@/hooks/use-toast';

const SoilInput = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    block: '',
    season: '',
    soilType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const emptyFields = Object.entries(formData)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    
    if (emptyFields.length > 0) {
      toast({
        title: "Incomplete form",
        description: `Please fill in all fields: ${emptyFields.join(', ')}`,
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to results page with the form data
    navigate('/results', { state: formData });
  };
  
  // Sample data for dropdowns
  const states = ["Andhra Pradesh", "Bihar", "Gujarat", "Haryana", "Karnataka", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh"];
  const districts = ["District 1", "District 2", "District 3", "District 4", "District 5"];
  const blocks = ["Block 1", "Block 2", "Block 3", "Block 4", "Block 5"];
  const seasons = ["Kharif", "Rabi", "Zaid"];
  const soilTypes = ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil", "Mountain Soil", "Desert Soil"];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <div className="pt-28 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-soil-100/80 rounded-2xl shadow-md p-8 animate-fade-up">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Leaf className="mr-2 text-krishi-500" />
                    Soil Analysis Form
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Fill in the details below to get personalized crop and fertilizer recommendations for your farm
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">LOCATION:</h3>
                    
                    <div className="mb-4">
                      <label htmlFor="state" className="block text-gray-700 font-medium mb-1">STATE:</label>
                      <div className="relative">
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-krishi-300 transition"
                        >
                          <option value="">SELECT</option>
                          {states.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="district" className="block text-gray-700 font-medium mb-1">DISTRICT:</label>
                      <div className="relative">
                        <select
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-krishi-300 transition"
                          disabled={!formData.state}
                        >
                          <option value="">SELECT</option>
                          {districts.map(district => (
                            <option key={district} value={district}>{district}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="block" className="block text-gray-700 font-medium mb-1">BLOCK:</label>
                      <div className="relative">
                        <select
                          id="block"
                          name="block"
                          value={formData.block}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-krishi-300 transition"
                          disabled={!formData.district}
                        >
                          <option value="">SELECT</option>
                          {blocks.map(block => (
                            <option key={block} value={block}>{block}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="season" className="block text-gray-700 font-medium mb-1">SEASON:</label>
                      <div className="relative">
                        <select
                          id="season"
                          name="season"
                          value={formData.season}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-krishi-300 transition"
                        >
                          <option value="">SELECT</option>
                          {seasons.map(season => (
                            <option key={season} value={season}>{season}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="soilType" className="block text-gray-700 font-medium mb-1">SOIL TYPE:</label>
                      <div className="relative">
                        <select
                          id="soilType"
                          name="soilType"
                          value={formData.soilType}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-krishi-300 transition"
                        >
                          <option value="">SELECT</option>
                          {soilTypes.map(soilType => (
                            <option key={soilType} value={soilType}>{soilType}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="krishi-btn w-full text-center uppercase"
                  >
                    GET RESULTS
                  </button>
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

export default SoilInput;
