export interface Donation {
    id: string;
    donor: string;
    amount: number;
    message?: string;
    timestamp: Date;
    anonymous: boolean;
  }
  
  export interface Campaign {
    id: string;
    title: string;
    titleSwahili: string;
    description: string;
    goal: number;
    raised: number;
    donors: number;
    image: string;
    urgent: boolean;
    category: 'bail' | 'medical' | 'legal' | 'community';
  }
  
  export interface Pillar {
    name: string;
    swahili: string;
    icon: React.ReactNode;
    description: string;
    color: string;
  }
  