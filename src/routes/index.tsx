import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Button } from '../components/ui/button';
import { useForm } from '@tanstack/react-form';
import { Search } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      search: '',
    },
    onSubmit: ({ value }) => {
      navigate({
        to: '/search',
        search: { value: value.search },
      });
    },
  });

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='p-4'>
        <nav className='flex justify-end items-center gap-4'>
          <Button
            variant='secondary'
            className='rounded-full bg-neutral-500 hover:bg-neutral-700 text-white h-8 px-4 cursor-pointer'
          >
            Support
          </Button>
        </nav>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className='flex-1 flex flex-col items-center justify-center px-4 -mt-20'
      >
        <div className='max-w-md w-full mx-auto flex flex-col items-center'>
          <div className='text-8xl font-bold mb-8'>
            <span className=''>M</span>
            <span className='text-neutral-900'>n</span>
            <span className='text-neutral-800'>e</span>
            <span className='text-neutral-700'>m</span>
            <span className='text-neutral-600'>o</span>
            <span className='text-neutral-500'>s</span>
            <span className='text-neutral-400'>y</span>
            <span className='text-neutral-300'>n</span>
            <span className='text-neutral-200'>e</span>
          </div>
          <div className='relative w-full mb-8'>
            <form.Field
              name='search'
              validators={{
                onSubmit: ({ value }) =>
                  value.length > 5
                    ? undefined
                    : "Even Google needs *something* to search! Don't be shy!",
              }}
              children={(field) => (
                <>
                  <div className='flex items-center border border-neutral-200 rounded-full px-4 py-2 shadow-sm hover:shadow focus-within:shadow'>
                    <Search className='h-5 w-5 text-neutral-400 mr-3' />
                    <input
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type='text'
                      className='flex-1 outline-none text-neutral-500'
                      placeholder='Search Google or type a URL'
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                  {field.state.meta.errors.length ? (
                    <p className='mt-2 text-sm font-bold'>{field.state.meta.errors.join(',')}</p>
                  ) : null}
                </>
              )}
            />
          </div>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              className='bg-neutral-700 hover:bg-neutral-900 text-neutral-50 cursor-pointer'
            >
              Search Memory
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
