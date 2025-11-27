
export type Language = 'fr' | 'ht';

export interface Currency {
  id: string;
  symbol: string;
  name: string;
  balance: number;
  valueUsd: number;
  change24h: number;
  icon: string;
  color: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'buy' | 'sell' | 'swap';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  counterparty?: string;
}

export interface P2POffer {
  id: string;
  user: string;
  type: 'buy' | 'sell';
  crypto: string;
  amount: number;
  price: number;
  currency: string;
  limits: string;
  methods: string[]; // e.g., ['MonCash', 'Unibank']
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface UserPaymentMethod {
  id: string;
  type: 'mobile' | 'bank';
  provider: string; // MonCash, Natcash, Unibank...
  identifier: string; // Phone number or Account number
  ownerName: string;
}

// New Interface for Home Feed
export interface FeedItem {
  id: string;
  type: 'news' | 'alert' | 'suggestion' | 'market';
  title: string;
  description: string;
  timestamp: string;
  relatedAssetId?: string; // e.g., 'btc'
  priority?: 'high' | 'normal';
  imageUrl?: string;
  actionLabel?: string;
  actionLink?: string;
}
