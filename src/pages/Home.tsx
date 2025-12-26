import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../i18n';

export default function Home() {
    const featuredProducts = products.slice(0, 3);
    const { t } = useLanguage();

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                            Vitanimal
                        </h1>
                        <p className="text-xl lg:text-2xl mb-4 text-green-50">
                            {t('home_hero_tagline')}
                        </p>
                        <p className="text-lg lg:text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                            {t('home_hero_subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/catalog" className="btn-secondary bg-white">
                                {t('home_hero_cta_products')}
                            </Link>
                            <a href="#features" className="btn-secondary border-white text-white hover:bg-white/10">
                                {t('home_hero_cta_more')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('home_features_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('home_features_subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🌱',
                                title: t('home_feature_natural_title'),
                                description: t('home_feature_natural_desc')
                            },
                            {
                                icon: '⚡',
                                title: t('home_feature_growth_title'),
                                description: t('home_feature_growth_desc')
                            },
                            {
                                icon: '🛡️',
                                title: t('home_feature_immunity_title'),
                                description: t('home_feature_immunity_desc')
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="text-6xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('home_featured_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('home_featured_subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/catalog" className="btn-primary inline-block">
                            {t('home_featured_cta')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {t('home_cta_title')}
                        </h2>
                        <p className="text-xl text-green-50 mb-8">
                            {t('home_cta_subtitle')}
                        </p>
                        <Link to="/catalog" className="btn-secondary bg-white inline-block">
                            {t('home_cta_button')}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
