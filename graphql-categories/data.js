const realms = [
  {
    name: 'Food Products & Beverages',
    slug: 'food-products-beverages',
    domains: [
      {
        name: 'Dairy Products',
        slug: 'dairy-products',
        niches: [
          { name: 'Milk', slug: 'milk' },
          { name: 'Cheese', slug: 'cheese' },
          { name: 'Butter', slug: 'butter' },
          { name: 'Ice-Cream', slug: 'ice-cream' },
          { name: 'Paneer', slug: 'paneer' },
        ],
      },
      {
        name: 'Confectionery & Bakery Products',
        slug: 'confectionery-bakery-products',
        niches: [
          { name: 'Chocolates', slug: 'chocolates' },
          { name: 'Cookies', slug: 'cookies' },
          { name: 'Biscuit', slug: 'biscuit' },
          { name: 'Birthday Cake', slug: 'birthday-cake' },
          { name: 'Candy', slug: 'candy' },
        ],
      },
      {
        name: 'Cooking Spices & Masala',
        slug: 'cooking-spices-masala',
        niches: [
          { name: 'Cinnamon', slug: 'cinnamon' },
          { name: 'Ginger', slug: 'ginger' },
          { name: 'Turmeric', slug: 'turmeric' },
          { name: 'Coriander', slug: 'coriander' },
          { name: 'Garam Masala', slug: 'garam-masala' },
        ],
      },
      {
        name: 'Beverages',
        slug: 'beverages',
        niches: [
          { name: 'Beer', slug: 'beer' },
          { name: 'Ice', slug: 'ice' },
          { name: 'Coconut Water', slug: 'coconut-water' },
          { name: 'Apple Cider Vinegar', slug: 'apple-cider-vinegar' },
        ],
      },
      {
        name: 'Dry Fruits',
        slug: 'dry-fruits',
        niches: [
          { name: 'Almond', slug: 'almond' },
          { name: 'Cashews', slug: 'cashews' },
          { name: 'Walnuts', slug: 'walnuts' },
          { name: 'Dates', slug: 'dates' },
          { name: 'Foxnuts', slug: 'foxnuts' },
        ],
      },
      {
        name: 'Black Tea',
        slug: 'black-tea',
        niches: [], // No niches for this domain
      },
    ],
  },
  {
    name: 'Agriculture',
    slug: 'agriculture',
    domains: [
      {
        name: 'Fresh Flowers & Plants',
        slug: 'fresh-flowers-plants',
        niches: [
          { name: 'Rose', slug: 'rose' },
          { name: 'Marigold', slug: 'marigold' },
          { name: 'Orchids', slug: 'orchids' },
          { name: 'Money Plant', slug: 'money-plant' },
          { name: 'Wheat Grass', slug: 'wheat-grass' },
        ],
      },
      {
        name: 'Food Grains & Cereals',
        slug: 'food-grains-cereals',
        niches: [
          { name: 'Oats', slug: 'oats' },
          { name: 'Rice', slug: 'rice' },
          { name: 'Jaggery', slug: 'jaggery' },
          { name: 'Wheat', slug: 'wheat' },
        ],
      },
      {
        name: 'Fruits & Vegetables',
        slug: 'fruits-vegetables',
        niches: [
          { name: 'Mango', slug: 'mango' },
          { name: 'Apple', slug: 'apple' },
          { name: 'Blackberry', slug: 'blackberry' },
          { name: 'Dragon Fruit', slug: 'dragon-fruit' },
          { name: 'Onion', slug: 'onion' },
          { name: 'Potato', slug: 'potato' },
          { name: 'Chilly', slug: 'chilly' },
        ],
      },
      {
        name: 'Agricultural Equipments & Supplies',
        slug: 'agricultural-equipments-supplies',
        niches: [
          { name: 'Seed Drills', slug: 'seed-drills' },
          { name: 'Pickaxe', slug: 'pickaxe' },
          { name: 'Other Equipments', slug: 'other-equipments' },
          { name: 'Agricultural Tools', slug: 'agricultural-tools' },
        ],
      },
    ],
  },
  {
    name: 'Fashion & Apparel',
    slug: 'fashion-apparel',
    domains: [
      {
        name: 'Leather Clothing',
        slug: 'leather-clothing',
        niches: [
          { name: 'Leather Jacket', slug: 'leather-jacket' },
          { name: 'Waist Coat', slug: 'waist-coat' },
          { name: 'Leather Belts', slug: 'leather-belts' },
          { name: 'Leather Gloves', slug: 'leather-gloves' },
          { name: 'Leather Pants', slug: 'leather-pants' },
        ],
      },
      {
        name: 'Men',
        slug: 'men',
        niches: [
          { name: 'Shirts', slug: 'shirts' },
          { name: 'T-Shirts', slug: 't-shirts' },
          { name: 'Jeans', slug: 'jeans' },
          { name: 'Watch', slug: 'watch' },
          { name: 'Wallet', slug: 'wallet' },
          { name: 'Shoes', slug: 'shoes' },
        ],
      },
      {
        name: 'Women',
        slug: 'women',
        niches: [
          { name: 'Anarkali Suits', slug: 'anarkali-suits' },
          { name: 'Designer Blouses', slug: 'designer-blouses' },
          { name: 'Pakistani Suits', slug: 'pakistani-suits' },
          { name: 'Anarkali Dress', slug: 'anarkali-dress' },
          { name: 'Salwar Kameez', slug: 'salwar-kameez' },
        ],
      },
      {
        name: 'Kids',
        slug: 'kids',
        niches: [
          { name: 'Baby Dresses', slug: 'baby-dresses' },
          { name: 'Kids Lehenga', slug: 'kids-lehenga' },
          { name: 'Tutu Dress', slug: 'tutu-dress' },
          { name: 'Kids Frocks', slug: 'kids-frocks' },
        ],
      },
    ],
  },
  {
    name: 'Ayurveda & Herbal',
    slug: 'ayurveda-herbal',
    domains: [
      {
        name: 'Ayurvedic, Herbal Medicines & Products',
        slug: 'ayurvedic-herbal-medicines',
        niches: [
          { name: 'Herbal Raw Material', slug: 'herbal-raw-material' },
          { name: 'Herbal Formulation Products', slug: 'herbal-formulation-products' },
          { name: 'Herbal Medicines', slug: 'herbal-medicines' },
          { name: 'Honey', slug: 'honey' },
        ],
      },
      {
        name: 'Ayurvedic Consultants',
        slug: 'ayurvedic-consultants',
        niches: [
          { name: 'Hair Loss Treatment Service', slug: 'hair-loss-treatment' },
          { name: 'Homeopathic Skin Treatment', slug: 'homeopathic-skin-treatment' },
          { name: 'Joint Pain Treatment', slug: 'joint-pain-treatment' },
          { name: 'Piles Treatment', slug: 'piles-treatment' },
        ],
      },
      {
        name: 'Herbal Foods',
        slug: 'herbal-foods',
        niches: [],
      },
      {
        name: 'Pure & Natural Herbs',
        slug: 'pure-natural-herbs',
        niches: [
          { name: 'Aloe Vera', slug: 'aloe-vera' },
          { name: 'Split Cassia', slug: 'split-cassia' },
          { name: 'Herb Plant', slug: 'herb-plant' },
        ],
      },
    ],
  },
  {
    name: 'Transportation & Logistics',
    slug: 'transportation-logistics',
    domains: [
      { name: 'Transportation, Logistics & Air Freight Services', slug: 'transportation-logistics', niches: [] },
      { name: 'Warehousing & Cold Storage Services', slug: 'warehousing-cold-storage', niches: [] },
      { name: 'Cargo & Shipping Services', slug: 'cargo-shipping', niches: [] },
      { name: 'Packers & Movers', slug: 'packers-movers', niches: [] },
    ],
  },
  {
    name: 'Packaging Material',
    slug: 'packaging-material',
    domains: [],
  },
  {
    name: 'Machinery & Equipment',
    slug: 'machinery-equipment',
    domains: [
      { name: 'Boiler & Boiler Parts', slug: 'boiler-parts', niches: [] },
      { name: 'Paper Work & Making Machinery', slug: 'paper-making-machinery', niches: [] },
      { name: 'Chemical Machinery & Plant', slug: 'chemical-machinery', niches: [] },
      { name: 'Rubber Processing Machinery', slug: 'rubber-processing-machinery', niches: [] },
    ],
  },
  {
    name: 'Medical Equipment',
    slug: 'medical-equipment',
    domains: [],
  },
  {
    name: 'Personal Care & Hygiene',
    slug: 'personal-care-hygiene',
    domains: [
      { name: 'Aromatic & Essential Oils', slug: 'aromatic-essential-oils', niches: [] },
      { name: 'Cosmetics, Hair Care & Beauty Products', slug: 'cosmetics-hair-care', niches: [] },
      { name: 'Health Care Products', slug: 'health-care-products', niches: [] },
    ],
  },
  {
    name: 'Safety Products',
    slug: 'safety-products',
    domains: [],
  },
  {
    name: 'Electronics & Electrical Goods',
    slug: 'electronics-electrical-goods',
    domains: [
      { name: 'Solar & Renewable Energy Products', slug: 'solar-renewable-energy', niches: [] },
      { name: 'Generators, Turbines & Power Plants', slug: 'generators-power-plants', niches: [] },
      { name: 'Electric Cables & Wires', slug: 'electric-cables-wires', niches: [] },
      { name: 'Electric Fittings & Components', slug: 'electric-fittings-components', niches: [] },
    ],
  },
  {
    name: 'Handicraft & Gift Items',
    slug: 'handicraft-gift-items',
    domains: [],
  },
  {
    name: 'Automobile Tools & Equipments',
    slug: 'automobile-tools-equipments',
    domains: [],
  },
  {
    name: 'Chemical & Dyes Products',
    slug: 'chemical-dyes-products',
    domains: [],
  },
  {
    name: 'Plastic Products',
    slug: 'plastic-products',
    domains: [],
  },
  {
    name: 'Furniture & Home Decoration',
    slug: 'furniture-home-decoration',
    domains: [
      {
        name: 'Bedroom, Bathroom & Kids Furniture',
        slug: 'bedroom-bathroom-kids-furniture',
        niches: [
          { name: 'Almirah', slug: 'almirah' },
          { name: 'Double Bed', slug: 'double-bed' },
          { name: 'Beds', slug: 'beds' },
          { name: 'Closet', slug: 'closet' },
        ],
      },
      {
        name: 'Living Room & Plastic Furniture',
        slug: 'living-room-plastic-furniture',
        niches: [
          { name: 'Sofa Set', slug: 'sofa-set' },
          { name: 'Cupboard', slug: 'cupboard' },
          { name: 'TV Unit', slug: 'tv-unit' },
          { name: 'Chairs', slug: 'chairs' },
        ],
      },
      {
        name: 'Metal Furniture Suppliers',
        slug: 'metal-furniture-suppliers',
        niches: [
          { name: 'Steel Furniture', slug: 'steel-furniture' },
          { name: 'Steel Almirah', slug: 'steel-almirah' },
          { name: 'Recliner Chair', slug: 'recliner-chair' },
          { name: 'Steel Table', slug: 'steel-table' },
        ],
      },
      {
        name: 'Furniture Hardware & Fittings',
        slug: 'furniture-hardware-fittings',
        niches: [
          { name: 'Table Top', slug: 'table-top' },
          { name: 'Backrest', slug: 'backrest' },
          { name: 'Bed Frames', slug: 'bed-frames' },
          { name: 'Window Screens', slug: 'window-screens' },
        ],
      },
    ],
  },
];
  
module.exports = realms;