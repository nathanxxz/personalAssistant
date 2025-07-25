"use client";

import { useState } from "react";

export default function AskComponent() {
  const [question, setQuestion] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setError("Por favor, digite sua pergunta");
      return;
    }

    const token = localStorage.getItem("auth_token");
    if (!token) {
      setError("Você não está autenticado. Por favor, faça login.");
      return;
    }

    setLoading(true);
    setError(null);
    setAudioUrl(null);

    try {
      const response = await fetch("http://localhost:5000/api/ia/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt: question }),
      });

      const data = await response.json();

      if (data?.download_url) {
        setAudioUrl(`http://localhost:5000${data.download_url}`);
        setQuestion("");
      } else {
        setError("Resposta inesperada do servidor: URL do áudio não encontrada.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Erro ao enviar a pergunta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl px-4 py-8">
      <form
        onSubmit={submitAsk}
        className="flex w-full bg-black rounded-2xl shadow-lg overflow-hidden"
      >
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta aqui..."
          rows={5}
          required
          className="flex-grow bg-transparent text-white px-5 py-4 text-base resize-none focus:outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="p-4 text-white hover:bg-[#4a4b51] transition disabled:opacity-60"
        >
          {loading ? (
            <span className="text-sm">Enviando...</span>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </form>

      {audioUrl && (
        <div className="mt-10 bg-[#343541] p-6 rounded-xl w-full text-center shadow-lg animate-fadeIn">
          <audio src={audioUrl} controls autoPlay className="w-full mb-2 rounded-md" />
          <a
            href={audioUrl}
            download
            className="text-sky-400 font-semibold text-sm hover:underline"
          >
            Baixar Áudio
          </a>
        </div>
      )}

      {error && (
        <p className="text-red-400 mt-6 font-medium text-center">{error}</p>
      )}
    </div>
  );
}
