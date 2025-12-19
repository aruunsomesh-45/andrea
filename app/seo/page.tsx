import type { Metadata } from 'next';
import SeoContent from './SeoContent';

export const metadata: Metadata = {
    title: 'SEO Services | Andrea Agency',
    description: 'Data-driven SEO strategies to increase visibility, traffic, and revenue.',
};

export default function SeoPage() {
    return <SeoContent />;
}
