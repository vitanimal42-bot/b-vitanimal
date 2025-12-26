import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { formatProductsCount, useLanguage } from '../i18n';

export default function Catalog() {
    const { language, t } = useLanguage();

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        {t('catalog_title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('catalog_subtitle')}
                    </p>
                </motion.div>

                {/* Products Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-8"
                >
                    <p className="text-gray-600">
                        {formatProductsCount(products.length, language)}
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* No products message */}
                {products.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-2xl text-gray-500">
                            {t('catalog_no_products')}
                        </p>
                    </motion.div>
                )}

                {/* Info Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-4">
                        {t('more_info_title')}
                    </h2>
                    <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
                        {t('catalog_info_text')}
                    </p>
                    <button className="btn-secondary bg-white">
                        {t('cta_contact')}
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
