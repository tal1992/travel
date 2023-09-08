import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div>
      <p className='h-screen bg-gray-200 w-full grid place-items-center'>
        <Link href="/api/sitemap" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
          View Sitemap
        </Link>
      </p>
    </div>
  );
};

export default SitemapPage;
