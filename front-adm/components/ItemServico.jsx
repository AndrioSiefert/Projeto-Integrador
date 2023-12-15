import Swal from 'sweetalert2';
import { HiTrash } from 'react-icons/hi';
import { BsFillPencilFill } from 'react-icons/bs';

export default function ItemServico(props) {
  function confirmaExclusao(id) {
    // if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
    //   props.exclui(id)
    // }
    Swal.fire({
      title: `Confirma Exclusão do Serviço?`,
      text: 'Esta operação não poderá ser desfeita',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim. Excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        props.exclui(id);
        Swal.fire('Excluído!', 'Serviço excluído com sucesso', 'success');
      }
    });
  }

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.servico.nome}
      </th>
      <td className="px-6 py-4">{props.servico.descricao}</td>
      <td className="px-6 py-4">{props.servico.preco}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <i
            className="cursor-pointer"
            onClick={() => confirmaExclusao(props.servico.id)}
          >
            <HiTrash />
          </i>
          <i className="cursor-pointer" onClick={props.altera}>
            <BsFillPencilFill />
          </i>
        </div>
      </td>
    </tr>
  );
}
