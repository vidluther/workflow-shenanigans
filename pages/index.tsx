import Link from 'next/link'

export default function IndexPage() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION;
  console.log(`App version: ${version}`);
  return (
    <div>
      Hello World. <Link href="/about"> Check About</Link> I am a simple next JS app.. <br /> <br /> <br /> <footer> my version is:  {version} </footer>
    </div>
  )
}
