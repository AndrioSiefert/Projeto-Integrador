'use client';

export default function ItemFeedback(props) {
  return (
    <div className="rounded-md border border-purple-500 m-4 bg-white p-4 hover:shadow-lg">
      <p className="font-bold text-indigo-800 text-xl">
        {props.feedback.mensagem}
      </p>
      Paciente: {props.feedback.cliente.nome}
    </div>
  );
}
