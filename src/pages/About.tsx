import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const aboutCopy = {
  tr: {
    eyebrow: "Veteriner Hekim Levent Postalcıoğlu'nun Broiler Vitanimal Hikayesi",
    title: "Çeyrek Asırlık Tecrübe, Doğal Gelecek: Broiler Vitanimal",
    intro:
      "42ler çatısı altında yer alan Broiler Vitanimal'in temelleri, bir markadan öte, kanatlı sektörüne adanmış profesyonel bir yaşam öyküsüne dayanır.",
    fieldTitle: "Sahadan Gelen Bilgi: Veteriner Hekim Levent Postalcıoğlu",
    fieldParagraphs: [
      "Hikayemiz, 1998 yılında kurucumuz Veteriner Hekim Levent Postalcıoğlu'nun kanatlı dünyasına ilk adımını atmasıyla başladı.",
      '1998-2007 yılları arasında çeşitli entegre tesislerde "Broiler Saha Hekimi" olarak görev yapan Postalcıoğlu, üretimin kalbinde sahada kendini geliştirdi.',
      "Bu süreç, teorik veterinerlik bilgisinin saha gerçekleriyle harmanlandığı, sektörün ihtiyaçlarının en saf haliyle analiz edildiği bir dönem oldu.",
    ],
    visionTitle: "Vizyoner Dönüşüm ve Kurumsallaşma",
    visionParagraph:
      "2007-2010 yılları arasında satış ve pazarlama alanında edindiği stratejik bakış açısını, 2011 yılında kurduğu Veteriner Kanatlı Kliniği ile birleştiren Veteriner Hekim Levent Postalcıoğlu, bugün gururla temsil ettiğimiz şirketimizin temellerini bu dönemde attı.",
    visionLead:
      "Sakarya, Bolu ve çevre iller başta olmak üzere, broiler üretiminin kalbi sayılan bölgelerde;",
    visionBullets: [
      "Uzman Danışmanlık: İşletme verimliliğini artıran stratejik yaklaşımlar.",
      "Veteriner Hizmetleri: Saha tecrübesiyle sabit profesyonel müdahaleler.",
      "Laboratuvar Çözümleri: Bilimsel veriye dayalı tanı ve takip süreçleri ile üreticilerin en güvenilir çözüm ortağı olduk.",
    ],
    innovationTitle: "Bilimsel İnovasyon: Antibiyotiklere Doğal Alternatifler",
    innovationParagraphs: [
      "Bizim için profesyonellik, sadece mevcut sorunları çözmek değil, sektörün geleceğine yön vermektir. Bu amaçla; ürün geliştirme ve Ar-Ge çalışmalarımızı tek bir odak noktasında topladık:",
      "Doğallık. Kanatlı sağlığını korumak ve verimliliği sürdürülebilir kılmak adına, antibiyotiklere alternatif doğal ürünler üzerine derinlemesine çalışmalar yürüttük. Doğanın sunduğu şifayı, modern bilimle buluşturarak sektöre sağlıklı ve kalıntısız üretim modelleri kazandırdık.",
    ],
    todayTitle: "Bugün ve Yarın",
    todayParagraph:
      "42ler firmasının bir markası olan Broiler Vitanimal, 1998'den bugüne biriken bu eşsiz saha tecrübesinin ve bilimsel tutkunun bir meyvesidir. Geçmişin tecrübesini, modern dünyanın Ar-Ge disipliniyle birleştirerek; kanatlı sağlığında güvenin ve kalitenin adresi olmaya devam ediyoruz.",
    leventCaption: "",
    instituteCaption: "",
  },
  en: {
    eyebrow: "Veterinarian Levent Postalcıoğlu's Broiler Vitanimal Story",
    title:
      "A Quarter-Century of Experience, a Natural Future: Broiler Vitanimal",
    intro:
      "The foundations of Broiler Vitanimal under the 42ler umbrella are rooted in a professional life story devoted to the poultry sector, beyond a single brand.",
    fieldTitle: "Field Knowledge: Veterinarian Levent Postalcıoğlu",
    fieldParagraphs: [
      "Our story began in 1998 when our founder, Veterinarian Levent Postalcıoğlu, took his first step into the poultry world.",
      'Between 1998 and 2007, Postalcıoğlu worked as a "Broiler Field Veterinarian" at various integrated facilities and grew at the heart of production, inside the poultry houses.',
      "This period blended theoretical veterinary knowledge with field realities and allowed the sector’s needs to be analyzed in their purest form.",
    ],
    visionTitle: "Visionary Transformation and Institutionalization",
    visionParagraph:
      "Combining the strategic perspective gained in sales and marketing between 2007-2010 with the Poultry Veterinary Clinic he founded in 2011, Veterinarian Levent Postalcıoğlu laid the foundations of the company we proudly represent today.",
    visionLead:
      "In Sakarya, Bolu, and surrounding provinces—regions considered the heart of broiler production—we delivered;",
    visionBullets: [
      "Expert Consultancy: Strategic approaches that increase operational efficiency.",
      "Veterinary Services: Consistent professional interventions backed by field experience.",
      "Laboratory Solutions: We became the most reliable partner for producers with science-based diagnosis and monitoring processes.",
    ],
    innovationTitle:
      "Scientific Innovation: Natural Alternatives to Antibiotics",
    innovationParagraphs: [
      "For us, professionalism is not only about solving current problems but also shaping the future of the sector. With this purpose, we gathered our product development and R&D efforts around a single focus:",
      "Naturalness. To protect poultry health and sustain efficiency, we carried out in-depth studies on natural alternatives to antibiotics. By blending nature’s healing power with modern science, we delivered healthy and residue-free production models to the sector.",
    ],
    todayTitle: "Today and Tomorrow",
    todayParagraph:
      "As a brand of 42ler, Broiler Vitanimal is the result of this unique field experience and scientific passion accumulated since 1998. By combining past experience with modern R&D discipline, we continue to be the trusted address for quality in poultry health.",
    leventCaption: "",
    instituteCaption: "",
  },
};

export default function About() {
  const { language } = useLanguage();
  const content = aboutCopy[language];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-10 border-t-8 border-primary-600"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
            {content.eyebrow}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {content.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {content.intro}
          </p>
        </motion.section>

        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.fieldTitle}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {content.fieldParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <motion.figure
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Kurum fotoğrafı"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            {content.instituteCaption && (
              <figcaption className="p-4 text-sm text-gray-500">
                {content.instituteCaption}
              </figcaption>
            )}
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-10 order-1 lg:order-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.visionTitle}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{content.visionParagraph}</p>
              <p className="font-semibold text-gray-900">
                {content.visionLead}
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                {content.visionBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.innovationTitle}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {content.innovationParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border-l-4 border-primary-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.todayTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {content.todayParagraph}
          </p>
        </section>
      </div>
    </div>
  );
}
