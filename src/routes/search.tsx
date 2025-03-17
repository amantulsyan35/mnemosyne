import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useSearch } from '@tanstack/react-router';
import * as z from 'zod';

const searchSchema = z.object({
  value: z.string(),
});

interface SearchResultData {
  createdAt: string;
  title: string;
  link: string;
  description: string;
}

const data = [
  {
    createdAt: '12th June 2024',
    title: 'Something (Beatles song)',
    link: 'https://en.wikipedia.org/wiki/Something_(Beatles_song)',
    description:
      '"Something" is a song by the English rock band the Beatles from their 1969 studio album Abbey Road. It was written by George Harrison...',
  },
  {
    createdAt: '5th March 2023',
    title: 'React.js – A JavaScript library for building user interfaces',
    link: 'https://react.dev/',
    description:
      'React is a JavaScript library for building fast and interactive user interfaces. It was developed by Facebook and is now an open-source project.',
  },
  {
    createdAt: '10th January 2022',
    title: 'Introduction to TypeScript',
    link: 'https://www.typescriptlang.org/',
    description:
      'TypeScript extends JavaScript by adding types. It helps developers catch errors early and write more maintainable code.',
  },
  {
    createdAt: '8th September 2021',
    title: 'Next.js – The React Framework',
    link: 'https://nextjs.org/',
    description:
      'Next.js is a React framework that enables server-side rendering and generating static websites for React-based applications.',
  },
  {
    createdAt: '2nd February 2020',
    title: 'Node.js – JavaScript runtime',
    link: 'https://nodejs.org/',
    description:
      'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
  },
  {
    createdAt: '14th July 2019',
    title: 'What is CSS?',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    description:
      'CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML.',
  },
  {
    createdAt: '30th November 2018',
    title: 'Python – The Programming Language',
    link: 'https://www.python.org/',
    description:
      'Python is an interpreted, high-level and general-purpose programming language that emphasizes code readability with its indentation syntax.',
  },
  {
    createdAt: '18th May 2017',
    title: 'GitHub – Where the world builds software',
    link: 'https://github.com/',
    description:
      'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software.',
  },
];

export const Route = createFileRoute('/search')({
  component: SearchPage,
  validateSearch: searchSchema,
});

const Header = ({ value }: { value: string }) => {
  return (
    <header className='sticky top-0 z-10 bg-white py-2 px-6 border-b border-neutral-200'>
      <div className='mx-auto flex items-center justify-between'>
        <div className='flex-1 max-w-2xl'>
          <div className='flex items-center border border-neutral-200 rounded-full px-4 py-2 shadow-sm hover:shadow focus-within:shadow'>
            <Search className='h-5 w-5 text-neutral-400 mr-3' />
            <input
              type='text'
              value={value}
              className='flex-1 outline-none text-neutral-500'
              placeholder='Search Google or type a URL'
            />
          </div>
        </div>

        <Button
          variant='secondary'
          className='rounded-full bg-neutral-500 hover:bg-neutral-700 text-white h-8 px-4 cursor-pointer'
        >
          Support
        </Button>
      </div>
    </header>
  );
};

const SearchResult = ({ result }: { result: SearchResultData }) => {
  return (
    <div className='flex items-start'>
      <div className='mr-4'>
        <div className='h-5 w-5 bg-gray-200 rounded-full'></div>
      </div>
      <div className='max-w-2xl'>
        <div className='flex items-center'>
          <p className='text-sm text-gray-600'>
            Created at: <b>{result.createdAt}</b>
          </p>
        </div>
        <h3 className='mt-1'>
          <a href={result.link} className='text-lg font-medium text-blue-800 hover:underline'>
            {result.title}
          </a>
        </h3>
        <p className='mt-1 text-sm text-gray-700'>{result.description}</p>
      </div>
    </div>
  );
};

function SearchPage() {
  const searchValue = useSearch({ from: '/search', select: (search) => search.value });
  return (
    <div className='min-h-screen bg-white'>
      <Header value={searchValue} />
      <main className='px-4 sm:px-6 lg:px-8'>
        <div className='mt-4 flex flex-col lg:flex-row'>
          <div className='py-4'>
            <p className='mb-4 text-sm text-gray-600'>About {data.length} results (0.22 seconds)</p>
            <div className='flex flex-col gap-6'>
              {data.map((eachResult, index) => {
                return <SearchResult result={eachResult} key={index} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
