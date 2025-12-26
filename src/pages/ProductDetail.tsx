import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getCategoryLabel, getLocalizedProduct, products } from '../data/products';
import { useLanguage } from '../i18n';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(0);
    const { language, t } = useLanguage();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('product_not_found')}</h1>
                    <Link to="/catalog" className="btn-primary">
                        {t('product_back_to_catalog')}
                    </Link>
                </div>
            </div>
        );
    }

    const images = product.images || [product.image];
    const localizedProduct = getLocalizedProduct(product, language);
    const categoryLabel = getCategoryLabel(product.category, language);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
                >
                    <span className="text-2xl mr-2">←</span>
                    {t('product_back')}
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="card overflow-hidden sticky top-24">
                            {/* Main Image */}
                            <div className="relative h-96 bg-gradient-to-br from-primary-50 to-accent-50">
                                <img
                                    src={images[selectedImage]}
                                    alt={localizedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-6 right-6">
                                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                                        {categoryLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Gallery Thumbnails */}
                            {images.length > 1 && (
                                <div className="flex gap-2 p-4 bg-white">
                                    {images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative h-20 w-20 rounded-lg overflow-hidden transition-all ${selectedImage === index
                                                    ? 'ring-4 ring-primary-600 scale-105'
                                                    : 'hover:ring-2 hover:ring-primary-300'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${localizedProduct.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            {localizedProduct.name}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            {localizedProduct.description}
                        </p>

                        {/* Features */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="text-3xl mr-3">✨</span>
                                {t('product_features')}
                            </h2>
                            <ul className="space-y-3">
                                {localizedProduct.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start text-gray-700"
                                    >
                                        <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                                        <span className="text-lg">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Mechanism */}
                        {localizedProduct.mechanism && (
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">⚙️</span>
                                    {t('product_mechanism')}
                                </h2>
                                <p className="text-lg text-gray-700">{localizedProduct.mechanism}</p>
                            </div>
                        )}

                        {/* Benefits */}
                        {localizedProduct.benefits && (
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">🎯</span>
                                    {t('product_benefits')}
                                </h2>
                                <ul className="space-y-3">
                                    {localizedProduct.benefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-start text-gray-700"
                                        >
                                            <span className="text-accent-600 font-bold text-xl mr-3">•</span>
                                            <span className="text-lg">{benefit}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Composition */}
                        {localizedProduct.composition && (
                            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">🧪</span>
                                    {t('product_composition')}
                                </h2>
                                <div className="text-lg text-gray-700 whitespace-pre-line">{localizedProduct.composition}</div>
                            </div>
                        )}

                        {/* Usage Area */}
                        {localizedProduct.usageArea && (
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">📍</span>
                                    {t('product_usage_area')}
                                </h2>
                                <p className="text-lg text-gray-700">{localizedProduct.usageArea}</p>
                            </div>
                        )}

                        {/* Usage */}
                        {localizedProduct.usage && (
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">📋</span>
                                    {t('product_usage')}
                                </h2>
                                <div className="text-lg text-gray-700 whitespace-pre-line">{localizedProduct.usage}</div>
                            </div>
                        )}

                        {/* Warnings */}
                        {localizedProduct.warnings && (
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-6 border-2 border-orange-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">⚠️</span>
                                    {t('product_warnings')}
                                </h2>
                                <div className="text-lg text-gray-700 whitespace-pre-line">{localizedProduct.warnings}</div>
                            </div>
                        )}

                        {/* Storage */}
                        {localizedProduct.storage && (
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">🏪</span>
                                    {t('product_storage')}
                                </h2>
                                <p className="text-lg text-gray-700">{localizedProduct.storage}</p>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link to="/contact" className="btn-primary flex-1 text-center">
                                {t('cta_contact')}
                            </Link>
                            <Link to="/catalog" className="btn-secondary flex-1 text-center">
                                {t('product_cta_other_products')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
