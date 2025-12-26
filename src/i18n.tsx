import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'tr' | 'en';

type Translations = {
    nav_home: string;
    nav_products: string;
    nav_about: string;
    nav_contact: string;
    language_tr: string;
    language_en: string;
    home_hero_tagline: string;
    home_hero_subtitle: string;
    home_hero_cta_products: string;
    home_hero_cta_more: string;
    home_features_title: string;
    home_features_subtitle: string;
    home_feature_natural_title: string;
    home_feature_natural_desc: string;
    home_feature_growth_title: string;
    home_feature_growth_desc: string;
    home_feature_immunity_title: string;
    home_feature_immunity_desc: string;
    home_featured_title: string;
    home_featured_subtitle: string;
    home_featured_cta: string;
    home_cta_title: string;
    home_cta_subtitle: string;
    home_cta_button: string;
    catalog_title: string;
    catalog_subtitle: string;
    catalog_all: string;
    catalog_no_products: string;
    more_info_title: string;
    catalog_info_text: string;
    cta_contact: string;
    product_card_cta: string;
    product_badge_new: string;
    product_not_found: string;
    product_back_to_catalog: string;
    product_back: string;
    product_features: string;
    product_mechanism: string;
    product_benefits: string;
    product_composition: string;
    product_usage_area: string;
    product_usage: string;
    product_warnings: string;
    product_storage: string;
    product_cta_other_products: string;
    contact_title: string;
    contact_subtitle: string;
    contact_form_title: string;
    contact_form_name_label: string;
    contact_form_name_placeholder: string;
    contact_form_email_label: string;
    contact_form_email_placeholder: string;
    contact_form_phone_label: string;
    contact_form_phone_placeholder: string;
    contact_form_message_label: string;
    contact_form_message_placeholder: string;
    contact_form_submit: string;
    contact_form_sending: string;
    contact_form_success: string;
    contact_form_error: string;
    contact_company_title: string;
    contact_company_tagline: string;
    contact_details_title: string;
    contact_details_email_label: string;
    contact_details_phone_label: string;
    contact_details_address_label: string;
    contact_details_address_value: string;
    contact_hours_title: string;
    contact_hours_weekdays: string;
    contact_hours_saturday: string;
    contact_hours_sunday: string;
    contact_hours_closed: string;
    contact_more_text: string;
    contact_more_email: string;
    contact_more_call: string;
    contact_more_whatsapp: string;
    footer_tagline: string;
    footer_quick_links: string;
    footer_contact: string;
    footer_contact_text: string;
    footer_rights: string;
};

const translations: Record<Language, Translations> = {
    tr: {
        nav_home: 'Ana Sayfa',
        nav_products: 'Ürünler',
        nav_about: 'Hakkımızda',
        nav_contact: 'İletişim',
        language_tr: 'Türkçe',
        language_en: 'İngilizce',
        home_hero_tagline: 'Broiler Tavukçuluğu için Premium Yem Katkı Çözümleri',
        home_hero_subtitle: 'Yüksek kaliteli, doğal hammaddelerden üretilmiş yem katkı ürünlerimizle tavuklarınızın sağlıklı büyümesini ve optimal performansını destekliyoruz',
        home_hero_cta_products: 'Ürünleri İncele',
        home_hero_cta_more: 'Daha Fazla Bilgi',
        home_features_title: 'Neden Vitanimal?',
        home_features_subtitle: 'Broiler tavuklarınızın her büyüme aşaması için özel formüle edilmiş ürünler',
        home_feature_natural_title: 'Doğal İçerikler',
        home_feature_natural_desc: 'Yüksek kaliteli, doğal hammaddelerden üretilmiş yem katkı ürünleri',
        home_feature_growth_title: 'Hızlı Büyüme',
        home_feature_growth_desc: 'Performansı destekleyen hedefli yem katkı formülasyonları',
        home_feature_immunity_title: 'Güçlü Bağışıklık',
        home_feature_immunity_desc: 'Vitamin ve mineraller ile desteklenmiş sağlıklı büyüme',
        home_featured_title: 'Öne Çıkan Ürünler',
        home_featured_subtitle: 'Her büyüme aşaması için özel formülasyonlar',
        home_featured_cta: 'Tüm Ürünleri Görüntüle',
        home_cta_title: 'Tavuklarınız için En İyisini Seçin',
        home_cta_subtitle: 'Vitanimal ile sağlıklı büyüme ve maksimum verim',
        home_cta_button: 'Hemen Başlayın',
        catalog_title: 'Ürün Kataloğu',
        catalog_subtitle: 'Broiler tavuklarınızın her büyüme evresine özel beslenme çözümleri',
        catalog_all: 'Tümü',
        catalog_no_products: 'Bu kategoride ürün bulunamadı',
        more_info_title: 'Daha Fazla Bilgi İçin',
        catalog_info_text: 'Ürünlerimiz hakkında detaylı bilgi almak ve tavuklarınız için en uygun beslenme programını oluşturmak için bizimle iletişime geçin',
        cta_contact: 'İletişime Geç',
        product_card_cta: 'Detaylı Bilgi',
        product_badge_new: 'Yeni Ürün',
        product_not_found: 'Ürün Bulunamadı',
        product_back_to_catalog: 'Kataloga Dön',
        product_back: 'Geri Dön',
        product_features: 'Özellikler',
        product_mechanism: 'Etki Mekanizması',
        product_benefits: 'Faydaları',
        product_composition: 'İçerik',
        product_usage_area: 'Kullanım Alanı',
        product_usage: 'Kullanım',
        product_warnings: 'Uyarılar',
        product_storage: 'Saklama Koşulları',
        product_cta_other_products: 'Diğer Ürünler',
        contact_title: 'İletişim',
        contact_subtitle: 'Ürünlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin',
        contact_form_title: 'Mesaj Gönderin',
        contact_form_name_label: 'Ad Soyad',
        contact_form_name_placeholder: 'Adınız ve soyadınız',
        contact_form_email_label: 'E-posta',
        contact_form_email_placeholder: 'ornek@email.com',
        contact_form_phone_label: 'Telefon',
        contact_form_phone_placeholder: '+90 (5__) ___ __ __',
        contact_form_message_label: 'Mesajınız',
        contact_form_message_placeholder: 'Mesajınızı buraya yazın...',
        contact_form_submit: 'Gönder',
        contact_form_sending: 'Gönderiliyor...',
        contact_form_success: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
        contact_form_error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
        contact_company_title: 'Şirket Bilgileri',
        contact_company_tagline: 'Premium Yem Katkı Çözümleri',
        contact_details_title: 'İletişim Bilgileri',
        contact_details_email_label: 'E-posta',
        contact_details_phone_label: 'Telefon',
        contact_details_address_label: 'Adres',
        contact_details_address_value: 'Karaosman Mahallesi Ulus Caddesi No:99 E/3 Adapazarı',
        contact_hours_title: 'Çalışma Saatleri',
        contact_hours_weekdays: 'Pazartesi - Cuma',
        contact_hours_saturday: 'Cumartesi',
        contact_hours_sunday: 'Pazar',
        contact_hours_closed: 'Kapalı',
        contact_more_text: 'Broiler tavukçuluğu için en uygun beslenme programını oluşturmak ve ürünlerimiz hakkında detaylı bilgi almak için uzman ekibimizle iletişime geçin',
        contact_more_email: 'E-posta Gönder',
        contact_more_call: 'Hemen Ara',
        contact_more_whatsapp: "WhatsApp'tan Yaz",
        footer_tagline: 'Broiler tavukçuluğu için premium yem katkı çözümleri',
        footer_quick_links: 'Hızlı Erişim',
        footer_contact: 'İletişim',
        footer_contact_text: 'Daha fazla bilgi için bizimle iletişime geçin.',
        footer_rights: 'Tüm hakları saklıdır.'
    },
    en: {
        nav_home: 'Home',
        nav_products: 'Products',
        nav_about: 'About',
        nav_contact: 'Contact',
        language_tr: 'Turkish',
        language_en: 'English',
        home_hero_tagline: 'Premium Feed Additive Solutions for Broiler Poultry',
        home_hero_subtitle: 'We support healthy growth and optimal performance with our high-quality feed additive products made from natural raw materials',
        home_hero_cta_products: 'View Products',
        home_hero_cta_more: 'Learn More',
        home_features_title: 'Why Vitanimal?',
        home_features_subtitle: 'Specially formulated products for every growth stage of your broilers',
        home_feature_natural_title: 'Natural Ingredients',
        home_feature_natural_desc: 'Feed additive products produced from high-quality natural raw materials',
        home_feature_growth_title: 'Fast Growth',
        home_feature_growth_desc: 'Targeted feed additive formulations that support performance',
        home_feature_immunity_title: 'Strong Immunity',
        home_feature_immunity_desc: 'Healthy growth supported with vitamins and minerals',
        home_featured_title: 'Featured Products',
        home_featured_subtitle: 'Special formulations for every growth stage',
        home_featured_cta: 'View All Products',
        home_cta_title: 'Choose the Best for Your Chickens',
        home_cta_subtitle: 'Healthy growth and maximum yield with Vitanimal',
        home_cta_button: 'Get Started',
        catalog_title: 'Product Catalog',
        catalog_subtitle: 'Nutrition solutions tailored to each growth stage of your broilers',
        catalog_all: 'All',
        catalog_no_products: 'No products found in this category',
        more_info_title: 'For More Information',
        catalog_info_text: 'Contact us to get detailed information about our products and to create the most suitable nutrition program for your chickens',
        cta_contact: 'Contact Us',
        product_card_cta: 'View Details',
        product_badge_new: 'New Product',
        product_not_found: 'Product Not Found',
        product_back_to_catalog: 'Back to Catalog',
        product_back: 'Go Back',
        product_features: 'Features',
        product_mechanism: 'Mechanism of Action',
        product_benefits: 'Benefits',
        product_composition: 'Composition',
        product_usage_area: 'Usage Area',
        product_usage: 'Usage',
        product_warnings: 'Warnings',
        product_storage: 'Storage Conditions',
        product_cta_other_products: 'Other Products',
        contact_title: 'Contact',
        contact_subtitle: 'Get in touch with us for detailed information about our products',
        contact_form_title: 'Send a Message',
        contact_form_name_label: 'Full Name',
        contact_form_name_placeholder: 'Your full name',
        contact_form_email_label: 'Email',
        contact_form_email_placeholder: 'example@email.com',
        contact_form_phone_label: 'Phone',
        contact_form_phone_placeholder: '+90 (5__) ___ __ __',
        contact_form_message_label: 'Your Message',
        contact_form_message_placeholder: 'Write your message here...',
        contact_form_submit: 'Send',
        contact_form_sending: 'Sending...',
        contact_form_success: 'Your message has been sent successfully. We will get back to you shortly.',
        contact_form_error: 'Message could not be sent. Please try again later.',
        contact_company_title: 'Company Information',
        contact_company_tagline: 'Premium Feed Additive Solutions',
        contact_details_title: 'Contact Details',
        contact_details_email_label: 'Email',
        contact_details_phone_label: 'Phone',
        contact_details_address_label: 'Address',
        contact_details_address_value: 'Karaosman Mahallesi Ulus Caddesi No:99 E/3 Adapazarı',
        contact_hours_title: 'Working Hours',
        contact_hours_weekdays: 'Monday - Friday',
        contact_hours_saturday: 'Saturday',
        contact_hours_sunday: 'Sunday',
        contact_hours_closed: 'Closed',
        contact_more_text: 'Contact our expert team to create the most suitable nutrition program for broiler poultry and to get detailed information about our products',
        contact_more_email: 'Send Email',
        contact_more_call: 'Call Now',
        contact_more_whatsapp: 'Chat on WhatsApp',
        footer_tagline: 'Premium feed additive solutions for broiler poultry',
        footer_quick_links: 'Quick Links',
        footer_contact: 'Contact',
        footer_contact_text: 'Contact us for more information.',
        footer_rights: 'All rights reserved.'
    }
};

const STORAGE_KEY = 'vitanimal_language';

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: keyof Translations) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return 'tr';
        }

        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored === 'en' ? 'en' : 'tr';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, language);
        }
    }, [language]);

    const t = useCallback((key: keyof Translations) => translations[language][key], [language]);

    const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}

export const formatProductsCount = (count: number, language: Language): string => {
    if (language === 'tr') {
        return `${count} ürün gösteriliyor`;
    }
    return `${count} products shown`;
};
