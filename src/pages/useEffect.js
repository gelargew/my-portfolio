import { useEffect, useState } from "react"

export default function Page() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useeffect')
  }, [count])

  return (
    <main>
      <h1>Ini adalah halaman useEffect</h1>
      <br />
      <br />
      <div style={{
        fontSize: 24,

      }} onClick={() => setCount(count + 1)}>Tambah</div>
      <p style={{
        fontSize: 50
      }} >Count: {count}</p>
    </main>
  )
}