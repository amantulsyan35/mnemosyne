import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='dark min-h-screen flex flex-col items-center justify-center bg-background'>
      <div className='text-8xl font-bold mb-8 space-x-1 flex'>
        <span className='text-neutral-200 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          I
        </span>
        <span className='text-neutral-300 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          n
        </span>
        <span className='text-neutral-400 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          t
        </span>
        <span className='text-neutral-500 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          e
        </span>
        <span className='text-neutral-600 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          r
        </span>
        <span className='text-neutral-700 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          s
        </span>
        <span className='text-neutral-800 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          e
        </span>
        <span className='text-neutral-900 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          c
        </span>
        <span className='text-neutral-900 transition-colors duration-500 ease-in-out transform hover:text-primary'>
          t
        </span>
      </div>
    </div>
  );
}
