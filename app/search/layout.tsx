import Tabs from "./components/Tabs";

export default function SearchLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className='flex flex-col gap-3'>
            <Tabs />
            {children}
        </main>
    )
}