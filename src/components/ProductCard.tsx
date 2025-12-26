import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCategoryLabel, getLocalizedProduct, type Product } from '../data/products';
import { useLanguage } from '../i18n';

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const { language, t } = useLanguage();
    const localizedProduct = getLocalizedProduct(product, language);
    const categoryLabel = getCategoryLabel(product.category, language);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card group"
        >
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {categoryLabel}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {localizedProduct.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {localizedProduct.description}
                </p>

                <div className="mb-4">
                    <ul className="space-y-1">
                        {localizedProduct.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-primary-600 mr-2">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    to={`/product/${product.id}`}
                    className="inline-block w-full text-center btn-primary"
                >
                    {t('product_card_cta')}
                </Link>
            </div>
        </motion.div>
    );
}
