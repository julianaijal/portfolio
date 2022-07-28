import Link from 'next/link'

export default function Post() {
  return (
    <>
      <h1>Post two</h1>
      <Link href='/'>
          <a>{'<'} Back</a>
      </Link>
    </>
  );
}