import { motion } from 'framer-motion';
import { useState } from 'react';
import { getCategoryLabel, getCategories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { formatProductsCount, useLanguage } from '../i18n';

export default function Catalog() {
    const allCategoryKey = 'all';
    const [selectedCategory, setSelectedCategory] = useState<string>(allCategoryKey);
    const categories = getCategories();
    const { language, t } = useLanguage();

    // Filter products based on selected category
    const filteredProducts = selectedCategory === allCategoryKey
        ? products
        : products.filter(product => product.category === selectedCategory);

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

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <button
                        key={allCategoryKey}
                        onClick={() => setSelectedCategory(allCategoryKey)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${allCategoryKey === selectedCategory
                                ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow'
                            }`}
                    >
                        {t('catalog_all')}
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${category === selectedCategory
                                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow'
                                }`}
                        >
                            {getCategoryLabel(category, language)}
                        </button>
                    ))}
                </motion.div>

                {/* Products Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-8"
                >
                    <p className="text-gray-600">
                        {formatProductsCount(filteredProducts.length, language)}
                        {selectedCategory !== allCategoryKey && ` - ${getCategoryLabel(selectedCategory, language)}`}
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* No products message */}
                {filteredProducts.length === 0 && (
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
