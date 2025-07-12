
import Head from 'next/head'

export default function Drop() {
  return (
    <div>
      <Head>
        <title>Luxe Drop | Valestra</title>
      </Head>
      <h1>Luxe Drop Countdown</h1>
      <p>⏳ Drop ends in: <span id="timer">00:00:00</span></p>
      <script>
        {`
          let countdown = 5400;
          setInterval(() => {
            if (typeof document === 'undefined') return;
            countdown--;
            const hrs = String(Math.floor(countdown / 3600)).padStart(2, '0');
            const mins = String(Math.floor((countdown % 3600) / 60)).padStart(2, '0');
            const secs = String(countdown % 60).padStart(2, '0');
            document.getElementById("timer").textContent = \`\${hrs}:\${mins}:\${secs}\`;
          }, 1000);
        `}
      </script>
    </div>
  )
}
