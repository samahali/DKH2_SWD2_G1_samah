export const products = [
    {
      id: 1,
      titleEn: "To Kill a Mockingbird",
      titleAr: "أن تقتل طائر المحاكاة",
      authorEn: "Harper Lee",
      authorAr: "هاربر لي",
      price: 14.99,
      descriptionEn: "A classic novel about racial injustice and moral growth in the American South during the 1930s.",
      descriptionAr: "رواية كلاسيكية عن الظلم العنصري والنمو الأخلاقي في الجنوب الأمريكي خلال الثلاثينيات.",
      category: "fiction",
      image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.8, count: 120 },
      language: "english",
      featured: true,
      bestSeller: true,
      mood: ["thoughtful", "serious"],
    },
    {
      id: 2,
      titleEn: "The Forty Rules of Love",
      titleAr: "قواعد العشق الأربعون",
      authorEn: "Elif Shafak",
      authorAr: "إليف شافاك",
      price: 16.99,
      descriptionEn: "A novel about love, spirituality, and transformation that interweaves two parallel narratives.",
      descriptionAr: "رواية عن الحب والروحانية والتحول تجمع بين سردين متوازيين.",
      category: "fiction",
      image: "https://m.media-amazon.com/images/I/81Ow0oO5UML._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.7, count: 89 },
      language: "english",
      featured: false,
      bestSeller: true,
      mood: ["romantic", "spiritual"],
    },
    {
      id: 3,
      titleEn: "Atomic Habits",
      titleAr: "العادات الذرية",
      authorEn: "James Clear",
      authorAr: "جيمس كلير",
      price: 18.5,
      descriptionEn: "Transform your life with tiny changes in behavior that compound over time.",
      descriptionAr: "قم بتحويل حياتك من خلال تغييرات صغيرة في السلوك تتراكم بمرور الوقت.",
      category: "nonFiction",
      image: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.9, count: 252 },
      language: "english",
      featured: true,
      bestSeller: true,
      mood: ["motivated", "practical"],
    },
    {
      id: 4,
      titleEn: "Brief Answers to the Big Questions",
      titleAr: "إجابات موجزة للأسئلة الكبيرة",
      authorEn: "Stephen Hawking",
      authorAr: "ستيفن هوكينج",
      price: 19.99,
      descriptionEn: "Hawking's final thoughts on the universe's biggest questions.",
      descriptionAr: "أفكار هوكينج الأخيرة حول أكبر أسئلة الكون.",
      category: "science",
      image: "https://m.media-amazon.com/images/I/91Gz1OrE9-L._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.7, count: 165 },
      language: "english",
      featured: false,
      bestSeller: false,
      mood: ["curious", "thoughtful"],
    },
    {
      id: 5,
      titleEn: "The Little Prince",
      titleAr: "الأمير الصغير",
      authorEn: "Antoine de Saint-Exupéry",
      authorAr: "أنطوان دو سانت إكزوبيري",
      price: 12.95,
      descriptionEn: "A poetic tale about a young prince who visits Earth from a tiny asteroid.",
      descriptionAr: "قصة شعرية عن أمير صغير يزور الأرض من كويكب صغير.",
      category: "children",
      image: "https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.9, count: 350 },
      language: "english",
      featured: false,
      bestSeller: true,
      mood: ["whimsical", "reflective"],
    },
    {
      id: 6,
      titleEn: "Sapiens: A Brief History of Humankind",
      titleAr: "العاقل: تاريخ مختصر للبشرية",
      authorEn: "Yuval Noah Harari",
      authorAr: "يوفال نوح هراري",
      price: 15.0,
      descriptionEn: "A groundbreaking narrative of humanity's creation and evolution.",
      descriptionAr: "سرد رائد لخلق البشرية وتطورها.",
      category: "history",
      image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.7, count: 178 },
      language: "english",
      featured: false,
      bestSeller: false,
      mood: ["curious", "thoughtful"],
    },
    {
      id: 7,
      titleEn: "1984",
      titleAr: "١٩٨٤",
      authorEn: "George Orwell",
      authorAr: "جورج أورويل",
      price: 13.99,
      descriptionEn: "A dystopian novel set in a totalitarian society, exploring the dangers of government overreach.",
      descriptionAr: "رواية ديستوبية تدور أحداثها في مجتمع شمولي، تستكشف مخاطر تجاوز الحكومة لصلاحياتها.",
      category: "fiction",
      image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
      rating: { rate: 4.7, count: 205 },
      language: "english",
      featured: false,
      bestSeller: false,
      mood: ["serious", "dystopian"],
    },
    {
      id: 8,
      titleEn: "Al-Ayyam (The Days)",
      titleAr: "الأيام",
      authorEn: "Taha Hussein",
      authorAr: "طه حسين",
      price: 14.5,
      descriptionEn: "An autobiographical account of the author's childhood and early education in rural Egypt.",
      descriptionAr: "سيرة ذاتية عن طفولة المؤلف وتعليمه المبكر في ريف مصر.",
      category: "biography",
      image: "https://kotobarabia.com/wp-content/uploads/2018/08/days.jpg",
      rating: { rate: 4.6, count: 92 },
      language: "arabic",
      featured: true,
      bestSeller: false,
      mood: ["reflective", "cultural"],
    },
  ]
  