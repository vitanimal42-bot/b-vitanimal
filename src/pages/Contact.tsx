import { motion } from 'framer-motion';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useLanguage } from '../i18n';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        {t('contact_title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('contact_subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {t('contact_form_title')}
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact_form_name_label')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
                                    placeholder={t('contact_form_name_placeholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact_form_email_label')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
                                    placeholder={t('contact_form_email_placeholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact_form_phone_label')}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
                                    placeholder={t('contact_form_phone_placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('contact_form_message_label')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors resize-none"
                                    placeholder={t('contact_form_message_placeholder')}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
                                {status === 'loading' ? t('contact_form_sending') : t('contact_form_submit')}
                            </button>

                            {status === 'success' && (
                                <p className="text-sm text-green-600" role="status">
                                    {t('contact_form_success')}
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-600" role="alert">
                                    {t('contact_form_error')}
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Company Info */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="text-3xl mr-3">🏢</span>
                                {t('contact_company_title')}
                            </h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Vitanimal</h4>
                                    <p className="text-gray-600">{t('contact_company_tagline')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="text-3xl mr-3">📞</span>
                                {t('contact_details_title')}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">📧</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{t('contact_details_email_label')}</h4>
                                        <a href="mailto:info@vitanimal.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                            info@vitanimal.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">📱</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{t('contact_details_phone_label')}</h4>
                                        <a href="tel:+905551234567" className="text-primary-600 hover:text-primary-700 transition-colors">
                                            +90 555 123 45 67
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">📍</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{t('contact_details_address_label')}</h4>
                                        <p className="text-gray-600">
                                            {t('contact_details_address_value')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="text-3xl mr-3">⏰</span>
                                {t('contact_hours_title')}
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex justify-between">
                                    <span className="font-semibold">{t('contact_hours_weekdays')}</span>
                                    <span>09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">{t('contact_hours_saturday')}</span>
                                    <span>09:00 - 13:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">{t('contact_hours_sunday')}</span>
                                    <span className="text-red-600">{t('contact_hours_closed')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map or Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="card p-12 text-center bg-gradient-to-br from-primary-50 to-accent-50">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('more_info_title')}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            {t('contact_more_text')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:info@vitanimal.com" className="btn-primary">
                                {t('contact_more_email')}
                            </a>
                            <a href="tel:+905551234567" className="btn-secondary">
                                {t('contact_more_call')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
