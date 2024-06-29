import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:11434',
        pathRewrite: {
            '^/api': '/api/chat',
        },
        changeOrigin: true,
        secure: false
    }));
    app.use(createProxyMiddleware('/client', {
        target: 'http://localhost:8082',
        pathRewrite: {
            '^/client': '',
        },
        changeOrigin: true,
        secure: false
    }));
}