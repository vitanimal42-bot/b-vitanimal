import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-white shadow-lg sticky top-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/vitanimal-logo.svg"
                            alt="Vitanimal Logo"
                            className="h-16 w-auto"
                        />
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="flex space-x-8">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                            >
                                {t('nav_home')}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                to="/catalog"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                            >
                                {t('nav_products')}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                            >
                                {t('nav_about')}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                            >
                                {t('nav_contact')}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <button
                                type="button"
                                onClick={() => setLanguage('tr')}
                                aria-label={t('language_tr')}
                                title={t('language_tr')}
                                aria-pressed={language === 'tr'}
                                className={`text-2xl transition-transform ${language === 'tr' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                            >
                                🇹🇷
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                aria-label={t('language_en')}
                                title={t('language_en')}
                                aria-pressed={language === 'en'}
                                className={`text-2xl transition-transform ${language === 'en' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                            >
                                🇬🇧
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
