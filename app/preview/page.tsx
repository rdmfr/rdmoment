'use client';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="relative mb-8">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, var(--gold-4) 0%, transparent 70%)',
            opacity: 0.1,
            filter: 'blur(40px)',
          }}
        />
        <div className="text-center relative">
          <div className="mb-4">
            <div
              className="w-16 h-16 mx-auto rounded-full"
              style={{ border: '2px solid var(--gold-4)' }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-2xl"
                style={{ color: 'var(--gold-4)' }}
              >
                AG
              </div>
            </div>
          </div>
          <h1
            className="text-3xl font-serif mb-2"
            style={{ color: 'var(--gold-4)' }}
          >
            Wedding Invitation
          </h1>
          <div
            className="text-xl mb-4 font-serif"
            style={{ color: 'var(--gold-4)' }}
          >
            Aditya & Gatarati
          </div>
          <div
            className="text-sm space-y-1 mb-6"
            style={{ color: 'var(--gold-3)' }}
          >
            <p>20.10.2024</p>
            <p>Surakarta, Jawa Tengah</p>
          </div>
        </div>
      </div>

      <button
        className="px-6 py-2 rounded-full text-sm font-medium"
        style={{
          background: 'linear-gradient(45deg, var(--gold-5), var(--gold-4))',
          color: '#000',
        }}
      >
        Open Invitation
      </button>
    </div>
  );
}
