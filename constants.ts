
import { Currency, P2POffer, Transaction, UserPaymentMethod, FeedItem, PaymentRequest } from './types';

export const TRANSLATIONS = {
  fr: {
    welcome: "Bienvenue sur JPAY",
    totalBalance: "Solde Total",
    send: "Envoyer",
    receive: "Recevoir",
    buy: "Acheter",
    sell: "Vendre",
    deposit: "Dépôt",
    withdraw: "Retrait",
    transfer: "Transfert",
    swap: "Échanger",
    wallet: "Portefeuille",
    market: "Marché P2P",
    cards: "Cartes",
    home: "Accueil",
    support: "Support",
    settings: "Paramètres",
    transactions: "Historique",
    assets: "Vos Actifs",
    p2pAction: "P2P",
    p2pTitle: "Marché P2P Local",
    p2pSubtitle: "Achetez et vendez avec MonCash et les banques locales",
    p2pRecent: "Offres P2P en vedette",
    aiAssistant: "Assistant JPAY",
    aiWelcome: "Bonjou! Je suis l'assistant JPAY. Posez-moi une question sur vos cryptos ou l'app.",
    typeMessage: "Posez votre question...",
    kycStatus: "Vérification d'identité (KYC)",
    verified: "Vérifié",
    methods: "Moyens de paiement",
    changeLang: "Changer la langue",
    logout: "Déconnexion",
    community: "Communauté",
    notifications: "Notifications",
    network: "Réseau",
    address: "Adresse du portefeuille",
    amount: "Montant",
    confirm: "Confirmer",
    paymentMethod: "Moyen de paiement",
    estimated: "Estimé",
    fees: "Frais",
    buyTitle: "Dépôt & Achat",
    sellTitle: "Retrait & Vente",
    buySub: "Ajoutez des fonds via MonCash ou Natcash",
    commTitle: "JPAY pour la Communauté",
    commSub: "Connecter la diaspora haïtienne au monde",
    branding: "Kit de Marque",
    // Admin
    adminDashboard: "Espace Administrateur",
    pendingDeposits: "Dépôts en attente",
    pendingWithdrawals: "Retraits en attente",
    approve: "Approuver",
    reject: "Refuser",
    proofId: "ID Transaction",
    user: "Utilisateur",
    admin_welcome: "Bonjour, Admin",
    admin_sub: "Gérez les flux financiers de la plateforme.",
    // New Home Elements
    bonusTitle: "Bonus d'Inscription",
    bonusDesc: "Cadeau de bienvenue crédité !",
    natcashInfo: "Dépôt & Retrait Natcash",
    natcashFee: "Taxe de 5% appliquée",
    // Feed
    feedTitle: "Pour vous",
    feedSub: "Actualités et alertes personnalisées",
    readMore: "Lire la suite",
    dismiss: "Masquer",
    // Cards
    cardsTitle: "Cartes JPAY",
    cardsSub: "Paiements internationaux sans frontières",
    createCard: "Créer une carte virtuelle",
    cardPrice: "Prix de création",
    cardBenefit1: "Acceptée partout (Netflix, Amazon, Facebook)",
    cardBenefit2: "Rechargeable instantanément",
    cardBenefit3: "Sécurité 3D Secure",
    confirmCardCreation: "Confirmer la commande",
    cardCreationFee: "Frais d'émission",
    insufficientFunds: "Fonds insuffisants",
    // Payment Methods
    pmTitle: "Mes Moyens de Paiement",
    pmSub: "Gérez vos comptes pour le P2P",
    addPm: "Ajouter un moyen de paiement",
    noPm: "Aucun moyen de paiement enregistré",
    accountHolder: "Nom du titulaire",
    accountNumber: "Numéro de compte",
    phoneNumber: "Numéro de téléphone",
    bank: "Banque",
    provider: "Fournisseur",
    save: "Enregistrer",
    delete: "Supprimer",
    mobileMoney: "Monnaie Mobile",
    bankTransfer: "Virement Bancaire",
    // Confirmations
    confirmAction: "Confirmer l'action",
    areYouSure: "Êtes-vous sûr ?",
    irreversible: "Cette action est irréversible.",
    yesDelete: "Oui, supprimer",
    yesConfirm: "Oui, confirmer",
    cancel: "Annuler",
    confirmTransaction: "Confirmer la Transaction",
    confirmDeposit: "Confirmer le Dépôt",
    confirmWithdraw: "Confirmer le Retrait",
    totalToPay: "Total à payer",
    totalToReceive: "Total à recevoir",
    // P2P Trade
    startTrade: "Démarrer l'échange",
    contactSeller: "Contacter le vendeur",
    orderCreated: "Ordre créé avec succès !",
    enterAmount: "Entrez le montant",
    limit: "Limite",
    price: "Prix",
    // Landing Page
    lp_heroTitle: "Le portefeuille crypto pensé pour les Haïtiens et leur diaspora",
    lp_heroSub: "Achetez, vendez et envoyez des cryptos instantanément avec MonCash, les banques locales et USDT.",
    lp_ctaStart: "Commencer maintenant",
    lp_ctaDownload: "Télécharger l'application",
    lp_featInstant: "Achat/Vente Instantané",
    lp_featInstantDesc: "Convertissez vos Gourdes en Crypto et inversement en quelques secondes.",
    lp_featP2P: "Marketplace P2P",
    lp_featP2PDesc: "Échangez directement avec d'autres utilisateurs via des méthodes locales sécurisées.",
    lp_featSecurity: "Sécurité Maximale",
    lp_featSecurityDesc: "Pwoteksyon JPAY Shield, 2FA et KYC adapté pour sécuriser vos fonds.",
    lp_commTitle: "Conçu pour Haïti & sa Diaspora",
    lp_commDesc: "Que vous soyez à Port-au-Prince, Miami, Montréal ou Paris, JPAY connecte votre argent sans frontières et sans délais.",
    lp_partners: "Moyens de paiement acceptés",
    lp_securityTitle: "Votre sécurité, notre priorité",
    lp_securitySub: "Vos fonds sont protégés par les standards de sécurité les plus élevés de l'industrie.",
    lp_finalCta: "Rejoignez déjà des milliers d'utilisateurs JPAY.",
    lp_services: "Services",
    lp_login: "Se connecter",
    lp_createAccount: "Créer un compte",
    // Legal
    lp_terms: "Conditions d'utilisation",
    lp_privacy: "Politique de confidentialité",
    lp_kyc: "KYC & AML",
    legal_termsContent: `Bienvenue sur JPAY. En utilisant notre application, vous acceptez les conditions suivantes :

1. Acceptation des conditions : En créant un compte, vous acceptez d'être lié par ces conditions.
2. Éligibilité : Vous devez avoir au moins 18 ans pour utiliser JPAY.
3. Risques : Le trading de cryptomonnaies comporte des risques financiers importants.
4. Frais : Les frais de transaction sont indiqués avant chaque opération (ex: 5% pour Natcash).
5. Sécurité : Vous êtes responsable de la sécurité de vos identifiants et de l'activation du 2FA.
6. Activités interdites : Le blanchiment d'argent et le financement du terrorisme sont strictement interdits.

JPAY se réserve le droit de suspendre tout compte suspect.`,
    legal_privacyContent: `Votre vie privée est essentielle pour nous.

1. Collecte de données : Nous collectons les informations nécessaires à la vérification d'identité (KYC) et au traitement des transactions (Nom, Email, Téléphone, ID).
2. Utilisation : Vos données servent uniquement à fournir nos services et assurer la sécurité.
3. Partage : Nous ne vendons jamais vos données. Le partage se fait uniquement avec les partenaires bancaires nécessaires à l'exécution de vos ordres.
4. Sécurité : Toutes les données sont chiffrées (AES-256) et stockées sur des serveurs sécurisés.
5. Vos droits : Vous pouvez demander la suppression de votre compte et de vos données à tout moment via le support.`,
    // Auth
    auth_login: "Connexion",
    auth_register: "Inscription",
    auth_email: "Email ou Téléphone",
    auth_password: "Mot de passe",
    auth_confirmPassword: "Confirmer le mot de passe",
    auth_fullName: "Nom complet",
    auth_submitLogin: "Se connecter",
    auth_submitRegister: "Kreye kont mwen",
    auth_noAccount: "Pas encore de compte ?",
    auth_hasAccount: "Déjà un compte ?",
    auth_forgotPass: "Mot de passe oublié ?",
    auth_loading: "Vérification...",
    auth_success: "Bienvenue sur JPAY !",
    auth_adminLink: "Accès Admin"
  },
  ht: {
    welcome: "Byenveni sou JPAY",
    totalBalance: "Balans Total",
    send: "Voye",
    receive: "Resevwa",
    buy: "Achte",
    sell: "Vann",
    deposit: "Depo",
    withdraw: "Retrè",
    transfer: "Transfè",
    swap: "Echanj",
    wallet: "Pòtfolyo",
    market: "Mache P2P",
    cards: "Kat",
    home: "Akèy",
    support: "Sipò",
    settings: "Paramèt",
    transactions: "Istorik",
    assets: "Byen ou yo",
    p2pAction: "P2P",
    p2pTitle: "Mache P2P Lokal",
    p2pSubtitle: "Achte epi vann avèk MonCash ak bank lokal yo",
    p2pRecent: "Òf P2P Popilè",
    aiAssistant: "Asistan JPAY",
    aiWelcome: "Bonjou! Mwen se asistan JPAY. Poze m nenpòt kesyon sou kripto ou yo.",
    typeMessage: "Poze kesyon ou...",
    kycStatus: "Verifikasyon Idantite (KYC)",
    verified: "Verifye",
    methods: "Mwayen Peman",
    changeLang: "Chanje Lang",
    logout: "Dekonekte",
    community: "Kominote",
    notifications: "Notifikasyon",
    network: "Rezo",
    address: "Adrès bous la",
    amount: "Montan",
    confirm: "Konfime",
    paymentMethod: "Mwayen peman",
    estimated: "Estimasyon",
    fees: "Frè",
    buyTitle: "Depo & Achte",
    sellTitle: "Retrè & Vann",
    buySub: "Ajoute lajan via MonCash oswa Natcash",
    commTitle: "JPAY pou Kominote a",
    commSub: "Konekte dyaspora ayisyen an ak tout mond lan",
    branding: "Kit Mak la",
     // Admin
    adminDashboard: "Espace Administrateur",
    pendingDeposits: "Depo k ap tann",
    pendingWithdrawals: "Retrè k ap tann",
    approve: "Aksepte",
    reject: "Refize",
    proofId: "ID Tranzaksyon",
    user: "Itilizatè",
    admin_welcome: "Bonjou, Admin",
    admin_sub: "Jere tout tranzaksyon platfòm nan.",
    // New Home Elements
    bonusTitle: "Bonis Enskripsyon",
    bonusDesc: "Kado byenveni ou dispoze!",
    natcashInfo: "Depo & Retrè Natcash",
    natcashFee: "Taks 5% aplikab",
    // Feed
    feedTitle: "Pou ou",
    feedSub: "Nouvèl ak alèt pèsonalize",
    readMore: "Li plis",
    dismiss: "Kache",
    // Cards
    cardsTitle: "Kat JPAY",
    cardsSub: "Peman entènasyonal san baryè",
    createCard: "Kreye yon kat virtyèl",
    cardPrice: "Pri kreyasyon",
    cardBenefit1: "Aksepte tout kote (Netflix, Amazon, Facebook)",
    cardBenefit2: "Rechaje rapid",
    cardBenefit3: "Sekirite 3D Secure",
    confirmCardCreation: "Konfime kòmann lan",
    cardCreationFee: "Frè emisyon",
    insufficientFunds: "Lajan ensifizan",
    // Payment Methods
    pmTitle: "Mwayen Peman Mwen",
    pmSub: "Jere kont ou pou P2P",
    addPm: "Ajoute yon mwayen peman",
    noPm: "Pa gen mwayen peman anrejistre",
    accountHolder: "Non mèt kont la",
    accountNumber: "Nimewo kont",
    phoneNumber: "Nimewo telefòn",
    bank: "Bank",
    provider: "Founisè",
    save: "Anrejistre",
    delete: "Efase",
    mobileMoney: "Lajan Mobil",
    bankTransfer: "Viramman Bankè",
    // Confirmations
    confirmAction: "Konfime Aksyon",
    areYouSure: "Èske ou sèten ?",
    irreversible: "Aksyon sa a pa ka defèt.",
    yesDelete: "Wi, efase",
    yesConfirm: "Wi, konfime",
    cancel: "Anile",
    confirmTransaction: "Konfime Tranzaksyon",
    confirmDeposit: "Konfime Depo",
    confirmWithdraw: "Konfime Retrè",
    totalToPay: "Total pou peye",
    totalToReceive: "Total pou resevwa",
    // P2P Trade
    startTrade: "Kòmanse Echanj",
    contactSeller: "Kontakte vandè a",
    orderCreated: "Lòd kreye avèk siksè!",
    enterAmount: "Antre montan an",
    limit: "Limit",
    price: "Pri",
    // Landing Page
    lp_heroTitle: "Pòtfolyo kripto ki fèt pou Ayisyen ak Diaspora a",
    lp_heroSub: "Achte, vann epi voye kripto rapidman avèk MonCash, bank lokal yo ak USDT.",
    lp_ctaStart: "Kòmanse kounye a",
    lp_ctaDownload: "Telechaje aplikasyon an",
    lp_featInstant: "Achte/Vann Rapid",
    lp_featInstantDesc: "Konvèti Goud ou an Kripto (ak envès) nan kèk segond sèlman.",
    lp_featP2P: "Mache P2P",
    lp_featP2PDesc: "Echanje dirèkteman ak lòt itilizatè gras ak mwayen peman lokal ki an sekirite.",
    lp_featSecurity: "Sekirite Total",
    lp_featSecurityDesc: "Pwoteksyon JPAY Shield, 2FA ak verifikasyon idantite (KYC) pou lajan w.",
    lp_commTitle: "Fèt pou Ayiti & Diaspora a",
    lp_commDesc: "Kit ou Pòtoprens, Miyami, Monreyal oswa Pari, JPAY konekte lajan w san baryè.",
    lp_partners: "Mwayen peman nou aksepte",
    lp_securityTitle: "Sekirite w se priyorite nou",
    lp_securitySub: "Lajan w pwoteje avèk pi gwo nivo sekirite ki egziste nan endistri a.",
    lp_finalCta: "Vin jwenn milye itilizatè JPAY yo.",
    lp_services: "Sèvis",
    lp_login: "Konekte",
    lp_createAccount: "Kreye yon kont",
    // Legal
    lp_terms: "Kondisyon Itilizasyon",
    lp_privacy: "Politik Konfidansyalite",
    lp_kyc: "KYC & AML",
    legal_termsContent: `Byenveni sou JPAY. Lè ou itilize aplikasyon an, ou dakò ak kondisyon sa yo:

1. Akseptasyon: Lè ou kreye yon kont, ou dakò respekte règleman sa yo.
2. Laj: Ou dwe gen omwen 18 an pou itilize JPAY.
3. Risk: Komès kripto gen gwo risk finansye.
4. Frè: Frè tranzaksyon yo afiche anvan chak operasyon (egz: 5% pou Natcash).
5. Sekirite: Ou responsab sekirite modpas ou ak deklanche 2FA.
6. Entèdiksyon: Blanchiman lajan ak finansman teworis entèdi nèt.

JPAY rezève dwa pou sispann nenpòt kont sispèk.`,
    legal_privacyContent: `Vi prive ou enpòtan pou nou.

1. Done nou pran: Nou pran enfòmasyon pou verifye idantite (KYC) ak fè tranzaksyon (Non, Imèl, Telefòn, ID).
2. Itilizasyon: Done ou yo sèvi sèlman pou bay sèvis nou yo ak garanti sekirite.
3. Pataj: Nou pa vann done ou. Nou pataje yo sèlman ak patnè bankè ki nesesè pou lòd ou yo.
4. Sekirite: Tout done chifre (AES-256) epi estoke sou sèvè an sekirite.
5. Dwa ou: Ou ka mande efase kont ou ak done ou nenpòt lè nan sipò a.`,
    // Auth
    auth_login: "Koneksyon",
    auth_register: "Enskripsyon",
    auth_email: "Imèl oswa Telefòn",
    auth_password: "Modpas",
    auth_confirmPassword: "Konfime modpas la",
    auth_fullName: "Non konplè",
    auth_submitLogin: "Konekte",
    auth_submitRegister: "Kreye kont mwen",
    auth_noAccount: "Ou poko gen kont ?",
    auth_hasAccount: "Ou deja gen yon kont ?",
    auth_forgotPass: "Bliye modpas la ?",
    auth_loading: "N ap verifye...",
    auth_success: "Byenveni sou JPAY !",
    auth_adminLink: "Aksè Admin"
  }
};

export const MOCK_ASSETS: Currency[] = [
  { id: 'btc', symbol: 'BTC', name: 'Bitcoin', balance: 0.042, valueUsd: 64230.50, change24h: 2.4, icon: '₿', color: '#F7931A' },
  { id: 'eth', symbol: 'ETH', name: 'Ethereum', balance: 1.2, valueUsd: 3450.20, change24h: -1.2, icon: 'Ξ', color: '#627EEA' },
  { id: 'usdt', symbol: 'USDT', name: 'Tether', balance: 450.00, valueUsd: 1.00, change24h: 0.01, icon: '₮', color: '#26A17B' },
  { id: 'bonus', symbol: 'USD', name: 'Bonus', balance: 2.00, valueUsd: 1.00, change24h: 0.0, icon: '$', color: '#FCD535' }, // Added Bonus Asset
  { id: 'sol', symbol: 'SOL', name: 'Solana', balance: 15.5, valueUsd: 145.60, change24h: 5.7, icon: '◎', color: '#14F195' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: 'receive', amount: 50, currency: 'USDT', status: 'completed', date: '2024-05-10', counterparty: 'Jean Baptiste' },
  { id: 'tx2', type: 'buy', amount: 0.01, currency: 'BTC', status: 'completed', date: '2024-05-09' },
  { id: 'tx3', type: 'send', amount: 200, currency: 'USDT', status: 'completed', date: '2024-05-08', counterparty: 'Marie Pierre' },
  { id: 'tx4', type: 'swap', amount: 0.5, currency: 'ETH', status: 'pending', date: '2024-05-08' },
  { id: 'tx5', type: 'receive', amount: 0.005, currency: 'BTC', status: 'completed', date: '2024-05-07', counterparty: 'Mining Pool' },
  { id: 'tx6', type: 'sell', amount: 100, currency: 'USDT', status: 'completed', date: '2024-05-06' },
];

export const MOCK_P2P_OFFERS: P2POffer[] = [
  { id: 'p2p1', user: 'CryptoKing_HT', type: 'buy', crypto: 'USDT', amount: 500, price: 135.5, currency: 'HTG', limits: '1000 - 50000 HTG', methods: ['MonCash'], verified: true },
  { id: 'p2p2', user: 'SogebankTrader', type: 'buy', crypto: 'USDT', amount: 2000, price: 136.0, currency: 'HTG', limits: '5000 - 150000 HTG', methods: ['Sogebank', 'Unibank'], verified: true },
  { id: 'p2p3', user: 'HaitiInvest', type: 'sell', crypto: 'BTC', amount: 0.05, price: 65000, currency: 'USD', limits: '50 - 500 USD', methods: ['Natcash', 'MonCash'], verified: false },
  { id: 'p2p4', user: 'LokalLakay', type: 'buy', crypto: 'USDT', amount: 100, price: 134.8, currency: 'HTG', limits: '500 - 10000 HTG', methods: ['MonCash'], verified: true },
];

export const PAYMENT_METHODS = [
  { name: 'MonCash', color: 'bg-red-600', textColor: 'text-white' },
  { name: 'Natcash', color: 'bg-orange-500', textColor: 'text-white' },
  { name: 'BNC', color: 'bg-green-700', textColor: 'text-white' },
  { name: 'Card', color: 'bg-blue-600', textColor: 'text-white' },
];

export const MOCK_USER_PAYMENT_METHODS: UserPaymentMethod[] = [
    { id: 'pm1', type: 'mobile', provider: 'MonCash', identifier: '3710-4422', ownerName: 'Jean Pierre' },
    { id: 'pm2', type: 'bank', provider: 'Unibank', identifier: '100-202-3033', ownerName: 'Jean Pierre' }
];

export const NOTIFICATIONS = [
    { id: 1, type: 'security', title: 'Connexion détectée', message: 'Nouvelle connexion depuis Miami, FL.', time: 'Il y a 2h', read: false },
    { id: 2, type: 'market', title: 'Bitcoin en hausse', message: 'Le BTC a augmenté de 5% aujourd\'hui !', time: 'Il y a 5h', read: true },
    { id: 3, type: 'tx', title: 'Reçu 50 USDT', message: 'De Jean Baptiste', time: 'Hier', read: true },
];

// New Mock Data for Home Feed
export const MOCK_FEED_ITEMS: FeedItem[] = [
  {
    id: 'market_btc_alert',
    type: 'market',
    title: 'Hausse Majeure sur Bitcoin 🚀',
    description: 'Le BTC a gagné 5% au cours de la dernière heure. La valeur de votre portefeuille augmente.',
    timestamp: 'À l\'instant',
    relatedAssetId: 'btc',
    priority: 'high',
    actionLabel: 'Voir mon portefeuille',
    actionLink: 'wallet'
  },
  {
    id: 'news1',
    type: 'news',
    title: 'Bitcoin dépasse les $64,000 !',
    description: 'Le marché crypto connaît un nouvel élan haussier cette semaine.',
    timestamp: 'Il y a 2h',
    relatedAssetId: 'btc',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=300&h=200',
    priority: 'normal',
    actionLink: 'wallet'
  },
  {
    id: 'sugg1',
    type: 'suggestion',
    title: 'Solde USDT faible ?',
    description: 'Rechargez votre compte instantanément via MonCash pour profiter des offres P2P.',
    timestamp: 'Conseil',
    actionLabel: 'Recharger',
    actionLink: 'deposit',
    priority: 'normal'
  },
  {
    id: 'alert1',
    type: 'market',
    title: 'Solana +5.7% en 24h',
    description: 'Votre portefeuille SOL prend de la valeur. C\'est peut-être le moment de vendre ?',
    timestamp: 'Il y a 1h',
    relatedAssetId: 'sol',
    actionLabel: 'Voir SOL',
    actionLink: 'wallet'
  },
  {
    id: 'alert2',
    type: 'alert',
    title: 'Maintenance MonCash',
    description: 'Maintenance prévue ce soir de 23h à 01h. Veuillez anticiper vos transactions.',
    timestamp: 'Important',
    priority: 'high',
    actionLabel: 'Contacter support',
    actionLink: 'support'
  }
];

// Mock Admin Requests
export const MOCK_ADMIN_REQUESTS: PaymentRequest[] = [
  { id: 'req1', userId: 'u1', userName: 'Jean Pierre', type: 'deposit', amountFiat: 15000, currencyFiat: 'HTG', amountCrypto: 110.29, currencyCrypto: 'USDT', method: 'MonCash', methodIdentifier: '3710-4422', status: 'pending', date: '2024-05-12 10:30', proofId: 'TRX-MC-998877' },
  { id: 'req2', userId: 'u2', userName: 'Marie Claire', type: 'withdraw', amountFiat: 5000, currencyFiat: 'HTG', amountCrypto: 36.76, currencyCrypto: 'USDT', method: 'Natcash', methodIdentifier: '4000-1234', status: 'pending', date: '2024-05-12 11:15' },
  { id: 'req3', userId: 'u3', userName: 'Paul Jacques', type: 'deposit', amountFiat: 25000, currencyFiat: 'HTG', amountCrypto: 183.82, currencyCrypto: 'USDT', method: 'BNC', methodIdentifier: '100-20-330', status: 'pending', date: '2024-05-12 09:00', proofId: 'BNC-REF-2211' },
];