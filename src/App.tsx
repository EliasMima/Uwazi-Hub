'use client';

import React from 'react';
import './App.css';
import { Eye, ArrowRight, Phone, CheckCircle, Globe, Star } from 'lucide-react';
import { Header } from './components/Header';
import { campaigns } from './data/campaigns';
import { recentDonations } from './data/donations';
import { pillars } from './data/pillar';
import { formatKsh,getProgressPercentage } from './utils/format';

function App() {
  const totalDonors = 1500; // Example total donors
  const totalRaised = 452000; // Example total raised amount
  const [activeTab, setActiveTab] = React.useState<string>('campaigns');
  const quickAmounts = [100, 500, 1000, 2000, 5000];
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(null);
  const [customAmount, setCustomAmount] = React.useState<string>('');
  const [donorName, setDonorName] = React.useState<string>('');
  const [isAnonymous, setIsAnonymous] = React.useState<boolean>(false);
  // const [currentTab, setCurrentTab] = React.useState<string>('campaigns');
 
  

  // function formatKsh(totalRaised: any): React.ReactNode {
  //   throw new Error('Function not implemented.');
  // }
  // function handleActiveTab(arg0: string): void {
  //   throw new Error('Function not implemented.');
  // }
  // const [currentTab, setCurrentTab] = React.useState<string>('campaigns');

  // function getProgressPercentage(raised: any, goal: any): number {
  //   throw new Error('Function not implemented.');
  // }

  // function setSelectedAmount(amount: any): void {
  //   throw new Error('Function not implemented.');
  // }

  // function setCustomAmount(value: string): void {
  //   throw new Error('Function not implemented.');
  // }

  // function setDonorName(value: string): void {
  //   throw new Error('Function not implemented.');
  // }

  // function setIsAnonymous(checked: boolean): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Uwazi Hub</h1>
              <p className="text-sm opacity-80">Tuchangiane Kwa Haki</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#campaigns" className="hover:text-green-400 transition">Campaigns</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#transparency" className="hover:text-green-400 transition">Uwazi</a>
          </nav>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tunawezana<br />
            <span className="text-green-400">Tuchangiane</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Kwa ajili yetu sote - For all of us<br />
            <span className="text-lg">Supporting those who fight for justice and human dignity</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400">{formatKsh(totalRaised)}</div>
              <div className="text-sm opacity-80">Total Raised</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400">{totalDonors}</div>
              <div className="text-sm opacity-80">Donors</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400">{campaigns.length}</div>
              <div className="text-sm opacity-80">Active Campaigns</div>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center mx-auto">
            Changa Sasa <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

    {/* Five Pillars */}
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Five Pillars</h3>
          <p className="text-lg text-gray-600">Misingi yetu ya tano - The values that guide every decision we make</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className={`${pillar.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg transition`}>
                {pillar.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{pillar.name}</h4>
              <p className="text-sm text-green-600 font-medium mb-3">({pillar.swahili})</p>
              <p className="text-sm text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Content Tabs */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-6 py-3 rounded-md font-medium transition ${
                activeTab === 'campaigns' 
                  ? 'bg-green-500 text-white' 
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Current Campaigns
            </button>
            <button
              onClick={() => setActiveTab('transparency')}
              className={`px-6 py-3 rounded-md font-medium transition ${
                activeTab === 'transparency' 
                  ? 'bg-green-500 text-white' 
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Uwazi (Transparency)
            </button>
          </div>
        </div>

        {activeTab === 'campaigns' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaigns */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{campaign.image}</span>
                          <div>
                            <h4 className="font-bold text-lg">{campaign.title}</h4>
                            <p className="text-sm text-green-600 font-medium">{campaign.titleSwahili}</p>
                            {campaign.urgent && (
                              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                                Urgent
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{campaign.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{Math.round(getProgressPercentage(campaign.raised, campaign.goal))}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold text-lg">{formatKsh(campaign.raised)}</div>
                          <div className="text-sm text-gray-500">of {formatKsh(campaign.goal)} goal</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{campaign.donors}</div>
                          <div className="text-sm text-gray-500">donors</div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition">
                        Changa Sasa - Donate Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Donate */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold mb-4">Quick Changa</h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-2 rounded border text-sm font-medium transition ${
                        selectedAmount === amount
                          ? 'bg-green-500 text-white border-green-500'
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {formatKsh(amount)}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">Donate anonymously</span>
                  </label>
                </div>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Pay via M-Pesa
                </button>
              </div>

              {/* Recent Donations */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-bold mb-4">Recent Changas</h4>
                <div className="space-y-3">
                  {recentDonations.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium">{donation.donor}</div>
                        {donation.message && (
                          <div className="text-gray-500 text-xs">"{donation.message}"</div>
                        )}
                      </div>
                      <div className="text-green-600 font-medium">
                        {formatKsh(donation.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transparency' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Uwazi - Full Transparency</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Funds Received
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">{formatKsh(totalRaised)}</div>
                  <p className="text-sm text-gray-600">From {totalDonors} generous donors</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-500" />
                    Funds Distributed
                  </h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{formatKsh(45200)}</div>
                  <p className="text-sm text-gray-600">Directly to those who need it</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3">Recent Expenditures</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <div className="font-medium">Bail payment - 3 youth activists</div>
                        <div className="text-sm text-gray-500">January 15, 2025</div>
                      </div>
                      <div className="text-red-600 font-medium">-{formatKsh(30000)}</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <div className="font-medium">Medical bills - Police brutality victim</div>
                        <div className="text-sm text-gray-500">January 12, 2025</div>
                      </div>
                      <div className="text-red-600 font-medium">-{formatKsh(15200)}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold mb-3">Our Commitment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                      <div className="font-medium">100% Transparency</div>
                      <div className="text-sm text-gray-600">Every shilling accounted for</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Eye className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium">Public Ledger</div>
                      <div className="text-sm text-gray-600">Real-time updates</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="font-medium">Direct Impact</div>
                      <div className="text-sm text-gray-600">Straight to beneficiaries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">Uwazi Hub</span>
            </div>
            <p className="text-gray-400">
              Tuchangiane kwa haki - Supporting justice and human dignity for all Kenyans.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <p className="text-gray-400 mb-2">Email: info@uwazihub.co.ke</p>
            <p className="text-gray-400 mb-2">WhatsApp: +254 700 000 000</p>
            <p className="text-gray-400">M-Pesa Paybill: 247247</p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Our Values</h5>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Ubuntu - Umoja</p>
              <p>Utu/Justice - Haki</p>
              <p>Uwazi - Transparency</p>
              <p>Ujasiri - Bravery</p>
              <p>Upendo - Love</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Uwazi Hub. Tuungane kwa haki yetu sote.</p>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
