import nodemailer from 'nodemailer';

const parseRequestBody = async (req) => {
    const raw = await new Promise((resolve) => {
        let buffer = '';
        req.on('data', (chunk) => {
            buffer += chunk;
        });
        req.on('end', () => resolve(buffer));
    });

    if (raw) {
        try {
            return JSON.parse(raw);
        } catch {
            return {};
        }
    }

    try {
        if (Buffer.isBuffer(req.body)) {
            return JSON.parse(req.body.toString('utf-8') || '{}');
        }
        if (typeof req.body === 'string') {
            return JSON.parse(req.body || '{}');
        }
        if (req.body && typeof req.body === 'object') {
            return req.body;
        }
    } catch {
        return {};
    }

    return {};
};

const getBoolean = (value) => {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        return value.toLowerCase() === 'true';
    }
    return false;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Allow', 'POST');
        res.end('Method Not Allowed');
        return;
    }

    const body = await parseRequestBody(req);
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: false, error: 'missing_fields' }));
        return;
    }

    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_SECURE,
        SMTP_USER,
        SMTP_PASS,
        SMTP_FROM,
        SMTP_TO
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: false, error: 'smtp_not_configured' }));
        return;
    }

    const port = Number(SMTP_PORT || 465);
    const secure = SMTP_SECURE ? getBoolean(SMTP_SECURE) : port === 465;

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });

    const subject = `Yeni iletişim formu: ${name}`;
    const text = [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        '',
        'Mesaj:',
        message
    ].filter(Boolean).join('\n');

    const html = `
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    try {
        await transporter.sendMail({
            from: SMTP_FROM || SMTP_USER,
            to: SMTP_TO || SMTP_USER,
            replyTo: email,
            subject,
            text,
            html
        });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: false, error: 'smtp_send_failed' }));
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
}
