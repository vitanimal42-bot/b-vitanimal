import type { Language } from '../i18n';

export interface ProductTranslation {
    name?: string;
    description?: string;
    features?: string[];
    composition?: string;
    benefits?: string[];
    mechanism?: string;
    usageArea?: string;
    usage?: string;
    warnings?: string;
    storage?: string;
}

export interface ProductI18n {
    en?: ProductTranslation;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    features: string[];
    image: string;
    images?: string[]; // Gallery images
    composition?: string;
    benefits?: string[];
    mechanism?: string;
    usageArea?: string;
    usage?: string;
    warnings?: string;
    storage?: string;
    i18n?: ProductI18n;
}

export const categoryLabels: Record<string, { tr: string; en: string }> = {
    'Yem Katkısı': { tr: 'Yem Katkısı', en: 'Feed Additive' },
    'Sıvı Yem Takviyesi': { tr: 'Sıvı Yem Takviyesi', en: 'Liquid Feed Supplement' },
    'Vitamin & Mineral': { tr: 'Vitamin & Mineral', en: 'Vitamin & Mineral' }
};

export const getCategoryLabel = (category: string, language: Language): string => {
    const labels = categoryLabels[category];
    return labels ? labels[language] : category;
};

export const getLocalizedProduct = (product: Product, language: Language): Product => {
    if (language !== 'en' || !product.i18n?.en) {
        return product;
    }

    const translation = product.i18n.en;

    return {
        ...product,
        name: translation.name ?? product.name,
        description: translation.description ?? product.description,
        features: translation.features ?? product.features,
        composition: translation.composition ?? product.composition,
        benefits: translation.benefits ?? product.benefits,
        mechanism: translation.mechanism ?? product.mechanism,
        usageArea: translation.usageArea ?? product.usageArea,
        usage: translation.usage ?? product.usage,
        warnings: translation.warnings ?? product.warnings,
        storage: translation.storage ?? product.storage
    };
};

export const products: Product[] = [
    {
        id: '1',
        name: 'VITACROL 500 ML',
        category: 'Yem Katkısı',
        description: 'Bağırsak sağlığı için doğal antimikrobiyal destek.',
        features: [
            'Ham Protein %0,00',
            'Ham Yağ %50,00',
            'Nem %1,0'
        ],
        image: '/vitacrol.png',
        images: ['/vitacrol.png'], // Gallery
        composition: `Bileşimi (1 L'de)

Analitik bileşenler
Ham Protein %0,00
Ham Yağ %50,00
Nem %1,0

Duyusal Yem Katkı Maddeleri/Doğal Ürünler 500.000 mg
Kekik yağı (CoE 317)

Teknolojik Yem Katkıları, Koruyucular ve Stabilizatörler
Gliseril polietilen glikol risinoleat (E484)
Dolgu Maddesi Q.S.P Demineralize Su`,
        mechanism: 'Bitkisel antimikrobiyal bileşenler ve fitobiyotik ajanlar ile bağırsak florasını düzenler, koksidiyoz riskini azaltır.',
        benefits: [
            'Bakteri, mantar ve virüslere karşı doğal koruma sağlar.',
            'Sindirim sisteminin sağlıklı çalışmasını destekler.',
            'Düzenli kullanımda koksidiyoz riskini düşürür.',
            'EMW70 ile birlikte solunum sorunlarının hafifletilmesine yardımcı olur.'
        ],
        usageArea: 'Sindirim ve bağışıklık sistemi destekleyicisi olarak periyodik veya yoğun dönemlerde.',
        usage: `Kullanım Talimatları

Tüm çiftlik hayvanlarında ve kanatlı hayvanlarda (Etlik, yumurtacı ve damızlık civciv, piliç, yarka, tavuk, hindi, gezen tavuk) evcil hayvanlarda, aromatik-iştah arttırıcı olarak;

Hayvan başına 1-2 damla ağızdan ya da;
30 mL-60 mL/Ton dozunda, içme suyuna katılarak kullanımı önerilir.`,
        warnings: `Gıda maddelerinden uzakta ve çocukların ulaşamayacağı yerde saklayın. Ürünün kullanımı sırasında, koruyucu ekipman kullanınız, solumayınız, göz ve ciltle temastan kaçınız. Temas halinde bol su ile yıkayınız. Beklenmeyen bir etki görüldüğünde veteriner hekime danışınız.`,
        storage: 'Güneş ışığından ve nemden koruyarak, oda şartlarında (15-25°C) ve kendi açılmamış ambalajında depolayınız. Açıldıktan sonra en kısa sürede kullanılmalıdır.',
        i18n: {
            en: {
                name: 'VITACROL 500 ML',
                description: 'Natural antimicrobial support for gut health.',
                features: [
                    'Crude Protein 0.00%',
                    'Crude Fat 50.00%',
                    'Moisture 1.0%'
                ],
                composition: `Composition (per 1 L)

Analytical constituents
Crude Protein 0.00%
Crude Fat 50.00%
Moisture 1.0%

Sensory feed additives/natural products 500,000 mg
Oregano oil (CoE 317)

Technological feed additives, preservatives and stabilizers
Glyceryl polyethylene glycol ricinoleate (E484)
Filler Q.S.P. demineralized water`,
                mechanism: 'Regulates gut flora with botanical antimicrobial components and phytobiotic agents, reducing the risk of coccidiosis.',
                benefits: [
                    'Provides natural protection against bacteria, fungi, and viruses.',
                    'Supports healthy digestive function.',
                    'Regular use reduces the risk of coccidiosis.',
                    'Helps ease respiratory issues when used together with EMW70.'
                ],
                usageArea: 'As digestive and immune system support during periodic or intensive periods.',
                usage: `Directions for Use

For all farm animals and poultry (broilers, layers, breeder chicks, pullets, hens, turkeys, free-range chickens) and pets, as an aromatic appetite enhancer;

1-2 drops per animal orally; or
30-60 mL/ton added to drinking water.`,
                warnings: `Keep away from foodstuffs and out of reach of children. During use, wear protective equipment, do not inhale, and avoid contact with eyes and skin. In case of contact, rinse with plenty of water. Consult a veterinarian if any unexpected effect is observed.`,
                storage: 'Protect from sunlight and moisture, store at room conditions (15-25°C) in unopened original packaging. Use as soon as possible after opening.'
            }
        }
    },
    {
        id: '2',
        name: 'EMW70 500 ML',
        category: 'Yem Katkısı',
          description: 'İştah açıcı ve doğal solunum desteği.',
        features: [
            'Ham Protein %0,00',
            'Ham Yağ %70,00',
            'Nem %0,0'
        ],
        image: '/emw70.png',
        images: ['/emw70.png'], // Gallery
        composition: `Bileşimi (1 L'de)

Analitik bileşenler
Ham Protein %0,00
Ham Yağ %70,00
Nem %0,0

Duyusal Yem Katkı Maddeleri/Doğal Ürünler 700.000 mg
Eucalyptus (CoE 185), Menthol (2b02015),
Wintergreen oil (CoE 211)

Diğer Yem Maddeleri / 300.000 mg
Propilen glikol (13.11.1)`,
        mechanism: 'Uçucu yağlar ve fitobiyotik bileşenler sayesinde solunum yollarını açar, çiftlik havasını tazeler.',
        benefits: [
            'Aromatik iştah açıcı etkisiyle yem tüketimini artırır.',
            'Aşılamalar, hastalıklar ve kümes ortamı nedeniyle oluşan mukusu giderir, solunumu kolaylaştırır.',
            'Hava kalitesini artırır, amonyak kokusunu azaltır.',
            'Sıcaklık ve çevresel stres etmenlerine karşı dayanıklılığı artırır.'
        ],
        usageArea: 'Solunum problemleri görülen veya stres altındaki kanatlı sürülerinde.',
        usage: `Kullanım Talimatları

Tüm çiftlik hayvanlarında ve kanatlı hayvanlarda (Etlik, yumurtacı ve damızlık civciv, piliç, yarka, tavuk, hindi, gezen tavuk) evcil hayvanlarda, aromatik-iştah arttırıcı olarak;

Hayvan başına 1-2 damla ağızdan ya da;
20 mL-50 mL/Ton dozunda, içme suyuna katılarak,
20 mL-50 mL/10L. İlk su içinde spreyleme yapılarak, kullanımı önerilir.`,
        warnings: `Gıda maddelerinden uzakta ve çocukların ulaşamayacağı yerde saklayın. Ürünün kullanımı sırasında, koruyucu ekipman kullanınız, solumayınız, göz ve ciltle temastan kaçınız. Temas halinde bol su ile yıkayınız. Beklenmeyen bir etki görüldüğünde veteriner hekime danışınız.`,
        storage: 'Güneş ışığından ve nemden koruyarak, oda şartlarında (15-25°C) ve kendi açılmamış ambalajında depolayınız. Açıldıktan sonra en kısa sürede kullanılmalıdır.',
        i18n: {
            en: {
                name: 'EMW70 500 ML',
                  description: 'Appetite-stimulating and natural respiratory support.',
                features: [
                    'Crude Protein 0.00%',
                    'Crude Fat 70.00%',
                    'Moisture 0.0%'
                ],
                composition: `Composition (per 1 L)

Analytical constituents
Crude Protein 0.00%
Crude Fat 70.00%
Moisture 0.0%

Sensory feed additives/natural products 700,000 mg
Eucalyptus (CoE 185), Menthol (2b02015),
Wintergreen oil (CoE 211)

Other feed materials / 300,000 mg
Propylene glycol (13.11.1)`,
                mechanism: 'Volatile oils and phytobiotic components open the airways and refresh barn air.',
                benefits: [
                    'Increases feed intake with an aromatic appetite-stimulating effect.',
                    'Clears mucus caused by vaccination, disease, or housing conditions and eases breathing.',
                    'Improves air quality and reduces ammonia odor.',
                    'Improves resistance to temperature and environmental stressors.'
                ],
                usageArea: 'In poultry flocks with respiratory problems or under stress.',
                usage: `Directions for Use

For all farm animals and poultry (broilers, layers, breeder chicks, pullets, hens, turkeys, free-range chickens) and pets, as an aromatic appetite enhancer;

1-2 drops per animal orally; or
20-50 mL/ton added to drinking water,
20-50 mL/10 L by spraying into the first drinking water.`,
                warnings: `Keep away from foodstuffs and out of reach of children. During use, wear protective equipment, do not inhale, and avoid contact with eyes and skin. In case of contact, rinse with plenty of water. Consult a veterinarian if any unexpected effect is observed.`,
                storage: 'Protect from sunlight and moisture, store at room conditions (15-25°C) in unopened original packaging. Use as soon as possible after opening.'
            }
        }
    },
    {
        id: '3',
        name: 'VITACELL 5L',
        category: 'Sıvı Yem Takviyesi',
        description: 'Bağışıklık destekleyici doğal immünomodülatör.',
        features: [
            'Ham Protein %6,50',
            'Ham Yağ %1,00',
            'Nem %82,0'
        ],
        image: '/vitacell.png',
        images: ['/vitacell.png'], // Gallery
        composition: `Bileşimi (1 L'de)

Analitik bileşenler
Ham Protein %6,50
Ham Yağ %1,00
Nem %82,0

Teknolojik Yem Katkıları, Koruyucular ve Stabilizatörler 55.600 mg
Asetik Asit (E260) Xanthan gum (E415)

Yem Maddeleri ve Dolgu Maddeleri / 300.000 mg
Maya ve benzeri ürünler (12.1.5) (MOS, Beta Glukan, Hidrolize maya hücresi)`,
        mechanism: 'Doğal immunomodülatörler, beta glukan, MOS, amino asitler ve antioksidan bileşikler sayesinde bağışıklık sistemini uyarır.',
        benefits: [
            'Düzenli kullanımda eimeria türlerine karşı güçlü koruma sağlar.',
            'Bağışıklık sistemini aktive eder, enfeksiyonlara karşı direnç sağlar.',
            'Toksinleri bağlayarak karaciğer yükünü azaltır.',
            'Antibiyotik kullanımını azaltır, işletme maliyetlerini düşürür.',
            'Aşılama öncesi ve sonrası optimum immün yanıt oluşumuna katkı sağlar.'
        ],
        usageArea: 'Tüm kanatlı türlerinde (broiler, yumurtacı, hindi, ördek) bağışıklık destekleyici olarak.',
        usage: `Kullanım Talimatları

Tüm kanatlı çiftlik hayvanlarında koruyucu ve destekleyici olarak;

Hayvan başına 3-5 damla ağızdan ya da;
100-500 mL/Ton dozunda, içme suyuna katılarak kullanımı önerilir.`,
        warnings: `Ürünü kullanırken eldiven ve koruyucu kıyafet giyiniz. Direkt solumayın, ciltle temastan kaçının, temas halinde bol su ile yıkayınız. Beklenmeyen bir etki halinde, veteriner hekime başvurunuz.`,
        storage: 'Güneş ışığından ve nemden koruyarak, oda şartlarında (15-25°C) ve kendi açılmamış ambalajında depolayınız. Açıldıktan sonra en kısa sürede kullanılmalıdır.',
        i18n: {
            en: {
                name: 'VITACELL 5L',
                description: 'Immune-supporting natural immunomodulator.',
                features: [
                    'Crude Protein 6.50%',
                    'Crude Fat 1.00%',
                    'Moisture 82.0%'
                ],
                composition: `Composition (per 1 L)

Analytical constituents
Crude Protein 6.50%
Crude Fat 1.00%
Moisture 82.0%

Technological feed additives, preservatives and stabilizers 55,600 mg
Acetic acid (E260) Xanthan gum (E415)

Feed materials and carriers / 300,000 mg
Yeast and similar products (12.1.5) (MOS, Beta Glucan, Hydrolyzed yeast cell)`,
                mechanism: 'Stimulates the immune system through natural immunomodulators, beta glucan, MOS, amino acids, and antioxidant compounds.',
                benefits: [
                    'Regular use provides strong protection against Eimeria species.',
                    'Activates the immune system and provides resistance to infections.',
                    'Binds toxins and reduces liver load.',
                    'Reduces antibiotic use and lowers operating costs.',
                    'Contributes to optimal immune response before and after vaccination.'
                ],
                usageArea: 'As immune support in all poultry species (broilers, layers, turkeys, ducks).',
                usage: `Directions for Use

For all poultry farm animals as protective and supportive;

3-5 drops per animal orally; or
100-500 mL/ton added to drinking water.`,
                warnings: `Wear gloves and protective clothing while using the product. Do not inhale directly, avoid contact with skin, and rinse with plenty of water in case of contact. Consult a veterinarian if any unexpected effect occurs.`,
                storage: 'Protect from sunlight and moisture, store at room conditions (15-25°C) in unopened original packaging. Use as soon as possible after opening.'
            }
        }
    },
    {
        id: '4',
        name: 'VITALMIN PREMIX 10 L',
        category: 'Vitamin & Mineral',
        description: 'Mineral - İz Mineral - Vitamin Kompleksi.',
        features: [
            'Orthophosphoric acid (1a338) 54.000 mg',
            'Formic acid (E236) 10.000 mg',
            'Acetic acid (E260) 5.000 mg',
            'Lactic acid (E270) 1.000 mg',
            'Propionic acid (1k280) 1.000 mg'
        ],
        image: '/placeholder-product.png',
        images: ['/placeholder-product.png'], // Gallery
        composition: `Bileşimi (1 L'de)

Orthophosphoric acid (1a338) 54.000 mg
Formic acid (E236) 10.000 mg, Acetic acid (E260) 5.000 mg
Lactic acid (E270) 1.000 mg, Propionic acid (1k280) 1.000 mg
Iron chloride (3b102) 3.166 mg, Zinc chloride (3b602) 1.246 mg
Manganous chloride (3b501) 1.164 mg, Copper sulphate (3b405) 476 mg
Cobalt sulphate (3b305) 456 mg
Calcium chloride (11.1.6) 48.000 mg, Magnesium chloride (11.2.6) 6.384 mg
Sodium chloride (11.4.1) 3.146 mg, Potassium chloride (11.5.1) 2.096 mg`,
        mechanism: 'Kanatlıların kemik gelişimi, kan parametreleri ve organ fonksiyonları için gerekli olan mineralleri dengeli biçimde sağlar.',
        benefits: [
            'Sağlıklı kemik, organ ve yumurta kabuğu oluşumunu destekler.',
            'Su sistemini temiz tutarak biyofilm oluşumunu önler.',
            'Su ve yem tüketimini artırır, ağırlık artışına katkı sağlar.',
            'Antibiyotik sonrası iştah düşüklüğünü giderir.',
            'İçme suyu pH\'sının düşürülmesine, patojen bakteriyel yükün azaltılmasına yardımcı olurken, içme suyu ve nipel hattının temiz ve açık tutulmasına katkıda bulunur.'
        ],
        usageArea: 'Tüm kanatlı işletmelerinde büyüme ve verim dönemlerinde destek olarak.',
        usage: `Kullanım Talimatları

Tüm çiftlik hayvanlarında ve kanatlı hayvanlarda (Etlik, yumurtacı ve damızlık civciv, piliç, yarka, tavuk, hindi, gezen tavuk) evcil hayvanlarda iz mineral ve mineral ihtiyacını karşılamak üzere ve destekleyici olarak;

0,5-1 Litre/Ton dozunda 3-5 gün süreyle içme suyuna katılarak kullanımı önerilir.`,
        storage: 'Güneş ışığından ve nemden koruyarak, oda şartlarında kendi açılmamış ambalajında depolayınız.',
        i18n: {
            en: {
                name: 'VITALMIN PREMIX 10 L',
                description: 'Mineral - Trace Mineral - Vitamin Complex.',
                features: [
                    'Orthophosphoric acid (1a338) 54,000 mg',
                    'Formic acid (E236) 10,000 mg',
                    'Acetic acid (E260) 5,000 mg',
                    'Lactic acid (E270) 1,000 mg',
                    'Propionic acid (1k280) 1,000 mg'
                ],
                composition: `Composition (per 1 L)

Orthophosphoric acid (1a338) 54,000 mg
Formic acid (E236) 10,000 mg, Acetic acid (E260) 5,000 mg
Lactic acid (E270) 1,000 mg, Propionic acid (1k280) 1,000 mg
Iron chloride (3b102) 3,166 mg, Zinc chloride (3b602) 1,246 mg
Manganous chloride (3b501) 1,164 mg, Copper sulphate (3b405) 476 mg
Cobalt sulphate (3b305) 456 mg
Calcium chloride (11.1.6) 48,000 mg, Magnesium chloride (11.2.6) 6,384 mg
Sodium chloride (11.4.1) 3,146 mg, Potassium chloride (11.5.1) 2,096 mg`,
                mechanism: 'Provides a balanced supply of minerals necessary for bone development, blood parameters, and organ functions in poultry.',
                benefits: [
                    'Supports healthy bone, organ, and eggshell formation.',
                    'Keeps the water system clean by preventing biofilm formation.',
                    'Increases water and feed intake and contributes to weight gain.',
                    'Relieves loss of appetite after antibiotic use.',
                    'Helps lower drinking water pH and reduce pathogenic bacterial load while keeping drinking water and nipple lines clean and open.'
                ],
                usageArea: 'As support during growth and production periods in all poultry operations.',
                usage: `Directions for Use

For all farm animals and poultry (broilers, layers, breeder chicks, pullets, hens, turkeys, free-range chickens) and pets, as support to meet trace mineral and mineral needs;

0.5-1 L/ton for 3-5 days added to drinking water.`,
                storage: 'Protect from sunlight and moisture, store at room temperature in unopened original packaging.'
            }
        }
    }
];

// Helper function to get unique categories
export const getCategories = (): string[] => {
    const categories = products.map(p => p.category);
    return Array.from(new Set(categories));
};
