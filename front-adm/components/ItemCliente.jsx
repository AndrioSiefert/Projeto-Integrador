import Swal from 'sweetalert2';
import { HiTrash } from 'react-icons/hi';

export default function ItemCliente(props) {
  function confirmaExclusao(id) {
    // if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
    //   props.exclui(id)
    // }
    Swal.fire({
      title: `Confirma Exclusão Cliente?`,
      text: 'Esta operação não poderá ser desfeita',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim. Excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        props.exclui(id);
        Swal.fire('Excluído!', 'Cliente excluído com sucesso', 'success');
      }
    });
  }
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.cliente.nome}
      </th>
      {/* <td className="px-6 py-4">{props.cliente.idade}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.sexo}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.dataNascimento}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.profissao}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.estadoCivil}</td> */}
      <td className="px-6 py-4">{props.cliente.cpf}</td>
      {/* <td className="px-6 py-4">{props.cliente.cep}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.endereco}</td> */}
      {/* <td className="px-6 py-4">{props.cliente.bairro}</td> */}
      <td className="px-6 py-4">{props.cliente.cidade}</td>
      {/* <td className="px-6 py-4">{props.cliente.estado}</td> */}
      <td className="px-6 py-4">{props.cliente.telefone}</td>
      <td className="px-6 py-4">{props.cliente.email}</td>
      {/* <td>
        <button className="btn btn-danger" onClick={() => confirmaExclusao(props.id)}>
          <i className="fa fa-trash"></i>
        </button>
        <button className="btn btn-warning" onClick={() => props.edita(props.id)}>
          <i className="fa fa-pencil"></i>
        </button>
      </td> */}
      <td className="px-6 py-4">
        <i
          className="cursor-pointer"
          onClick={() => confirmaExclusao(props.cliente.id)}
        >
          <HiTrash />
        </i>
      </td>
    </tr>
  );
}
