import { useLanguage } from '../i18n';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                            Vitanimal
                        </h3>
                        <p className="text-gray-400">
                            {t('footer_tagline')}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t('footer_quick_links')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-primary-400 transition-colors">{t('nav_home')}</a></li>
                            <li><a href="/catalog" className="hover:text-primary-400 transition-colors">{t('nav_products')}</a></li>
                            <li><a href="/about" className="hover:text-primary-400 transition-colors">{t('nav_about')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t('footer_contact')}</h4>
                        <p className="text-gray-400">
                            {t('footer_contact_text')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Vitanimal. {t('footer_rights')}</p>
                </div>
            </div>
        </footer>
    );
}
