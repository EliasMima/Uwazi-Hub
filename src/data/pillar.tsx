import { Users, Shield, Eye, Zap, Heart } from 'lucide-react';
import { Pillar } from 'src/types';
import React from 'react';

export const pillars: Pillar[] = [
  {
    name: 'Ubuntu',
    swahili: 'Umoja',
    icon: <Users className="w-6 h-6" />,
    description: 'I am because we are - collectivity and unity in our struggles',
    color: 'bg-green-500',
  },
  {
    name: 'Utu/Justice',
    swahili: 'Haki',
    icon: <Shield className="w-6 h-6" />,
    description: 'Human dignity and fairness for every Kenyan',
    color: 'bg-red-500',
  },
  {
    name: 'Uwazi',
    swahili: 'Uwazi',
    icon: <Eye className="w-6 h-6" />,
    description: 'Transparency and accountability in everything we do',
    color: 'bg-blue-500',
  },
  {
    name: 'Ujasiri',
    swahili: 'Ujasiri',
    icon: <Zap className="w-6 h-6" />,
    description: 'Bravery to speak truth to power without fear',
    color: 'bg-yellow-500',
  },
  {
    name: 'Upendo',
    swahili: 'Upendo',
    icon: <Heart className="w-6 h-6" />,
    description: 'Love for community and solidarity with those who need us',
    color: 'bg-pink-500',
  },
];
